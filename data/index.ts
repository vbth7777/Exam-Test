import { Question } from '../types';
import { quizData as csiData } from './csi';
import { ceaData } from './cea';
import { prfData } from './prf';
import { csiQuizletData } from './csi_quizlet';
import { ceaQuizletData } from './cea_quizlet';

import { ceaChuadeData } from './cea_chuade';
import { csiChuadeData } from './csi_chuade';
import { prfChuadeData } from './prf_chuade';
export interface QuizMetadata {
  id: string;
  title: string;
  description: string;
  data: Question[];
}

export const quizzes: QuizMetadata[] = [
  {
    id: 'csi',
    title: 'CSI (From Other Source)',
    description: 'CSI questions.',
    data: csiData
  },
  {
    id: 'cea',
    title: 'CEA (From Other Source)',
    description: 'CEA questions.',
    data: ceaData
  },
  {
    id: 'prf',
    title: 'PRF (From Other Source)',
    description: 'PRF questions.',
    data: prfData
  },
  {
    id: 'csi-quizlet',
    title: 'CSI (Quizlet)',
    description: 'CSI questions from Quizlet.',
    data: csiQuizletData
  },
  {
    id: 'cea-quizlet',
    title: 'CEA (Quizlet)',
    description: 'CEA questions from Quizlet.',
    data: ceaQuizletData
  },
  {
    id: 'cea-chuade',
    title: 'CEA (Chuade)',
    description: 'CEA questions (Chuade).',
    data: ceaChuadeData
  },
  {
    id: 'csi-chuade',
    title: 'CSI (Chuade)',
    description: 'CSI questions (Chuade).',
    data: csiChuadeData
  },
  {
    id: 'prf-chuade',
    title: 'PRF (Chuade)',
    description: 'PRF questions (Chuade).',
    data: prfChuadeData
  }
];
