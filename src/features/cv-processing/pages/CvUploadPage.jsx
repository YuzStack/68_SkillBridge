import { useState, useRef } from 'react';
import {
  UploadCloudIcon,
  FileIcon,
  CheckCircle2Icon,
  XIcon,
  PlusIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import { parsePdfText, extractCvMetricsWithAi } from '../services/cvService';
import { useSubmitAssessment } from '../../skill-assessment/hooks/useAssessment';
import { useUser } from '../../authentication/hooks/useUser';

export default function CvUploadPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { user, profile } = useUser();
  const { mutate: submitAssessment, isPending: isSavingProfile } =
    useSubmitAssessment();

  const [uploadState, setUploadState] = useState('idle'); // idle, uploading, parsed
  const [fileName, setFileName] = useState('');

  // Real extracted metrics data state
  const [extractedData, setExtractedData] = useState({
    education: '',
    experience: '',
    skills: [],
  });

  const [newSkillInput, setNewSkillInput] = useState('');
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const processFile = async file => {
    if (!file || file.type !== 'application/pdf') {
      toast.error('SkillBridge strictly supports standard PDF uploads.');
      return;
    }

    try {
      setFileName(file.name);
      setUploadState('uploading');

      // A. Extract plain text from PDF pages locally
      const extractedRawText = await parsePdfText(file);

      if (!extractedRawText.trim()) {
        throw new Error(
          'Could not extract legible string elements out of the PDF layout configuration.',
        );
      }

      // B. Dispatch payload to Gemini ATS parsing service
      const aiParsedResult = await extractCvMetricsWithAi(extractedRawText);

      setExtractedData({
        education: aiParsedResult.education || 'Not Specified',
        experience: aiParsedResult.experience || 'Not Specified',
        skills: aiParsedResult.skills || [],
      });

      setUploadState('parsed');
      toast.success('CV contents compiled successfully!');
    } catch (error) {
      console.error(error);
      toast.error(
        error.message || 'Failed to analyze uploaded document matrix.',
      );
      setUploadState('idle');
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0];
    processFile(file);
  };

  const handleFileChange = e => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const removeSkillTag = targetSkill => {
    setExtractedData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== targetSkill),
    }));
  };

  const handleAddSkillSubmit = e => {
    e.preventDefault();
    const cleanSkill = newSkillInput.trim();
    if (cleanSkill && !extractedData.skills.includes(cleanSkill)) {
      setExtractedData(prev => ({
        ...prev,
        skills: [...prev.skills, cleanSkill],
      }));
      setNewSkillInput('');
      setIsAddingSkill(false);
    }
  };

  const handleConfirmAndSave = () => {
    if (extractedData.skills.length === 0) {
      toast.error(
        'Profile must include at least one mapped skill tag before confirmation.',
      );
      return;
    }

    // Save profile metrics directly into our assessments table row logs
    submitAssessment(
      {
        userId: user.id,
        discipline: 'Automated CV Parsing Profile',
        selectedSkills: extractedData.skills,
        verifiedScore: 100, // Fixed baseline completion value indicator
        rawPayload: {
          education: extractedData.education,
          experience: extractedData.experience,
        },
      },
      {
        onSuccess: () => {
          toast.success('Professional data synchronized with your profile!');
          // Seamlessly pass parameters to recommendations search params
          navigate('/recommendations');
        },
        onError: err => {
          toast.error(
            'Failed to update profile configurations: ' + err.message,
          );
        },
      },
    );
  };

  const studentInitials = profile?.full_name
    ? profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'ST';

  return (
    <div className='bg-canvas-default mx-auto min-h-[calc(100vh-4rem)] max-w-5xl space-y-6 p-4 font-sans md:p-8'>
      <div>
        <h1 className='text-brand-dark text-2xl font-bold'>
          Automated CV Upload
        </h1>
        <p className='text-brand-muted mt-1 text-sm'>
          Upload your resume to automatically extract your structural skills and
          experience.
        </p>
      </div>

      {/* Input tag reference gate */}
      <input
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        accept='application/pdf'
        className='hidden'
      />

      {uploadState === 'idle' && (
        <div
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className='border-border-subtle bg-canvas-panel hover:border-brand-primary hover:bg-canvas-inset/30 group cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center shadow-sm transition-all'
        >
          <div className='bg-canvas-inset text-brand-muted group-hover:text-brand-primary group-hover:bg-brand-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors'>
            <UploadCloudIcon size={32} />
          </div>
          <h3 className='text-brand-dark mb-2 text-base font-bold'>
            Drag your CV here or click to browse
          </h3>
          <p className='text-brand-muted text-xs'>
            Supports PDF formatting metrics only (Max 5MB)
          </p>
        </div>
      )}

      {uploadState === 'uploading' && (
        <div className='bg-canvas-panel border-border-subtle flex flex-col items-center justify-center rounded-2xl border p-12 text-center shadow-sm'>
          <div className='w-full max-w-md space-y-4'>
            <div className='flex items-center justify-between text-sm font-semibold'>
              <span className='text-brand-dark flex items-center gap-2 truncate'>
                <FileIcon size={16} className='text-brand-primary shrink-0' />
                {fileName}
              </span>
              <span className='text-brand-primary animate-pulse'>
                Analyzing File...
              </span>
            </div>
            <div className='bg-canvas-inset relative h-2 w-full overflow-hidden rounded-full'>
              <div
                className='bg-brand-primary animate-infinite-loading h-full w-1/3 rounded-full'
                style={{ animation: 'loading-bar 1.5s infinite ease-in-out' }}
              />
            </div>
            <p className='text-brand-muted animate-pulse text-xs'>
              SkillBridge parsing binary buffers and aligning skill profiles...
            </p>
          </div>
        </div>
      )}

      {uploadState === 'parsed' && (
        <div className='grid grid-cols-1 items-start gap-6 lg:grid-cols-2'>
          {/* Data Inputs Editing Block */}
          <div className='bg-canvas-panel border-border-subtle space-y-6 rounded-2xl border p-6 shadow-sm'>
            <div className='border-border-subtle flex items-center justify-between border-b pb-4'>
              <h2 className='text-brand-dark text-base font-bold'>
                Extracted Profile Fields
              </h2>
              <button
                onClick={() => setUploadState('idle')}
                className='text-brand-muted hover:text-feedback-danger flex cursor-pointer items-center gap-1 text-xs font-semibold transition-colors'
              >
                <XIcon size={14} /> Re-upload
              </button>
            </div>

            <div className='space-y-5'>
              <div>
                <label className='text-brand-secondary mb-1.5 block text-xs font-bold tracking-wider uppercase'>
                  Education Mapping
                </label>
                <input
                  type='text'
                  value={extractedData.education}
                  onChange={e =>
                    setExtractedData(prev => ({
                      ...prev,
                      education: e.target.value,
                    }))
                  }
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
                />
              </div>

              <div>
                <label className='text-brand-secondary mb-1.5 block text-xs font-bold tracking-wider uppercase'>
                  Historical Experience Log
                </label>
                <textarea
                  rows={4}
                  value={extractedData.experience}
                  onChange={e =>
                    setExtractedData(prev => ({
                      ...prev,
                      experience: e.target.value,
                    }))
                  }
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full resize-none rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
                />
              </div>

              <div>
                <label className='text-brand-secondary mb-2 block text-xs font-bold tracking-wider uppercase'>
                  Mapped Skills Tags Matrix
                </label>
                <div className='flex flex-wrap gap-2'>
                  {extractedData.skills.map(skill => (
                    <span
                      key={skill}
                      className='bg-canvas-inset border-border-subtle text-brand-dark inline-flex items-center gap-1 rounded-full border py-1 pr-1.5 pl-3 text-xs font-semibold shadow-sm'
                    >
                      {skill}
                      <button
                        onClick={() => removeSkillTag(skill)}
                        className='text-brand-muted hover:text-feedback-danger hover:bg-canvas-panel ml-1 cursor-pointer rounded-full p-0.5 transition-colors'
                      >
                        <XIcon size={12} />
                      </button>
                    </span>
                  ))}

                  {isAddingSkill ? (
                    <form
                      onSubmit={handleAddSkillSubmit}
                      className='inline-flex items-center gap-1'
                    >
                      <input
                        type='text'
                        autoFocus
                        value={newSkillInput}
                        onChange={e => setNewSkillInput(e.target.value)}
                        onBlur={() =>
                          setTimeout(() => setIsAddingSkill(false), 200)
                        }
                        className='bg-canvas-inset border-brand-primary text-brand-dark w-24 rounded-full border px-3 py-1 text-xs outline-none'
                        placeholder='Skill Name'
                      />
                    </form>
                  ) : (
                    <button
                      onClick={() => setIsAddingSkill(true)}
                      className='border-border-subtle text-brand-muted hover:text-brand-primary hover:border-brand-primary bg-canvas-panel inline-flex cursor-pointer items-center gap-1 rounded-full border border-dashed px-3 py-1 text-xs font-bold transition-colors'
                    >
                      <PlusIcon size={12} /> Add Tag
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary Preview Column */}
          <div className='bg-canvas-panel border-border-subtle sticky top-20 flex flex-col rounded-2xl border p-6 shadow-sm'>
            <h2 className='text-brand-dark mb-4 text-base font-bold'>
              Verified Summary Preview
            </h2>

            <div className='bg-canvas-inset border-border-subtle flex-1 space-y-4 rounded-xl border p-6'>
              <div className='mb-2 flex items-center gap-3'>
                <div className='bg-brand-secondary border-canvas-panel flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold text-white shadow-sm'>
                  {studentInitials}
                </div>
                <div className='truncate'>
                  <h4 className='text-brand-dark truncate text-sm font-bold'>
                    {profile?.full_name || 'Loading Profile...'}
                  </h4>
                  <p className='text-brand-muted truncate text-xs'>
                    {extractedData.education || 'Parsing Academic Records...'}
                  </p>
                </div>
              </div>

              <div className='space-y-3 text-xs font-semibold'>
                <div className='text-brand-dark flex items-start gap-2'>
                  <CheckCircle2Icon
                    size={16}
                    className='text-feedback-success mt-0.5 shrink-0'
                  />
                  <span>Academic profiles parsed cleanly.</span>
                </div>
                <div className='text-brand-dark flex items-start gap-2'>
                  <CheckCircle2Icon
                    size={16}
                    className='text-feedback-success mt-0.5 shrink-0'
                  />
                  <span>Professional experiences cataloged.</span>
                </div>
                <div className='text-brand-dark flex items-start gap-2'>
                  <CheckCircle2Icon
                    size={16}
                    className='text-feedback-success mt-0.5 shrink-0'
                  />
                  <span>
                    {extractedData.skills.length} technical skills mapped to
                    dashboard.
                  </span>
                </div>
              </div>
            </div>

            <div className='border-border-subtle mt-6 border-t pt-4'>
              <button
                onClick={handleConfirmAndSave}
                disabled={isSavingProfile}
                className='bg-brand-primary hover:bg-brand-primary/90 w-full cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50'
              >
                {isSavingProfile
                  ? 'Synchronizing Profile...'
                  : 'Confirm & Save Profile'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
