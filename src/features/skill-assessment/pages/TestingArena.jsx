import { useCallback, useEffect, useMemo, useState } from 'react';
import { ClockIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import {
  useAssessmentQuestions,
  useSubmitAssessment,
} from '../hooks/useAssessment';
import { useUser } from '../../authentication/hooks/useUser';
import Spinner from '../../../components/Spinner';

export default function TestingArena() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();
  const { mutate: submitAssessment, isPending: isSubmitting } =
    useSubmitAssessment();

  const selectedSkills = useMemo(() => {
    return location.state?.skills || [];
  }, [location.state?.skills]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  const {
    data: questions,
    isLoading,
    error,
  } = useAssessmentQuestions(selectedSkills);

  useEffect(() => {
    if (selectedSkills.length === 0) {
      toast.error('No selected skills found. Redirecting to Triage.');
      navigate('/skill-selector', { replace: true });
    }
  }, [selectedSkills, navigate]);

  // Automatically configure the countdown clock based on question volume (30s per question)
  useEffect(() => {
    if (questions && questions.length > 0) {
      setTimeLeft(questions.length * 30);
    }
  }, [questions]);

  const handleSubmitQuiz = useCallback(() => {
    let correctCount = 0;
    const evaluationPayload = questions.map((q, idx) => {
      const chosenIdx = selectedAnswers[idx];
      const isCorrect = chosenIdx === q.correct_option_index;
      if (isCorrect) correctCount++;

      return {
        questionId: q.id,
        skill: q.skill,
        questionText: q.question,
        userSelection: chosenIdx,
        correctSelection: q.correct_option_index,
        status: isCorrect ? 'CORRECT' : 'INCORRECT',
      };
    });

    const finalScorePercentage = Math.round(
      (correctCount / questions.length) * 100,
    );

    submitAssessment(
      {
        userId: user.id,
        discipline: 'General Technology Evaluation',
        selectedSkills,
        verifiedScore: finalScorePercentage,
        rawPayload: evaluationPayload,
      },
      {
        onSuccess: () => {
          toast.success('Assessment evaluation submitted successfully!');
          navigate('/recommendations');
        },
        onError: err => {
          toast.error('Failed to register assessment logs: ' + err.message);
        },
      },
    );
  }, [
    navigate,
    questions,
    selectedAnswers,
    submitAssessment,
    selectedSkills,
    user.id,
  ]);

  useEffect(() => {
    // Only start the countdown if questions have loaded and time is allocated
    if (!questions || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz(); // Automatically submit the exam if the clock hits 00:00
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // Include questions and handleSubmitQuiz as dependencies to keep the submission handler fresh
  }, [questions, handleSubmitQuiz]);

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center font-sans'>
        <Spinner />
        <p className='text-brand-muted mt-2 animate-pulse text-sm'>
          SkillBridge compiling your dynamic interview questions...
        </p>
      </div>
    );
  }

  if (error || !questions || questions.length === 0) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 text-center'>
        <p className='text-feedback-danger font-medium'>
          Failed to compile assessment questions from the AI engine.
        </p>
        <button
          onClick={() => navigate('/skill-selector')}
          className='text-brand-primary mt-4 text-sm font-semibold hover:underline'
        >
          Go Back and Retry
        </button>
      </div>
    );
  }

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

  const currentQ = questions[currentIndex];
  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;
  const hasAnsweredCurrent = selectedAnswers[currentIndex] !== undefined;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  return (
    <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col font-sans'>
      {/* Top Progress Dashboard Frame */}
      <div className='bg-canvas-panel border-border-subtle sticky top-0 z-10 border-b px-4 py-4 md:px-8'>
        <div className='mx-auto flex max-w-4xl items-center justify-between gap-6'>
          <div className='flex-1'>
            <div className='text-brand-muted mb-2 flex justify-between text-xs font-medium'>
              <span>
                Question {currentIndex + 1} of {questions.length} (
                {currentQ.skill})
              </span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className='bg-canvas-inset h-2 w-full overflow-hidden rounded-full'>
              <div
                className='bg-brand-primary h-full rounded-full transition-all duration-300 ease-out'
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <div className='bg-canvas-inset border-border-subtle flex items-center gap-2 rounded-lg border px-4 py-2'>
            <ClockIcon
              size={18}
              className={
                timeLeft < 60
                  ? 'text-feedback-danger animate-pulse'
                  : 'text-brand-muted'
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

      {/* Main Questionnaire Box */}
      <div className='flex-1 p-4 md:p-8'>
        <div className='bg-canvas-panel border-border-subtle mx-auto mt-4 max-w-3xl rounded-2xl border p-6 shadow-md md:mt-8 md:p-10'>
          <h2 className='text-brand-dark mb-8 text-xl leading-relaxed font-bold md:text-2xl'>
            {currentQ.question}
          </h2>

          <div className='space-y-4'>
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentIndex] === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all md:p-5 ${
                    isSelected
                      ? 'border-brand-secondary bg-brand-secondary/5 border-2 shadow-sm'
                      : 'border-border-subtle hover:border-brand-secondary hover:bg-canvas-inset'
                  }`}
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

          {/* Action Navigation Footer */}
          <div className='border-border-subtle mt-10 flex items-center justify-between border-t pt-6'>
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium transition-colors ${
                currentIndex === 0
                  ? 'text-brand-muted cursor-not-allowed opacity-50'
                  : 'text-brand-dark hover:bg-canvas-inset cursor-pointer border border-transparent'
              }`}
            >
              <ArrowLeftIcon size={18} /> Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnsweredCurrent || isSubmitting}
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-medium transition-colors ${
                hasAnsweredCurrent && !isSubmitting
                  ? 'bg-brand-primary hover:bg-brand-primary/90 cursor-pointer text-white'
                  : 'bg-canvas-inset text-brand-muted border-border-subtle cursor-not-allowed border'
              }`}
            >
              {isSubmitting
                ? 'Saving Metrics...'
                : currentIndex === questions.length - 1
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
