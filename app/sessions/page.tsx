"use client";

import { PageLayoutWrapper } from "@/components/layout/PageLayoutWrapper";
import { EmptySessionState } from "@/components/sessions/EmptySessionState";
import { SessionCard } from "@/components/sessions/SessionCard";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { useSessions } from "@/lib/hooks/useSessions";
import { formatDate } from "@/lib/utils/date-utils";
import { useRouter } from "next/navigation";

export default function SessionsPage() {
  const router = useRouter();
  const { sessions } = useSessions();

  // Sort by most recently updated
  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  const handleSessionClick = (sessionId: string) => {
    router.push(`/sessions/${sessionId}`);
  };

  return (
    <PageLayoutWrapper>
      <Card className="max-w-4xl w-full p-6">
        <CardHeader
          title="📂 Your Design Sessions"
          byline="Manage and revisit your previous design fletching sessions."
        />
        <CardBody>
          {sortedSessions.length === 0 ? (
            <EmptySessionState />
          ) : (
            <div className="mt-4 space-y-4">
              {sortedSessions.map((session, index) => (
                <SessionCard
                  key={index}
                  session={session}
                  onClick={handleSessionClick}
                  formatDate={formatDate}
                />
              ))}
            </div>
          )}
        </CardBody>
      </Card>
    </PageLayoutWrapper>
  );
}
