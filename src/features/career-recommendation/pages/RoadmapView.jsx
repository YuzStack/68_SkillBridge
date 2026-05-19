import { ExternalLinkIcon, CheckIcon } from 'lucide-react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const jobs = [
  'Frontend Developer',
  'UI/UX Designer',
  'Technical Product Manager',
];

const roadmapData = [
  {
    id: 1,
    month: 'Month 1',
    title: 'Master Advanced React Concepts',
    completed: true,
    links: [
      {
        text: 'React Documentation',
        url: '#',
      },
      {
        text: 'Coursera: Advanced React',
        url: '#',
      },
    ],
  },
  {
    id: 2,
    month: 'Month 2',
    title: 'State Management with Redux Toolkit',
    completed: false,
    current: true,
    links: [
      {
        text: 'Redux Essentials Tutorial',
        url: '#',
      },
      {
        text: 'freeCodeCamp: Redux Store',
        url: '#',
      },
    ],
  },
  {
    id: 3,
    month: 'Month 3',
    title: 'Web Accessibility (a11y) Deep Dive',
    completed: false,
    links: [
      {
        text: 'W3C Accessibility Guidelines',
        url: '#',
      },
    ],
  },
  {
    id: 4,
    month: 'Month 4',
    title: 'Testing with Jest & React Testing Library',
    completed: false,
    links: [
      {
        text: 'Testing Library Docs',
        url: '#',
      },
    ],
  },
  {
    id: 5,
    month: 'Month 5',
    title: 'Performance Optimization & Core Web Vitals',
    completed: false,
    links: [
      {
        text: 'Web.dev Performance',
        url: '#',
      },
    ],
  },
  {
    id: 6,
    month: 'Month 6',
    title: 'Capstone Project & Portfolio Polish',
    completed: false,
    links: [
      {
        text: 'ALX Africa Portfolio Guide',
        url: '#',
      },
    ],
  },
];

export default function RoadmapView() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='mx-auto max-w-5xl p-4 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-brand-dark text-2xl font-bold'>Learning Roadmap</h1>
        <p className='text-brand-muted mt-1'>
          Your step-by-step guide to bridging skill gaps and landing your target
          role.
        </p>
      </div>

      {/* Tabs */}
      <div className='border-border-subtle hide-scrollbar mb-8 flex overflow-x-auto border-b'>
        {jobs.map((job, idx) => (
          <button
            key={job}
            onClick={() => setActiveTab(idx)}
            className={`relative px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === idx ? 'text-brand-primary' : 'text-brand-muted hover:text-brand-dark'}`}
          >
            {job}
            {activeTab === idx && (
              <motion.div
                layoutId='activeTab'
                className='bg-brand-primary absolute right-0 bottom-0 left-0 h-0.5'
              />
            )}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-10'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className='relative'
          >
            {/* Vertical Line */}
            <div className='bg-border-subtle absolute top-4 bottom-4 left-4.75 w-0.5' />

            <div className='space-y-8'>
              {roadmapData.map(step => (
                <div key={step.id} className='relative flex gap-6'>
                  {/* Node */}
                  <div className='relative z-10 mt-1 shrink-0'>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step.completed ? 'bg-feedback-success border-feedback-success text-white' : step.current ? 'bg-brand-primary border-brand-primary ring-brand-primary/20 text-white ring-4' : 'bg-canvas-inset border-border-subtle text-transparent'}`}
                    >
                      {step.completed && <CheckIcon size={20} />}
                      {step.current && (
                        <div className='h-2.5 w-2.5 rounded-full bg-white' />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 rounded-xl border p-5 transition-all ${step.current ? 'border-brand-primary bg-brand-primary/5' : 'border-border-subtle bg-canvas-panel'}`}
                  >
                    <div className='mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center'>
                      <div>
                        <span className='text-brand-secondary mb-1 block text-sm font-semibold'>
                          {step.month}
                        </span>
                        <h3 className='text-brand-dark text-lg font-bold'>
                          {step.title}
                        </h3>
                      </div>

                      <label className='group flex cursor-pointer items-center gap-2'>
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${step.completed ? 'bg-brand-primary border-brand-primary text-white' : 'border-border-subtle bg-canvas-inset group-hover:border-brand-primary'}`}
                        >
                          {step.completed && <CheckIcon size={14} />}
                        </div>
                        <span className='text-brand-muted group-hover:text-brand-dark text-sm font-medium'>
                          Mark complete
                        </span>
                      </label>
                    </div>

                    <div className='space-y-2'>
                      {step.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          className='text-brand-primary mr-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline'
                        >
                          {link.text}
                          <ExternalLinkIcon size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
