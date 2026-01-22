"use client";

import { PageLayoutWrapper } from "@/components/layout/PageLayoutWrapper";
import GeneratedOutput from "@/components/output/GeneratedOutput";
import LayoutPreview from "@/components/output/LayoutPreview";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { useSessions } from "@/lib/hooks/useSessions";
import { formatDate } from "@/lib/utils/date-utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Mock session for demonstration
const TABS: string[] = ["Output", "Preview"] as const;

export default function SessionDetailPage() {
  const [selectedTab, setSelectedTab] = useState<(typeof TABS)[number]>(
    TABS[0],
  );
  const params = useParams();
  const sessionId = params.sessionId as string;
  const { activeSession, switchSession } = useSessions();

  useEffect(() => {
    switchSession(sessionId);
  }, [sessionId]);

  if (!activeSession) {
    return (
      <PageLayoutWrapper>
        <div className="max-w-4xl w-full p-6">
          <p className="text-center text-[#6e6556]">
            Loading session details...
          </p>
        </div>
      </PageLayoutWrapper>
    );
  }

  const session = activeSession;
  const dateNotation = {
    monthNotation: "long",
    dayNotation: "numeric",
    yearNotation: "numeric",
    includeTime: true,
  };

  return (
    <PageLayoutWrapper>
      <div className="max-w-5xl w-full space-y-6">
        {/* Session Header Card */}
        <Card className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-serif tracking-wide text-[#3f3a2f] mb-2">
                {session.name}
              </h1>
              <div className="flex gap-4 text-sm text-[#6e6556]">
                <span>
                  Created: {formatDate(session.createdAt, dateNotation)}
                </span>
                <span>•</span>
                <span>
                  Updated: {formatDate(session.updatedAt, dateNotation)}
                </span>
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
          <Tabs
            tabs={TABS}
            selectedTab={selectedTab}
            onValueChange={setSelectedTab}
          />
          <CardBody>
            {selectedTab === "Output" && (
              <GeneratedOutput htmlContent={session.generatedOutput} />
            )}
            {selectedTab === "Preview" && (
              <LayoutPreview htmlContent={session.generatedOutput} />
            )}
          </CardBody>
        </Card>
      </div>
    </PageLayoutWrapper>
  );
}
