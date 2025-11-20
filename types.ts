
export interface Option {
  text: string;
  label: string;
}

export interface Question {
  id: number;
  type: "single" | "multiple";
  points: number;
  correct: string[];
  options: Option[];
  question: string;
  image_url: string;
  explanation?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<number, string[]>; // questionId -> selected option labels
  isFinished: boolean;
}
