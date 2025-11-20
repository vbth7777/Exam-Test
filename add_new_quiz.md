---
description: How to add a new quiz collection
---

# How to Add a New Quiz Collection

Follow these steps to add a new set of questions to the app.

## 1. Create a Data File
Create a new TypeScript file in the `data/` folder (e.g., `data/javascript.ts`).

```typescript
import { Question } from '../types';

export const jsQuizData: Question[] = [
  {
    id: 1,
    type: "single",
    points: 1,
    correct: ["A"],
    options: [
      { text: "console.log", label: "A" },
      { text: "print", label: "B" },
      { text: "echo", label: "C" },
      { text: "System.out.println", label: "D" }
    ],
    question: "Which command is used to print to the console in JavaScript?",
    image_url: "",
    explanation: "console.log() is the standard way to output text to the console."
  },
  // Add more questions...
];
```

## 2. Register the Quiz
Open `data/index.ts` and register your new quiz.

1. **Import the data:**
   ```typescript
   import { jsQuizData } from './javascript';
   ```

2. **Add to the `quizzes` array:**
   ```typescript
   export const quizzes: QuizMetadata[] = [
     // ... existing quizzes
     {
       id: 'js-basics',
       title: 'JavaScript Basics',
       description: 'Test your knowledge of JS fundamentals.',
       data: jsQuizData
     }
   ];
   ```

## 3. Verify
Start the app (`npm run dev`). You should see your new quiz card on the main selection screen.
