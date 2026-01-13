"use client";

import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import {
  BorderRadius,
  ColorScheme,
  Font,
  PrimaryColor,
  Spacing,
  Tone,
} from "@/lib/enums";
import { Session } from "@/lib/models/sessions.models";
import GeneratedOutput from "@/components/design/output/GeneratedOutput";
import { useSessions } from "@/lib/hooks/useSessions";
import { useParams } from "next/navigation";
import { useEffect } from "react";

// Mock session for demonstration
const mockSession: Session = {
  id: "1",
  name: "E-commerce Homepage Redesign",
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-20T14:45:00Z",
  styleContext: {
    colorScheme: ColorScheme.Light,
    primaryColor: PrimaryColor.Blue,
    borderRadius: BorderRadius.Medium,
    tone: Tone.ModernMinimalist,
    font: Font.Inter,
    spacing: Spacing.Normal,
    designBrief:
      "Landing page for an e-commerce platform focused on sustainable fashion. Include hero section, featured products, and newsletter signup.",
  },
  generatedOutput: null,
};

export default function SessionDetailPage() {
  const params = useParams();
  const sessionId = params.sessionId as string;
  const { activeSession, switchSession } = useSessions();

  useEffect(() => {
    switchSession(sessionId);
  }, [sessionId]);

  if (!activeSession) {
    return (
      <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
        <Header />
        <MainContent>
          <div className="max-w-4xl w-full p-6">
            <p className="text-center text-[#6e6556]">
              Loading session details...
            </p>
          </div>
        </MainContent>
      </main>
    );
  }

  const session = activeSession;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      <Header />
      <MainContent>
        <div className="max-w-5xl w-full space-y-6">
          {/* Session Header Card */}
          <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-serif tracking-wide text-[#3f3a2f] mb-2">
                  {session.name}
                </h1>
                <div className="flex gap-4 text-sm text-[#6e6556]">
                  <span>Created: {formatDate(session.createdAt)}</span>
                  <span>•</span>
                  <span>Updated: {formatDate(session.updatedAt)}</span>
                </div>
              </div>
              <a
                href="/sessions"
                className="text-sm text-[#7a5f3e] hover:text-[#8b7355] transition-colors"
              >
                ← Back to Sessions
              </a>
            </div>
          </Card>

          {/* Style Context Card */}
          <Card className="p-6">
            <CardHeader
              title="🎨 Style Context"
              byline="Design settings used for this session"
              className="mb-4"
            />
            <CardBody>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border border-[#e3d6c1] rounded-lg p-4">
                  <p className="text-xs text-[#6e6556] mb-1">Color Scheme</p>
                  <p className="text-sm font-medium text-[#2c2a24]">
                    {session.styleContext.colorScheme}
                  </p>
                </div>
                <div className="border border-[#e3d6c1] rounded-lg p-4">
                  <p className="text-xs text-[#6e6556] mb-1">Primary Color</p>
                  <p className="text-sm font-medium text-[#2c2a24]">
                    {session.styleContext.primaryColor}
                  </p>
                </div>
                <div className="border border-[#e3d6c1] rounded-lg p-4">
                  <p className="text-xs text-[#6e6556] mb-1">Border Radius</p>
                  <p className="text-sm font-medium text-[#2c2a24]">
                    {session.styleContext.borderRadius}
                  </p>
                </div>
                <div className="border border-[#e3d6c1] rounded-lg p-4">
                  <p className="text-xs text-[#6e6556] mb-1">Tone</p>
                  <p className="text-sm font-medium text-[#2c2a24]">
                    {session.styleContext.tone}
                  </p>
                </div>
                <div className="border border-[#e3d6c1] rounded-lg p-4">
                  <p className="text-xs text-[#6e6556] mb-1">Font</p>
                  <p className="text-sm font-medium text-[#2c2a24]">
                    {session.styleContext.font}
                  </p>
                </div>
                <div className="border border-[#e3d6c1] rounded-lg p-4">
                  <p className="text-xs text-[#6e6556] mb-1">Spacing</p>
                  <p className="text-sm font-medium text-[#2c2a24]">
                    {session.styleContext.spacing}
                  </p>
                </div>
              </div>

              {session.styleContext.designBrief && (
                <div className="mt-4 border border-[#e3d6c1] rounded-lg p-4">
                  <p className="text-xs text-[#6e6556] mb-2">Design Brief</p>
                  <p className="text-sm text-[#2c2a24] leading-relaxed">
                    {session.styleContext.designBrief}
                  </p>
                </div>
              )}
            </CardBody>
          </Card>

          {/* Generated Output Card */}
          <Card className="p-6">
            <CardHeader
              title="🏹 Generated Output"
              byline="AI-generated layout based on your style context"
              className="mb-4"
            />
            <CardBody>
              <GeneratedOutput />
            </CardBody>
          </Card>
        </div>
      </MainContent>
    </main>
  );
}
