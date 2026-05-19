import { useEffect, useState } from 'react';
import {
  UploadCloudIcon,
  FileIcon,
  CheckCircle2Icon,
  XIcon,
} from 'lucide-react';
// eslint-disable-next-line
import { motion } from 'motion/react';

export default function CvUploadPage() {
  const [uploadState, setUploadState] = useState('idle'); // idle, uploading, parsed
  const [progress, setProgress] = useState(0);

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    e.preventDefault();
    startUpload();
  };

  const startUpload = () => {
    setUploadState('uploading');
    setProgress(0);
  };

  useEffect(() => {
    if (uploadState === 'uploading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setUploadState('parsed'), 500);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [uploadState]);

  return (
    <div className='mx-auto max-w-5xl space-y-6 p-4 md:p-8'>
      <div>
        <h1 className='text-brand-dark text-2xl font-bold'>
          Automated CV Upload
        </h1>
        <p className='text-brand-muted mt-1'>
          Upload your resume to automatically extract your skills and
          experience.
        </p>
      </div>

      {uploadState === 'idle' && (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={startUpload}
          className='border-border-subtle bg-canvas-panel hover:border-brand-primary hover:bg-canvas-inset/50 group cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-all'
        >
          <div className='bg-canvas-inset text-brand-muted group-hover:text-brand-primary group-hover:bg-brand-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors'>
            <UploadCloudIcon size={32} />
          </div>
          <h3 className='text-brand-dark mb-2 text-lg font-semibold'>
            Drag your CV here or click to browse
          </h3>
          <p className='text-brand-muted text-sm'>
            Supports PDF, DOCX, or TXT (Max 5MB)
          </p>
        </div>
      )}

      {uploadState === 'uploading' && (
        <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-12 text-center shadow-sm'>
          <div className='mx-auto max-w-md'>
            <div className='mb-2 flex items-center justify-between'>
              <span className='text-brand-dark flex items-center gap-2 text-sm font-medium'>
                <FileIcon size={16} className='text-brand-primary' />
                Amara_Okeke_Resume.pdf
              </span>
              <span className='text-brand-primary text-sm font-medium'>
                {progress}%
              </span>
            </div>
            <div className='bg-canvas-inset h-2 w-full overflow-hidden rounded-full'>
              <motion.div
                className='bg-brand-primary h-full rounded-full'
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.1,
                }}
              />
            </div>
            <p className='text-brand-muted mt-4 animate-pulse text-sm'>
              Processing document and extracting skills...
            </p>
          </div>
        </div>
      )}

      {uploadState === 'parsed' && (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm'>
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-brand-dark text-lg font-bold'>
                Extracted Data
              </h2>
              <button
                onClick={() => setUploadState('idle')}
                className='text-brand-muted hover:text-brand-dark flex items-center gap-1 text-sm'
              >
                <XIcon size={16} /> Cancel
              </button>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='text-brand-secondary mb-3 text-sm font-semibold tracking-wider uppercase'>
                  Education
                </h3>
                <input
                  type='text'
                  defaultValue='BSc Computer Science, Lagos State University'
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
                />
              </div>

              <div>
                <h3 className='text-brand-secondary mb-3 text-sm font-semibold tracking-wider uppercase'>
                  Experience
                </h3>
                <textarea
                  rows={3}
                  defaultValue='Frontend Developer Intern at TechCorp (2022-2023). Built responsive web applications using React and Tailwind CSS.'
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full resize-none rounded-lg border px-4 py-2.5 transition-colors focus:outline-none'
                />
              </div>

              <div>
                <h3 className='text-brand-secondary mb-3 text-sm font-semibold tracking-wider uppercase'>
                  Identified Skills
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'React',
                    'JavaScript',
                    'Tailwind CSS',
                    'Git',
                    'Responsive Design',
                  ].map(skill => (
                    <span
                      key={skill}
                      className='bg-canvas-inset border-border-subtle text-brand-dark inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium'
                    >
                      {skill}
                      <button className='text-brand-muted hover:text-feedback-danger ml-1'>
                        <XIcon size={14} />
                      </button>
                    </span>
                  ))}
                  <button className='border-border-subtle text-brand-muted hover:text-brand-dark hover:border-brand-primary inline-flex items-center rounded-full border border-dashed px-3 py-1.5 text-sm font-medium transition-colors'>
                    + Add Skill
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-canvas-panel border-border-subtle flex flex-col rounded-2xl border p-6 shadow-sm'>
            <h2 className='text-brand-dark mb-6 text-lg font-bold'>
              Preview Summary
            </h2>

            <div className='bg-canvas-inset border-border-subtle flex-1 rounded-xl border p-6'>
              <div className='mb-4 flex items-center gap-3'>
                <div className='bg-brand-primary flex h-10 w-10 items-center justify-center rounded-full font-bold text-white'>
                  AO
                </div>
                <div>
                  <h4 className='text-brand-dark font-bold'>Amara Okeke</h4>
                  <p className='text-brand-muted text-xs'>
                    Frontend Developer Profile
                  </p>
                </div>
              </div>

              <div className='space-y-4 text-sm'>
                <div className='flex gap-2'>
                  <CheckCircle2Icon
                    size={18}
                    className='text-feedback-success shrink-0'
                  />

                  <span className='text-brand-dark'>Education verified</span>
                </div>
                <div className='flex gap-2'>
                  <CheckCircle2Icon
                    size={18}
                    className='text-feedback-success shrink-0'
                  />

                  <span className='text-brand-dark'>
                    1 year relevant experience
                  </span>
                </div>
                <div className='flex gap-2'>
                  <CheckCircle2Icon
                    size={18}
                    className='text-feedback-success shrink-0'
                  />

                  <span className='text-brand-dark'>
                    5 core technical skills mapped
                  </span>
                </div>
              </div>
            </div>

            <div className='border-border-subtle mt-6 border-t pt-6'>
              <button
                onClick={() => (window.location.href = '/recommendations')}
                className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-3 font-medium text-white transition-colors'
              >
                Confirm & Save Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
