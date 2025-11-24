import React from 'react';
import { QuizMetadata } from '../data';
import { BookOpen, ChevronRight } from 'lucide-react';

interface QuizSelectionProps {
    quizzes: QuizMetadata[];
    onSelect: (quiz: QuizMetadata) => void;
}

export const QuizSelection: React.FC<QuizSelectionProps> = ({ quizzes, onSelect }) => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-6 transition-colors duration-300">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Select a Quiz</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Choose a collection to start testing your knowledge</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quizzes.map((quiz) => (
                        <button
                            key={quiz.id}
                            onClick={() => onSelect(quiz)}
                            className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-100 dark:hover:border-indigo-900 transition-all duration-300 text-left flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between w-full mb-4">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 dark:text-indigo-400">
                                    <ChevronRight className="w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {quiz.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                                {quiz.description}
                            </p>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-700 w-full flex items-center justify-between text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                <span>{quiz.data.length} Questions</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Start Quiz &rarr;</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
