import { useEffect, useState } from 'react';
import { ClockIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

const questions = [
  {
    id: 1,
    text: 'When building a responsive layout in CSS, which approach ensures a container scales fluidly while respecting a maximum width?',
    options: [
      'width: 100%; max-width: 1200px; margin: 0 auto;',
      'width: 1200px; margin: auto;',
      'max-width: 100%; padding: 0 20px;',
      'display: flex; justify-content: center;',
    ],
  },
  {
    id: 2,
    text: 'In React, what is the primary purpose of the useEffect hook?',
    options: [
      'To directly modify the DOM elements',
      'To handle side effects in functional components',
      'To create new state variables',
      'To replace the render method',
    ],
  },
  {
    id: 3,
    text: 'Which of the following is NOT a valid HTTP method for RESTful APIs?',
    options: ['PATCH', 'FETCH', 'PUT', 'DELETE'],
  },
];

export default function TestingArena() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelect = optionIndex => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/recommendations');
    }
  };

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;
  const currentQ = questions[currentIndex];
  const hasAnsweredCurrent = selectedAnswers[currentIndex] !== undefined;

  return (
    <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col'>
      {/* Top Bar */}
      <div className='bg-canvas-panel border-border-subtle sticky top-0 z-10 border-b px-4 py-4 md:px-8'>
        <div className='mx-auto flex max-w-4xl items-center justify-between gap-6'>
          <div className='flex-1'>
            <div className='text-brand-muted mb-2 flex justify-between text-xs font-medium'>
              <span>
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className='bg-canvas-inset h-2 w-full overflow-hidden rounded-full'>
              <div
                className='bg-brand-primary h-full rounded-full transition-all duration-300 ease-out'
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>
          <div className='bg-canvas-inset border-border-subtle flex items-center gap-2 rounded-lg border px-4 py-2'>
            <ClockIcon
              size={18}
              className={
                timeLeft < 60 ? 'text-feedback-danger' : 'text-brand-muted'
              }
            />

            <span
              className={`font-mono font-bold ${timeLeft < 60 ? 'text-feedback-danger' : 'text-brand-dark'}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      {/* Question Area */}
      <div className='flex-1 p-4 md:p-8'>
        <div className='bg-canvas-panel border-border-subtle mx-auto mt-4 max-w-3xl rounded-2xl border p-6 shadow-md md:mt-8 md:p-10'>
          <h2 className='text-brand-dark mb-8 text-xl leading-relaxed font-bold md:text-2xl'>
            {currentQ.text}
          </h2>

          <div className='space-y-4'>
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentIndex] === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all md:p-5 ${isSelected ? 'border-brand-secondary bg-brand-secondary/5 border-2' : 'border-border-subtle hover:border-brand-secondary hover:bg-canvas-inset'}`}
                >
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${isSelected ? 'border-brand-secondary' : 'border-border-subtle'}`}
                  >
                    {isSelected && (
                      <div className='bg-brand-secondary h-3 w-3 rounded-full' />
                    )}
                  </div>
                  <span
                    className={`text-base ${isSelected ? 'text-brand-dark font-medium' : 'text-brand-dark'}`}
                  >
                    {option}
                  </span>
                </div>
              );
            })}
          </div>

          <div className='border-border-subtle mt-10 flex items-center justify-between border-t pt-6'>
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium transition-colors ${currentIndex === 0 ? 'text-brand-muted cursor-not-allowed opacity-50' : 'text-brand-dark hover:bg-canvas-inset hover:border-border-subtle border border-transparent'}`}
            >
              <ArrowLeftIcon size={18} />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnsweredCurrent}
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-medium transition-colors ${hasAnsweredCurrent ? 'bg-brand-primary hover:bg-brand-primary/90 text-white' : 'bg-canvas-inset text-brand-muted border-border-subtle cursor-not-allowed border'}`}
            >
              {currentIndex === questions.length - 1
                ? 'Submit Assessment'
                : 'Next Question'}
              <ArrowRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
