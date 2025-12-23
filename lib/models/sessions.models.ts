import { StyleContext } from './style-context.model';

export interface Session {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  styleContext: StyleContext;
  generatedOutput: string | null;
}

export interface SessionsStore {
  sessions: Session[];
  activeSessionId: string | null;
}