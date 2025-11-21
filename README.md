# CS Quiz Master

A modern, interactive quiz application built with React, TypeScript, and Vite. Designed to test your knowledge with a sleek user interface and efficient keyboard controls.

## Features

- 🎯 **Multiple Quiz Collections**: Support for various topics and difficulty levels.
- 📝 **Interactive Question Interface**:
  - Single and Multiple choice questions.
  - Immediate feedback with "Check Answer".
  - Rich text and code snippet support.
- ⌨️ **Keyboard First Design**:
  - `1`-`9`: Select options.
  - `Space`: Check answer / Next question.
  - `←` / `→`: Navigate questions.
  - `/`: Open command palette to jump to a specific question.
- 📊 **Progress & Review**:
  - Real-time progress bar.
  - Comprehensive score summary at the end.
  - Review mode to analyze your answers.
  - Question Navigator to jump between questions easily.
- 📱 **Responsive Design**: Fully functional on desktop and mobile devices.
- 💾 **Export**: Download quiz data as JSON.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cs-quiz-master
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the URL shown in the terminal).

## Usage

1. **Select a Quiz**: Choose a topic from the main menu.
2. **Answer Questions**: Click options or use number keys.
3. **Navigate**: Use the "Next"/"Previous" buttons or arrow keys.
4. **Finish**: Submit your quiz to see your score and review your performance.

## Adding New Quizzes

You can easily extend the application with your own questions.

1. **Create a Data File**: Add a new `.ts` file in `data/` (e.g., `data/my-quiz.ts`).
2. **Define Questions**: Export an array of `Question` objects.
   ```typescript
   import { Question } from '../types';

   export const myQuizData: Question[] = [
     {
       id: 1,
       type: "single",
       points: 1,
       correct: ["A"],
       options: [
         { text: "Option 1", label: "A" },
         { text: "Option 2", label: "B" }
       ],
       question: "Your question here?",
       explanation: "Explanation for the correct answer."
     }
   ];
   ```
3. **Register Quiz**: Import and add your quiz to `data/index.ts`.

For more detailed instructions, see [How to Add a New Quiz Collection](add_new_quiz.md).

## Project Structure

```
.
├── components/     # Reusable UI components (QuestionCard, QuizSelection)
├── data/           # Quiz data and registry
├── App.tsx         # Main application logic
├── index.tsx       # Entry point
├── types.ts        # TypeScript definitions
├── utils.ts        # Utility functions
└── index.html      # HTML template
```

## License

This project is private.
