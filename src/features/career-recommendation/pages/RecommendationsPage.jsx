import {
  CheckCircle2Icon,
  AlertTriangleIcon,
  ArrowRightIcon,
  Link,
} from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: 'Frontend Developer',
    description:
      'Build user interfaces and web applications using modern JavaScript frameworks.',
    match: 92,
    strengths: ['React Fundamentals', 'Responsive CSS', 'JavaScript ES6+'],
    gaps: ['State Management (Redux)', 'Web Accessibility (a11y)'],
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    description:
      'Design intuitive digital experiences and create interactive prototypes.',
    match: 78,
    strengths: ['Wireframing', 'User Empathy', 'Visual Hierarchy'],
    gaps: ['Figma Advanced Prototyping', 'User Testing Methodologies'],
  },
  {
    id: 3,
    title: 'Technical Product Manager',
    description:
      'Bridge the gap between engineering teams and business objectives.',
    match: 65,
    strengths: ['Communication', 'Basic Technical Literacy'],
    gaps: ['Agile Methodologies', 'Data Analytics', 'Roadmap Planning'],
  },
];

export default function RecommendationsPage() {
  return (
    <div className='mx-auto max-w-7xl space-y-8 p-4 md:p-8'>
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-8'>
        <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
          Assessment Results for Zimbiat
        </h1>
        <p className='text-brand-muted max-w-3xl'>
          Based on your recent skill evaluation and CV analysis, we've
          identified three potential career paths. Your strongest alignment is
          with Frontend Development.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {recommendations.map(rec => (
          <div
            key={rec.id}
            className='bg-canvas-panel border-border-subtle hover:border-brand-primary/50 flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-colors'
          >
            <div className='mb-4 flex items-start justify-between'>
              <h2 className='text-brand-dark pr-4 text-xl leading-tight font-bold'>
                {rec.title}
              </h2>
              <div
                className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${rec.match >= 80 ? 'bg-feedback-success/10 text-feedback-success' : rec.match >= 70 ? 'bg-brand-primary/10 text-brand-primary' : 'bg-feedback-warning/10 text-feedback-warning'}`}
              >
                {rec.match}% Match
              </div>
            </div>

            <p className='text-brand-muted mb-6 flex-1 text-sm'>
              {rec.description}
            </p>

            <div className='mb-8 space-y-5'>
              <div>
                <h3 className='text-brand-dark mb-3 text-xs font-semibold tracking-wider uppercase'>
                  Verified Strengths
                </h3>
                <ul className='space-y-2'>
                  {rec.strengths.map((strength, i) => (
                    <li
                      key={i}
                      className='text-brand-dark flex items-start gap-2 text-sm'
                    >
                      <CheckCircle2Icon
                        size={16}
                        className='text-feedback-success mt-0.5 shrink-0'
                      />

                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-brand-dark mb-3 text-xs font-semibold tracking-wider uppercase'>
                  Skill Gaps
                </h3>
                <ul className='space-y-2'>
                  {rec.gaps.map((gap, i) => (
                    <li
                      key={i}
                      className='text-brand-dark flex items-start gap-2 text-sm'
                    >
                      <AlertTriangleIcon
                        size={16}
                        className='text-feedback-warning mt-0.5 shrink-0'
                      />

                      {gap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              to='/roadmap'
              className='bg-canvas-inset border-border-subtle text-brand-dark hover:bg-canvas-default hover:border-brand-primary mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 font-medium transition-colors'
            >
              View Roadmap
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
