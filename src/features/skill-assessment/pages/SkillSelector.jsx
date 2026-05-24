import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

const categories = [
  {
    title: 'Technology',
    skills: [
      'React',
      'Python',
      'Node.js',
      'AWS',
      'Cybersecurity',
      'Data Analysis',
      'UI/UX Design',
      'Machine Learning',
    ],
  },
  {
    title: 'Engineering',
    skills: [
      'Mechanical Design',
      'AutoCAD',
      'Circuit Analysis',
      'Robotics',
      'Civil Planning',
      'Thermodynamics',
    ],
  },
  {
    title: 'Business',
    skills: [
      'Financial Modeling',
      'Project Management',
      'Marketing Strategy',
      'Sales',
      'Agile',
      'Business Analytics',
    ],
  },
  {
    title: 'Healthcare',
    skills: [
      'Patient Care',
      'Medical Coding',
      'Anatomy',
      'Clinical Research',
      'Public Health',
      'Pharmacology',
    ],
  },
];

export default function SkillSelector() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = skill => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill],
    );
  };

  const handleProceed = () => {
    if (selectedSkills.length === 0) return;
    // Pass the selected skills into the router state history buffer safely
    navigate('/assessment', { state: { skills: selectedSkills } });
  };

  return (
    <div className='mx-auto max-w-5xl p-4 pb-32 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-brand-dark text-2xl font-bold'>
          Interactive Skill Triage
        </h1>
        <p className='text-brand-muted mt-1'>
          Select the skills you currently possess to tailor your automated
          assessment parameters.
        </p>
      </div>

      <div className='space-y-10'>
        {categories.map(category => (
          <div key={category.title}>
            <h2 className='text-brand-secondary mb-4 text-sm font-semibold tracking-wide uppercase'>
              {category.title}
            </h2>
            <div className='flex flex-wrap gap-3'>
              {category.skills.map(skill => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`inline-flex cursor-pointer items-center rounded-full border px-4 py-2 transition-all ${
                      isSelected
                        ? 'bg-brand-primary border-brand-primary text-white shadow-sm'
                        : 'bg-canvas-inset border-border-subtle text-brand-dark hover:border-brand-primary hover:bg-canvas-panel'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Bottom CTA */}
      <div className='bg-canvas-panel border-border-subtle fixed right-0 bottom-0 left-0 z-20 border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:left-64 md:p-6'>
        <div className='mx-auto flex max-w-5xl items-center justify-between'>
          <div className='text-brand-muted text-sm'>
            <span className='text-brand-dark font-bold'>
              {selectedSkills.length}
            </span>{' '}
            skills selected
          </div>
          <button
            onClick={handleProceed}
            disabled={selectedSkills.length === 0}
            className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors ${
              selectedSkills.length > 0
                ? 'bg-brand-primary hover:bg-brand-primary/90 cursor-pointer text-white'
                : 'bg-canvas-inset text-brand-muted border-border-subtle cursor-not-allowed border'
            }`}
          >
            Continue to Assessment
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
