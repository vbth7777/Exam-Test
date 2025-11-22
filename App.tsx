import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { downloadJSON, normalizeLabel } from './utils';
import { quizzes, QuizMetadata } from './data';
import { Question } from './types';
import { QuestionCard } from './components/QuestionCard';
import { QuizSelection } from './components/QuizSelection';
import { Download, RefreshCw, ChevronRight, ChevronLeft, CheckSquare, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
    const [selectedQuiz, setSelectedQuiz] = useState<QuizMetadata | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string[]>>({});
    const [showResult, setShowResult] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [commandBuffer, setCommandBuffer] = useState<string>('');
    const [showCommandOverlay, setShowCommandOverlay] = useState(false);
    const [showNavigator, setShowNavigator] = useState(false);

    const handleQuizSelect = (quiz: QuizMetadata) => {
        setSelectedQuiz(quiz);
        setQuestions(quiz.data);
        setCurrentQIndex(0);
        setSelectedAnswers({});
        setShowResult(false);
        setQuizFinished(false);
    };

    const handleBackToMenu = () => {
        setSelectedQuiz(null);
        setQuestions([]);
    };

    const currentQuestion = questions[currentQIndex];

    const handleAnswerSelect = useCallback((label: string) => {
        if (showResult) return;

        setSelectedAnswers(prev => {
            const current = prev[currentQuestion.id] || [];
            if (currentQuestion.type === 'single') {
                return { ...prev, [currentQuestion.id]: [label] };
            } else {
                // Toggle for multiple
                const newSelection = current.includes(label)
                    ? current.filter(l => l !== label)
                    : [...current, label];
                return { ...prev, [currentQuestion.id]: newSelection };
            }
        });
    }, [currentQuestion, showResult]);

    const handleCheckAnswer = useCallback(() => {
        // Only check if an answer is selected
        const hasAnswer = selectedAnswers[currentQuestion.id] && selectedAnswers[currentQuestion.id].length > 0;
        if (hasAnswer) {
            setShowResult(true);
        }
    }, [currentQuestion, selectedAnswers]);

    const handleNext = useCallback(() => {
        setShowResult(false);
        if (currentQIndex < questions.length - 1) {
            setCurrentQIndex(prev => prev + 1);
        } else {
            setQuizFinished(true);
        }
    }, [currentQIndex, questions.length]);

    const handlePrev = useCallback(() => {
        if (currentQIndex > 0) {
            setShowResult(false);
            setCurrentQIndex(prev => prev - 1);
        }
    }, [currentQIndex]);

    const handleReset = useCallback(() => {
        setQuizFinished(false);
        setCurrentQIndex(0);
        setSelectedAnswers({});
        setShowResult(false);
    }, []);

    const handleExport = () => {
        downloadJSON(questions, 'quiz_questions.json');
    };

    const handleJumpToQuestion = useCallback((index: number) => {
        if (index >= 0 && index < questions.length) {
            setCurrentQIndex(index);
            setShowResult(false);
            setQuizFinished(false);
            setSelectedAnswers({});
        }
    }, [questions.length]);

    const checkIsCorrect = (q: Question, answers: string[] | undefined) => {
        if (!answers || answers.length === 0) return false;
        if (answers.length !== q.correct.length) return false;

        const normalizedAnswers = answers.map(normalizeLabel);
        const normalizedCorrect = q.correct.map(normalizeLabel);

        return normalizedAnswers.every(a => normalizedCorrect.includes(a));
    };

    // Calculate Score
    const score = useMemo(() => {
        let s = 0;
        questions.forEach(q => {
            if (checkIsCorrect(q, selectedAnswers[q.id])) {
                s += 1;
            }
        });
        return s;
    }, [questions, selectedAnswers]);

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // If command overlay is active, handle typing there
            if (showCommandOverlay) {
                if (e.key === 'Enter') {
                    const match = commandBuffer.match(/^\/(\d+)$/);
                    if (match) {
                        const qNum = parseInt(match[1], 10);
                        handleJumpToQuestion(qNum - 1); // Convert 1-based to 0-based
                    }
                    setCommandBuffer('');
                    setShowCommandOverlay(false);
                    e.preventDefault();
                } else if (e.key === 'Escape') {
                    setCommandBuffer('');
                    setShowCommandOverlay(false);
                    e.preventDefault();
                } else if (e.key === 'Backspace') {
                    setCommandBuffer(prev => {
                        const next = prev.slice(0, -1);
                        if (next === '') setShowCommandOverlay(false);
                        return next;
                    });
                } else if (e.key.length === 1) {
                    // Allow typing numbers
                    if (/[\d]/.test(e.key)) {
                        setCommandBuffer(prev => prev + e.key);
                    }
                }
                return;
            }

            // Global Shortcuts
            if (e.key === '/') {
                e.preventDefault();
                setCommandBuffer('/');
                setShowCommandOverlay(true);
                return;
            }

            // Navigation
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                // Navigate to next question, but don't finish quiz via arrow keys
                // Use Space/Button to finish
                if (currentQIndex < questions.length - 1) {
                    handleNext();
                }
            } else if (e.key === ' ') {
                e.preventDefault(); // Prevent scrolling
                if (showResult) {
                    handleNext();
                } else {
                    handleCheckAnswer();
                }
            } else if (/^[1-9]$/.test(e.key)) {
                const index = parseInt(e.key, 10) - 1;
                if (index >= 0 && index < currentQuestion.options.length) {
                    handleAnswerSelect(currentQuestion.options[index].label);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentQuestion, showResult, handleAnswerSelect, handleCheckAnswer, handleNext, handlePrev, handleJumpToQuestion, commandBuffer, showCommandOverlay, currentQIndex, questions.length]);


    if (!selectedQuiz) {
        return <QuizSelection quizzes={quizzes} onSelect={handleQuizSelect} />;
    }

    if (quizFinished) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Quiz Complete!</h2>
                    <div className="text-6xl font-black text-indigo-600 mb-6">
                        {Math.round((score / questions.length) * 100)}%
                    </div>
                    <p className="text-slate-600 mb-8 text-lg">
                        You scored <span className="font-bold text-indigo-700">{score}</span> out of <span className="font-bold text-indigo-700">{questions.length}</span>
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => setQuizFinished(false)}
                            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white border-2 border-indigo-100 hover:bg-indigo-50 text-indigo-700 rounded-xl font-semibold transition-colors"
                        >
                            <RefreshCw className="w-5 h-5" /> Review Answers
                        </button>
                        <button
                            onClick={handleReset}
                            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors"
                        >
                            <RefreshCw className="w-5 h-5" /> Restart Quiz
                        </button>
                        <button
                            onClick={handleExport}
                            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors"
                        >
                            <Download className="w-5 h-5" /> Download JSON
                        </button>
                    </div>
                </div>

                {/* Review Grid in Finished State */}
                <div className="w-full max-w-4xl mt-8 bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="font-bold text-lg text-slate-800 mb-4">Review All Answers</h3>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-2">
                        {questions.map((q, idx) => {
                            const userAns = selectedAnswers[q.id];
                            const hasAnswer = userAns && userAns.length > 0;
                            const isCorrect = checkIsCorrect(q, userAns);

                            let bgClass = 'bg-slate-100 text-slate-400';
                            if (hasAnswer) {
                                bgClass = isCorrect ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-rose-100 text-rose-800 border border-rose-200';
                            }

                            return (
                                <button
                                    key={q.id}
                                    onClick={() => {
                                        setQuizFinished(false);
                                        handleJumpToQuestion(idx);
                                    }}
                                    className={`h-10 rounded-lg font-medium text-sm flex items-center justify-center ${bgClass}`}
                                >
                                    {idx + 1}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    if (questions.length === 0) {
        return <div className="p-10 text-center">No questions found.</div>
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Command Overlay */}
            {showCommandOverlay && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl font-mono text-lg animate-in fade-in slide-in-from-bottom-4 duration-200">
                    {commandBuffer}<span className="animate-pulse">_</span>
                </div>
            )}

            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleBackToMenu}
                            className="p-2 -ml-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors mr-1"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
                            <CheckSquare className="w-5 h-5" />
                        </div>
                        <h1 className="font-bold text-slate-800 text-lg hidden sm:block">CS Quiz Master</h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleReset}
                            title="Restart Quiz"
                            className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors mr-2"
                        >
                            <RefreshCw className="w-5 h-5" />
                        </button>

                        <div className="text-sm font-medium text-slate-500 mr-2">
                            Question {currentQIndex + 1} / {questions.length}
                        </div>

                        <button
                            onClick={handleExport}
                            title="Download JSON"
                            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
                        >
                            <Download className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-1 bg-slate-100">
                    <div
                        className="h-full bg-indigo-600 transition-all duration-300 ease-out"
                        style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-5xl mx-auto w-full p-2 md:p-6 flex flex-col gap-4 md:gap-8 pb-20 md:pb-6">

                {/* Question Card Area */}
                <div className="flex-1 flex flex-col justify-center min-h-[auto] md:min-h-[400px]">
                    <QuestionCard
                        question={currentQuestion}
                        selectedAnswers={selectedAnswers[currentQuestion.id] || []}
                        onSelect={handleAnswerSelect}
                        showResult={showResult}
                    />

                    {/* Controls - Sticky on Mobile */}
                    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:static md:bg-transparent md:border-0 md:p-0 md:mt-8 z-30">
                        <div className="flex justify-between items-center max-w-3xl mx-auto w-full">
                            <button
                                onClick={handlePrev}
                                disabled={currentQIndex === 0}
                                className="flex items-center px-3 py-2 text-slate-500 font-medium hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-slate-500 transition-colors text-sm md:text-base"
                            >
                                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1" /> <span className="hidden xs:inline">Previous</span>
                            </button>

                            {!showResult ? (
                                <button
                                    onClick={handleCheckAnswer}
                                    disabled={!selectedAnswers[currentQuestion.id] || selectedAnswers[currentQuestion.id].length === 0}
                                    className="flex-1 mx-4 md:mx-0 md:flex-none px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 disabled:shadow-none transition-all text-sm md:text-base"
                                >
                                    Check Answer
                                </button>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    className="flex-1 mx-4 md:mx-0 md:flex-none flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all text-sm md:text-base"
                                >
                                    {currentQIndex === questions.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
                                </button>
                            )}

                            <button
                                onClick={() => setShowNavigator(!showNavigator)}
                                className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
                            >
                                <div className="grid grid-cols-3 gap-0.5 w-5 h-5">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="bg-current rounded-[1px]" />
                                    ))}
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Shortcuts Hint */}
                    <div className="mt-6 text-center text-xs text-slate-400 hidden md:block">
                        <span className="mx-2"><kbd className="font-sans bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-slate-500">1-4</kbd> Select Answer</span>
                        <span className="mx-2"><kbd className="font-sans bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-slate-500">Space</kbd> Check / Next</span>
                        <span className="mx-2"><kbd className="font-sans bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-slate-500">←/→</kbd> Navigate</span>
                        <span className="mx-2"><kbd className="font-sans bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-slate-500">/</kbd> Jump to #</span>
                    </div>
                </div>

                {/* Question Navigator Grid */}
                <div className={`
                    bg-white border border-slate-200 rounded-xl p-4 md:p-6 shadow-sm
                    ${showNavigator ? 'block' : 'hidden md:block'}
                `}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Question Navigator</h3>
                        <button
                            onClick={() => setShowNavigator(false)}
                            className="md:hidden text-slate-400 hover:text-slate-600"
                        >
                            Close
                        </button>
                    </div>
                    <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {questions.map((q, idx) => {
                            const isCurrent = idx === currentQIndex;
                            const hasAnswer = selectedAnswers[q.id] && selectedAnswers[q.id].length > 0;

                            return (
                                <button
                                    key={q.id}
                                    onClick={() => {
                                        handleJumpToQuestion(idx);
                                        setShowNavigator(false);
                                    }}
                                    className={`
                            h-9 rounded-md font-medium text-xs transition-all duration-200 flex items-center justify-center border
                            ${isCurrent ? 'ring-2 ring-indigo-600 ring-offset-1 z-10 border-indigo-600 bg-indigo-600 text-white' : 'border-transparent'}
                            ${!isCurrent && hasAnswer
                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100'
                                            : !isCurrent ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : ''}
                            `}
                                >
                                    {idx + 1}
                                </button>
                            )
                        })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex gap-4 md:gap-6 text-xs text-slate-500 justify-center flex-wrap">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-600"></div> Current</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-50 border border-indigo-100"></div> Answered</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-100"></div> Unanswered</div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default App;
