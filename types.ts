
export type ContentBlockType = 'text' | 'image' | 'video' | 'figma' | 'quote' | 'web' | 'design-system' | 'external-link';

export interface ContentBlock {
  type: ContentBlockType;
  content: string; // Text content, Image URL, Video URL, or iframe src
  caption?: string;
  title?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  summary: string;
  role: string;
  timeline: string;
  tools: string[];
  challenge: string;
  solution: string;
  impact: string;
  contentBlocks?: ContentBlock[]; // New flexible content array
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export enum PageView {
  HOME = 'HOME',
  PROJECT = 'PROJECT',
  ABOUT = 'ABOUT',
}
