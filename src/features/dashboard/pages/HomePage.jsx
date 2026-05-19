import {
  AlertCircleIcon,
  FileTextIcon,
  TargetIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  Link,
} from 'lucide-react';

const historyData = [
  {
    id: 1,
    date: 'Oct 12, 2023',
    discipline: 'Software Engineering',
    match: 85,
  },
  {
    id: 2,
    date: 'Sep 28, 2023',
    discipline: 'Data Analysis',
    match: 62,
  },
  {
    id: 3,
    date: 'Aug 15, 2023',
    discipline: 'Product Management',
    match: 74,
  },
];

export default function HomePage() {
  return (
    <div className='mx-auto max-w-7xl space-y-6 p-4 md:p-8'>
      {/* Block 1: Welcome Banner */}
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-8'>
        <h1 className='text-brand-dark mb-2 text-2xl font-bold md:text-3xl'>
          Welcome back, Zimbiat
        </h1>
        <p className='text-brand-muted mb-6'>
          Here is what's happening with your career progression today.
        </p>

        <div className='bg-feedback-warning/10 border-feedback-warning/20 flex items-start gap-3 rounded-lg border p-4'>
          <AlertCircleIcon
            className='text-feedback-warning mt-0.5 shrink-0'
            size={20}
          />

          <div>
            <h3 className='text-feedback-warning text-sm font-semibold'>
              Career Blueprint Locked
            </h3>
            <p className='text-feedback-warning/80 mt-1 text-sm'>
              Complete a new skill evaluation or upload your latest CV to unlock
              your personalized career roadmap.
            </p>
          </div>
        </div>
      </div>

      {/* Block 2: Onboarding Split Panels */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='bg-canvas-panel border-border-subtle flex h-full flex-col rounded-2xl border p-6 shadow-sm md:p-8'>
          <div className='bg-brand-primary/10 text-brand-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl'>
            <TargetIcon size={24} />
          </div>
          <h2 className='text-brand-dark mb-2 text-xl font-bold'>
            Interactive Skill Triage
          </h2>
          <p className='text-brand-muted mb-8 flex-1'>
            Manually select your current skills across various disciplines to
            get an instant assessment of your career readiness.
          </p>
          <Link
            to='/skill-selector'
            className='bg-brand-primary hover:bg-brand-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-white transition-colors'
          >
            Start Manual Test
            <ArrowRightIcon size={18} />
          </Link>
        </div>

        <div className='bg-canvas-panel border-border-subtle flex h-full flex-col rounded-2xl border p-6 shadow-sm md:p-8'>
          <div className='bg-brand-secondary/10 text-brand-secondary mb-5 flex h-12 w-12 items-center justify-center rounded-xl'>
            <FileTextIcon size={24} />
          </div>
          <h2 className='text-brand-dark mb-2 text-xl font-bold'>
            Automated CV Upload
          </h2>
          <p className='text-brand-muted mb-8 flex-1'>
            Upload your resume and let our engine automatically extract your
            experiences to build your profile instantly.
          </p>
          <Link
            to='/cv-upload'
            className='bg-canvas-panel border-border-subtle text-brand-dark hover:border-brand-primary hover:text-brand-primary inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 font-medium transition-colors'
          >
            Upload Document
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </div>

      {/* Block 3: History Log */}
      <div className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'>
        <div className='border-border-subtle flex items-center justify-between border-b p-6'>
          <h2 className='text-brand-dark text-lg font-bold'>
            Evaluation History
          </h2>
          <button className='text-brand-primary text-sm font-medium hover:underline'>
            View all
          </button>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full border-collapse text-left'>
            <thead>
              <tr className='bg-canvas-inset text-brand-muted text-xs tracking-wider uppercase'>
                <th className='px-6 py-4 font-medium'>Date</th>
                <th className='px-6 py-4 font-medium'>Discipline Branch</th>
                <th className='px-6 py-4 font-medium'>Verified Match</th>
                <th className='px-6 py-4 text-right font-medium'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-border-subtle divide-y'>
              {historyData.map(row => (
                <tr
                  key={row.id}
                  className='hover:bg-canvas-inset/50 transition-colors'
                >
                  <td className='text-brand-dark px-6 py-4 text-sm whitespace-nowrap'>
                    {row.date}
                  </td>
                  <td className='text-brand-dark px-6 py-4 text-sm font-medium'>
                    {row.discipline}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap'>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-medium ${row.match >= 70 ? 'bg-feedback-success/10 text-feedback-success' : 'bg-feedback-warning/10 text-feedback-warning'}`}
                    >
                      {row.match}%
                    </span>
                  </td>
                  <td className='px-6 py-4 text-right text-sm whitespace-nowrap'>
                    <Link
                      to='/roadmap'
                      className='text-brand-primary inline-flex items-center gap-1 font-medium hover:underline'
                    >
                      View Roadmap
                      <ChevronRightIcon size={16} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
