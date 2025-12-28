import { useState, useEffect } from "react";
import { StyleContext } from "@/lib/models/style-context.model";
import { Session } from "../models/sessions.models";
import { SessionsStorageUtil } from "../utils/sessions-storage.util";

export function useSessions() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Load sessions on mount
  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = () => {
    setLoading(true);
    try {
      const store = SessionsStorageUtil.getSessions();
      setSessions(store.sessions);

      if (store.activeSessionId) {
        const active = SessionsStorageUtil.getSessionById(store.activeSessionId);
        setActiveSession(active);
      }
    } catch (error) {
      console.error("Failed to load sessions:", error);
    } finally {
      setLoading(false);
    }
  };

  const createSession = (name: string, styleContext: StyleContext) => {
    const newSession = SessionsStorageUtil.createSession(name, styleContext);
    loadSessions();
    return newSession;
  };

  const updateOutput = (sessionId: string, output: string) => {
    SessionsStorageUtil.updateSessionOutput(sessionId, output);
    loadSessions();
  };

  // const updateContext = (sessionId: string, styleContext: StyleContext) => {
  //   SessionsStorageUtil.updateSessionContext(sessionId, styleContext);
  //   loadSessions();
  // };

  const switchSession = (sessionId: string) => {
    SessionsStorageUtil.setActiveSession(sessionId);
    loadSessions();
  };

  const deleteSession = (sessionId: string) => {
    SessionsStorageUtil.deleteSession(sessionId);
    loadSessions();
  };

  const renameSession = (sessionId: string, newName: string) => {
    SessionsStorageUtil.renameSession(sessionId, newName);
    loadSessions();
  };

  return {
    sessions,
    activeSession,
    loading,
    createSession,
    updateOutput,
    switchSession,
    deleteSession,
    renameSession,
    refresh: loadSessions,
  };
}
