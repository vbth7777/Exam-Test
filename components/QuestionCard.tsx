import React, { useMemo } from 'react';
import { Question } from '../types';
import { CheckCircle2, Circle, XCircle } from 'lucide-react';
import { normalizeLabel } from '../utils';

interface QuestionCardProps {
  question: Question;
  selectedAnswers: string[];
  onSelect: (label: string) => void;
  showResult: boolean;
  shuffleAnswers: boolean;
  shuffleSeed: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswers,
  onSelect,
  showResult,
  shuffleAnswers,
  shuffleSeed,
}) => {
  const isMultiple = question.type === 'multiple';

  const handleOptionClick = (label: string) => {
    if (showResult) return;
    onSelect(label);
  };

  const displayedOptions = useMemo(() => {
    if (!shuffleAnswers) {
      return question.options;
    }
    // Create a shallow copy and shuffle deterministically
    const options = [...question.options];

    // Simple seeded random function (Mulberry32-like or similar LCG)
    // We combine the global shuffleSeed with the question ID to get a unique seed per question
    let seed = shuffleSeed + question.id;

    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }, [question, shuffleAnswers, shuffleSeed]);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 md:p-8 max-w-3xl mx-auto border border-slate-100">
      <div className="flex justify-between items-start mb-4 md:mb-6">
        <h3 className="text-base md:text-xl font-semibold text-slate-800 leading-relaxed">
          {question.question}
        </h3>
        <span className="bg-indigo-50 text-indigo-700 text-[10px] md:text-xs font-medium px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shrink-0 ml-2 md:ml-4">
          {isMultiple ? 'Multiple' : 'Single'}
        </span>
      </div>

      <div className="space-y-2 md:space-y-3">
        {displayedOptions.map((option) => {
          const isSelected = selectedAnswers.includes(option.label);
          const isCorrect = question.correct.some(c => normalizeLabel(c) === normalizeLabel(option.label));

          let borderColor = 'border-slate-200';
          let bgColor = 'bg-white';
          let textColor = 'text-slate-700';
          let Icon = Circle;
          let opacity = 'opacity-100';

          if (showResult) {
            if (isCorrect) {
              borderColor = 'border-emerald-500';
              bgColor = 'bg-emerald-50';
              textColor = 'text-emerald-800';
              Icon = CheckCircle2;
            } else if (isSelected && !isCorrect) {
              borderColor = 'border-rose-500';
              bgColor = 'bg-rose-50';
              textColor = 'text-rose-800';
              Icon = XCircle;
            } else {
              opacity = 'opacity-50'; // Dim unselected, incorrect options
            }
          } else {
            if (isSelected) {
              borderColor = 'border-indigo-600';
              bgColor = 'bg-indigo-50';
              textColor = 'text-indigo-900';
              Icon = CheckCircle2;
            }
          }

          return (
            <div
              key={option.label}
              onClick={() => handleOptionClick(option.label)}
              className={`
                relative flex items-center p-3 md:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200
                ${borderColor} ${bgColor} ${textColor} ${opacity}
                ${!showResult && 'hover:border-indigo-300 hover:bg-indigo-50'}
              `}
            >
              <div className="flex-shrink-0 mr-3 md:mr-4">
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${showResult && isCorrect ? 'text-emerald-600' : isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
              </div>
              <div className="flex-1 text-sm md:text-base">
                <span className="font-bold mr-2">{option.label}.</span>
                <span className="font-medium">{option.text}</span>
              </div>
            </div>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-6 p-4 bg-slate-50 rounded-lg text-sm text-slate-600">
          <strong>Correct Answer:</strong> {question.correct.join(', ')}
          {question.explanation && (
            <p className="mt-2 pt-2 border-t border-slate-200">{question.explanation}</p>
          )}
        </div>
      )}
    </div>
  );
};