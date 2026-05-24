import {
  AlertCircleIcon,
  FileTextIcon,
  TargetIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  CheckCircle2Icon,
  Trash2Icon,
} from 'lucide-react';
import { Link } from 'react-router';

import { useUser } from '../../authentication/hooks/useUser';
import {
  useDashboardData,
  useDeleteAssessment,
} from '../hooks/useDashboardData';
import Spinner from '../../../components/Spinner';

export default function HomePage() {
  const { user, profile, isLoading: isLoadingUser } = useUser();
  const { data, isLoading: isLoadingData } = useDashboardData(user?.id);

  // Initialize our new real-time deletion engine hook
  const { mutate: deleteAssessment, isPending: isDeleting } =
    useDeleteAssessment();

  if (isLoadingUser || isLoadingData) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] items-center justify-center font-sans'>
        <Spinner />
      </div>
    );
  }

  const firstName = profile?.full_name
    ? profile.full_name.split(' ')[0]
    : 'Scholar';
  const historyLogs = data?.history || [];
  const savedRoadmaps = data?.roadmaps || [];
  const isUnlocked = historyLogs.length > 0;

  const formatDisplayDate = isoString => {
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleDeleteClick = id => {
    if (
      window.confirm(
        'Are you absolutely sure you want to delete this evaluation? This action will permanently remove its associated learning roadmap from your profile metrics.',
      )
    ) {
      deleteAssessment(id);
    }
  };

  return (
    <div className='bg-canvas-default mx-auto min-h-[calc(100vh-4rem)] max-w-7xl space-y-6 p-4 font-sans md:p-8'>
      {/* Banner Card */}
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-8'>
        <h1 className='text-brand-dark mb-2 text-2xl font-bold md:text-3xl'>
          Welcome back, {firstName}
        </h1>
        <p className='text-brand-muted mb-6 text-sm'>
          Here is what's happening with your career progression today.
        </p>

        {isUnlocked ? (
          <div className='bg-feedback-success/10 border-feedback-success/20 flex items-start gap-3 rounded-lg border p-4 transition-all'>
            <CheckCircle2Icon
              className='text-feedback-success mt-0.5 shrink-0'
              size={20}
            />
            <div>
              <h3 className='text-feedback-success text-sm font-bold'>
                Career Blueprint Unlocked
              </h3>
              <p className='text-feedback-success/80 mt-1 text-sm'>
                Your technical profile metrics are active! Review your
                recommended tracks below or visit your tailored timeline.
              </p>
            </div>
          </div>
        ) : (
          <div className='bg-feedback-warning/10 border-feedback-warning/20 flex items-start gap-3 rounded-lg border p-4 transition-all'>
            <AlertCircleIcon
              className='text-feedback-warning mt-0.5 shrink-0'
              size={20}
            />
            <div>
              <h3 className='text-feedback-warning text-sm font-bold'>
                Career Blueprint Locked
              </h3>
              <p className='text-feedback-warning/80 mt-1 text-sm'>
                Complete a new skill evaluation or upload your latest CV to
                unlock your personalized career roadmap.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Grid Cards Area */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='bg-canvas-panel border-border-subtle hover:border-brand-primary/30 flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-colors md:p-8'>
          <div className='bg-brand-primary/10 text-brand-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl'>
            <TargetIcon size={24} />
          </div>
          <h2 className='text-brand-dark mb-2 text-lg font-bold'>
            Interactive Skill Triage
          </h2>
          <p className='text-brand-muted mb-8 flex-1 text-xs leading-relaxed'>
            Manually select your current skills across various disciplines to
            get an instant assessment of your career readiness.
          </p>
          <Link
            to='/skill-selector'
            className='bg-brand-primary hover:bg-brand-primary/90 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors'
          >
            Start Manual Test <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className='bg-canvas-panel border-border-subtle hover:border-brand-primary/30 flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-colors md:p-8'>
          <div className='bg-brand-secondary/10 text-brand-secondary mb-5 flex h-12 w-12 items-center justify-center rounded-xl'>
            <FileTextIcon size={24} />
          </div>
          <h2 className='text-brand-dark mb-2 text-lg font-bold'>
            Automated CV Upload
          </h2>
          <p className='text-brand-muted mb-8 flex-1 text-xs leading-relaxed'>
            Upload your resume and let our engine automatically extract your
            experiences to build your profile instantly.
          </p>
          <Link
            to='/cv-upload'
            className='bg-canvas-panel border-border-subtle text-brand-dark hover:border-brand-primary hover:text-brand-primary inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors'
          >
            Upload Document <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>

      {/* History Log Table Area */}
      <div className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'>
        <div className='border-border-subtle flex items-center justify-between border-b p-6'>
          <h2 className='text-brand-dark text-base font-bold'>
            Evaluation History Logs
          </h2>
          <span className='text-brand-muted bg-canvas-inset rounded-full px-2.5 py-1 text-xs font-semibold'>
            {historyLogs.length} Session{historyLogs.length !== 1 ? 's' : ''}
          </span>
        </div>

        {historyLogs.length === 0 ? (
          <div className='text-brand-muted p-12 text-center text-sm font-medium'>
            No evaluation records found. Complete a triage scan module above to
            populate history metrics.
          </div>
        ) : (
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-left'>
              <thead>
                <tr className='bg-canvas-inset text-brand-muted text-xxs border-border-subtle border-b font-bold tracking-wider uppercase select-none'>
                  <th className='px-6 py-4 font-semibold'>Date Evaluated</th>
                  <th className='px-6 py-4 font-semibold'>Discipline Branch</th>
                  <th className='px-6 py-4 font-semibold'>
                    Verified Score Met
                  </th>
                  <th className='px-6 py-4 text-right font-semibold'>
                    Actions Control
                  </th>
                </tr>
              </thead>
              <tbody className='divide-border-subtle divide-y'>
                {historyLogs.map(row => {
                  const correspondingRoadmap = savedRoadmaps.find(
                    rm =>
                      rm.assessment_id === row.id ||
                      rm.assessment_id ===
                        '00000000-0000-0000-0000-000000000000',
                  );
                  const targetJobName =
                    correspondingRoadmap?.target_career_title ||
                    row.selected_skills[0] ||
                    'Engineering';

                  return (
                    <tr
                      key={row.id}
                      className='hover:bg-canvas-inset/40 group transition-colors'
                    >
                      <td className='text-brand-dark px-6 py-4 text-xs font-medium whitespace-nowrap'>
                        {formatDisplayDate(row.created_at)}
                      </td>
                      <td className='text-brand-dark max-w-xs truncate px-6 py-4 text-xs font-bold'>
                        {row.tested_discipline}
                      </td>
                      <td className='px-6 py-4 text-xs whitespace-nowrap'>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-bold ${row.verified_match_score >= 70 ? 'bg-feedback-success/10 text-feedback-success' : 'bg-feedback-warning/10 text-feedback-warning'}`}
                        >
                          {row.verified_match_score}%
                        </span>
                      </td>
                      <td className='flex h-14 items-center justify-end gap-4 px-6 py-4 text-right text-xs whitespace-nowrap'>
                        <Link
                          to={
                            correspondingRoadmap
                              ? `/roadmap?job=${encodeURIComponent(targetJobName)}`
                              : '/recommendations'
                          }
                          className='text-brand-primary inline-flex items-center gap-1 font-bold hover:underline'
                        >
                          {correspondingRoadmap ? 'View Roadmap' : 'Review'}{' '}
                          <ChevronRightIcon size={14} />
                        </Link>

                        {/* Elegant delete row icon utility */}
                        <button
                          onClick={() => handleDeleteClick(row.id)}
                          disabled={isDeleting}
                          className='text-brand-muted hover:text-feedback-danger cursor-pointer rounded-md p-1 opacity-60 transition-colors group-hover:opacity-100 disabled:opacity-30'
                          title='Delete Assessment Record'
                        >
                          <Trash2Icon size={14} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
