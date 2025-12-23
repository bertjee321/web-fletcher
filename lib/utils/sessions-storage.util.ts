import { Session, SessionsStore } from "../models/sessions.models";
import { StyleContext } from "../models/style-context.model";

const STORAGE_KEY = "web-fletcher-sessions";

export class SessionsStorageUtil {
  // Get all sessions
  static getSessions(): SessionsStore {
    try {
      const data = localStorage.getItem(STORAGE_KEY);

      if (!data) {
        return { sessions: [], activeSessionId: null };
      }

      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading sessions from localStorage:", error);
      return { sessions: [], activeSessionId: null };
    }
  }

  // Save sessions store
  private static saveSessions(store: SessionsStore): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (error) {
      console.error("Error saving sessions to localStorage:", error);
      throw new Error("Failed to save session. Storage might be full.");
    }
  }

  // Create a new session
  static createSession(name: string, styleContext: StyleContext): Session {
    const store = this.getSessions();
    const newSession: Session = {
      id: crypto.randomUUID(),
      name: name || `Session ${store.sessions.length + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      styleContext,
      generatedOutput: null,
    };

    store.sessions.push(newSession);
    store.activeSessionId = newSession.id;
    this.saveSessions(store);

    return newSession;
  }

  // Update session output
  static updateSessionOutput(sessionId: string, output: string): void {
    const store = this.getSessions();
    const session = store.sessions.find((s) => s.id === sessionId);

    if (!session) {
      throw new Error("Session not found");
    }

    session.generatedOutput = output;
    session.updatedAt = new Date().toISOString();
    this.saveSessions(store);
  }

  // Get session by ID
  static getSessionById(sessionId: string): Session | null {
    const store = this.getSessions();
    return store.sessions.find((s) => s.id === sessionId) || null;
  }

  // Set active session
  static setActiveSession(sessionId: string): void {
    const store = this.getSessions();
    const sessionExists = store.sessions.some((s) => s.id === sessionId);

    if (!sessionExists) {
      throw new Error("Session not found");
    }

    store.activeSessionId = sessionId;
    this.saveSessions(store);
  }

  // Set active session
  static setActiveSession(sessionId: string): void {
    const store = this.getSessions();
    const sessionExists = store.sessions.some((s) => s.id === sessionId);

    if (!sessionExists) {
      throw new Error("Session not found");
    }

    store.activeSessionId = sessionId;
    this.saveSessions(store);
  }

  // Delete session
  static deleteSession(sessionId: string): void {
    const store = this.getSessions();
    store.sessions = store.sessions.filter((s) => s.id !== sessionId);

    // If deleted session was active, clear active session
    if (store.activeSessionId === sessionId) {
      store.activeSessionId = store.sessions[0]?.id || null;
    }

    this.saveSessions(store);
  }

  // Rename session
  static renameSession(sessionId: string, newName: string): void {
    const store = this.getSessions();
    const session = store.sessions.find((s) => s.id === sessionId);

    if (!session) {
      throw new Error("Session not found");
    }

    session.name = newName;
    session.updatedAt = new Date().toISOString();
    this.saveSessions(store);
  }

  // Clear all sessions (useful for testing)
  static clearAll(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
