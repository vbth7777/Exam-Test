import React from 'react';
import { Question } from '../types';
import { CheckCircle2, Circle, XCircle } from 'lucide-react';
import { normalizeLabel } from '../utils';

interface QuestionCardProps {
  question: Question;
  selectedAnswers: string[];
  onSelect: (label: string) => void;
  showResult: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
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
    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 max-w-3xl mx-auto border border-slate-100">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-slate-800 leading-relaxed">
          {question.question}
        </h3>
        <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ml-4">
          {isMultiple ? 'Multiple Choice' : 'Single Answer'}
        </span>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => {
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
                relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200
                ${borderColor} ${bgColor} ${textColor} ${opacity}
                ${!showResult && 'hover:border-indigo-300 hover:bg-indigo-50'}
              `}
            >
              <div className="flex-shrink-0 mr-4">
                <Icon className={`w-6 h-6 ${showResult && isCorrect ? 'text-emerald-600' : isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
              </div>
              <div className="flex-1">
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