import React, { useMemo } from 'react';
import { Question, Option } from '../types';
import { CheckCircle2, Circle, XCircle } from 'lucide-react';
import { normalizeLabel } from '../utils';

interface QuestionCardProps {
  question: Question;
  options: Option[];
  selectedAnswers: string[];
  onSelect: (label: string) => void;
  showResult: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedAnswers,
  onSelect,
  showResult,
}) => {
  const isMultiple = question.type === 'multiple';

  const handleOptionClick = (label: string) => {
    if (showResult) return;
    onSelect(label);
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-4 md:p-8 max-w-3xl mx-auto border border-slate-100 dark:border-slate-700 transition-colors duration-300">
      <div className="flex justify-between items-start mb-4 md:mb-6">
        <h3 className="text-base md:text-xl font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
          {question.question}
        </h3>
        <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-[10px] md:text-xs font-medium px-2 py-0.5 md:px-2.5 md:py-1 rounded-full shrink-0 ml-2 md:ml-4">
          {isMultiple ? 'Multiple' : 'Single'}
        </span>
      </div>

      <div className="space-y-2 md:space-y-3">
        {options.map((option) => {
          const isSelected = selectedAnswers.includes(option.label);
          const isCorrect = question.correct.some(c => normalizeLabel(c) === normalizeLabel(option.label));

          let borderColor = 'border-slate-200 dark:border-slate-700';
          let bgColor = 'bg-white dark:bg-slate-800';
          let textColor = 'text-slate-700 dark:text-slate-300';
          let Icon = Circle;
          let opacity = 'opacity-100';

          if (showResult) {
            if (isCorrect) {
              borderColor = 'border-emerald-500 dark:border-emerald-500';
              bgColor = 'bg-emerald-50 dark:bg-emerald-900/20';
              textColor = 'text-emerald-800 dark:text-emerald-400';
              Icon = CheckCircle2;
            } else if (isSelected && !isCorrect) {
              borderColor = 'border-rose-500 dark:border-rose-500';
              bgColor = 'bg-rose-50 dark:bg-rose-900/20';
              textColor = 'text-rose-800 dark:text-rose-400';
              Icon = XCircle;
            } else {
              opacity = 'opacity-50'; // Dim unselected, incorrect options
            }
          } else {
            if (isSelected) {
              borderColor = 'border-indigo-600 dark:border-indigo-500';
              bgColor = 'bg-indigo-50 dark:bg-indigo-900/20';
              textColor = 'text-indigo-900 dark:text-indigo-300';
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
                ${!showResult && 'hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/10'}
              `}
            >
              <div className="flex-shrink-0 mr-3 md:mr-4">
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${showResult && isCorrect ? 'text-emerald-600 dark:text-emerald-500' : isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`} />
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
        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-sm text-slate-600 dark:text-slate-300">
          <strong>Correct Answer:</strong> {question.correct.join(', ')}
          {question.explanation && (
            <p className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-600">{question.explanation}</p>
          )}
        </div>
      )}
    </div>
  );
};