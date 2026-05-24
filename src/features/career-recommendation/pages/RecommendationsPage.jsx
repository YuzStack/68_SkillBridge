import {
  CheckCircle2Icon,
  AlertTriangleIcon,
  ArrowRightIcon,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router';

import { useCareerRecommendations } from '../hooks/useRecommendations';
import { useUser } from '../../authentication/hooks/useUser';
import Spinner from '../../../components/Spinner';

export default function RecommendationsPage() {
  const navigate = useNavigate();
  const { user, profile } = useUser();

  // Initialize our unified caching data hook
  const { recommendations, assessment, isLoading, error } =
    useCareerRecommendations(user?.id);

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center font-sans'>
        <Spinner />
        <p className='text-brand-muted mt-2 animate-pulse text-sm'>
          SkillBridge AI compiling matching career paths and parsing skill
          profiles...
        </p>
      </div>
    );
  }

  // Edge case handle: No historic evaluations found inside Supabase records
  if (error || !recommendations || recommendations.length === 0) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 text-center font-sans'>
        <h2 className='text-brand-dark text-xl font-bold'>
          No Active Career Blueprints Found
        </h2>
        <p className='text-brand-muted mt-1 max-w-md text-sm'>
          Before unlocking matching roadmaps, complete a simple evaluation
          session to calculate your baseline criteria.
        </p>
        <button
          onClick={() => navigate('/skill-selector')}
          className='bg-brand-primary hover:bg-brand-primary/90 mt-6 cursor-pointer rounded-lg px-5 py-2.5 font-medium text-white transition-colors'
        >
          Take Assessment Quiz
        </button>
      </div>
    );
  }

  const studentName = profile?.full_name
    ? profile.full_name.split(' ')[0]
    : 'Scholar';

  return (
    <div className='bg-canvas-default mx-auto max-w-7xl space-y-8 p-4 font-sans md:p-8'>
      {/* Overview Metric Banner Card */}
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-8'>
        <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
          Assessment Results for {studentName}
        </h1>
        <p className='text-brand-muted max-w-3xl text-sm leading-relaxed'>
          Based on your recent dynamic quiz evaluation (where you scored a
          verified{' '}
          <span className='text-brand-primary font-bold'>
            {assessment?.verified_match_score}% accuracy rating
          </span>{' '}
          across your chosen core disciplines), our AI advisor has generated
          three matching career tracks relevant to modern industry metrics.
        </p>
      </div>

      {/* Grid Dashboard Loop */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {recommendations.map(rec => (
          <div
            key={rec.id}
            className='bg-canvas-panel border-border-subtle hover:border-brand-primary/40 flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-200'
          >
            <div className='mb-4 flex items-start justify-between gap-2'>
              <h2 className='text-brand-dark text-lg leading-tight font-bold tracking-tight'>
                {rec.title}
              </h2>
              <div
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  rec.match_percentage >= 80
                    ? 'bg-feedback-success/10 text-feedback-success'
                    : rec.match_percentage >= 70
                      ? 'bg-brand-primary/10 text-brand-primary'
                      : 'bg-feedback-warning/10 text-feedback-warning'
                }`}
              >
                {rec.match_percentage}% Match
              </div>
            </div>

            <p className='text-brand-muted mb-6 flex-1 text-xs leading-relaxed'>
              {rec.description}
            </p>

            {/* Strengths & Gaps Content Stack */}
            <div className='mb-8 space-y-5'>
              <div>
                <h3
                  className='text-brand-secondary mb-3 font-sans text-2xl tracking-wider uppercase'
                  style={{ fontSize: '10px', fontWeight: '700' }}
                >
                  Verified Strengths
                </h3>
                <ul className='space-y-2'>
                  {rec.strengths.map((strength, i) => (
                    <li
                      key={i}
                      className='text-brand-dark flex items-start gap-2 text-xs leading-tight'
                    >
                      <CheckCircle2Icon
                        size={14}
                        className='text-feedback-success mt-0.5 shrink-0'
                      />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className='text-brand-secondary mb-3 font-sans text-2xl tracking-wider uppercase'
                  style={{ fontSize: '10px', fontWeight: '700' }}
                >
                  Identified Gaps
                </h3>
                <ul className='space-y-2'>
                  {rec.gaps.map((gap, i) => (
                    <li
                      key={i}
                      className='text-brand-dark flex items-start gap-2 text-xs leading-tight'
                    >
                      <AlertTriangleIcon
                        size={14}
                        className='text-feedback-warning mt-0.5 shrink-0'
                      />
                      {gap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pass current job parameters forward to timeline views using state routers */}
            <Link
              to='/roadmap'
              state={{
                chosenJob: rec.title,
                gaps: rec.gaps,
                strengths: rec.strengths,
                suitability: rec.match_percentage,
              }}
              className='bg-canvas-inset border-border-subtle text-brand-dark hover:bg-canvas-default hover:border-brand-primary/50 mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors'
            >
              View Personalized Roadmap
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
