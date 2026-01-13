"use client";

import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { useSessions } from "@/lib/hooks/useSessions";
import { useRouter } from "next/navigation";

export default function SessionsPage() {
  const router = useRouter();
  const { sessions } = useSessions();

  // Sort by most recently updated
  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSessionClick = (sessionId: string) => {
    router.push(`/sessions/${sessionId}`);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      <Header />
      <MainContent>
        <Card className="max-w-4xl w-full p-6">
          <CardHeader
            title="📂 Your Design Sessions"
            byline="Manage and revisit your previous design fletching sessions."
          />
          <CardBody>
            {sortedSessions.length === 0 ? (
              <div className="mt-4 border border-dashed border-[#d3c9b4] rounded-xl p-6 text-center text-sm text-[#6e6556]">
                <p>Your saved design sessions will appear here.</p>
                <p className="mt-2 italic">
                  "Ready to fletch a <a href="/">new design?</a>"
                </p>
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                {sortedSessions.map((session) => (
                  <div
                    key={session.id}
                    className="border border-[#d3c9b4] rounded-xl p-5 hover:border-[#b8a88a] hover:shadow-sm transition-all cursor-pointer"
                    onClick={() => handleSessionClick(session.id)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[#2c2a24]">
                        {session.name}
                      </h3>
                      <span className="text-xs text-[#6e6556] bg-[#f0ebe3] px-2 py-1 rounded">
                        {session.styleContext.tone}
                      </span>
                    </div>

                    <div className="text-sm text-[#6e6556] space-y-2">
                      <p>
                        <span className="font-medium">Color Scheme:</span>{" "}
                        {session.styleContext.colorScheme}
                      </p>
                      <p>
                        <span className="font-medium">Primary Color:</span>{" "}
                        {session.styleContext.primaryColor}
                      </p>
                      <p>
                        <span className="font-medium">Font:</span>{" "}
                        {session.styleContext.font} •{" "}
                        <span className="font-medium">Spacing:</span>{" "}
                        {session.styleContext.spacing}
                      </p>
                      <p>
                        <span className="font-medium">Border Radius:</span>{" "}
                        {session.styleContext.borderRadius}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#e8e3d8] flex justify-between items-center text-xs text-[#8e856f]">
                      <span>Updated: {formatDate(session.updatedAt)}</span>
                      <span>Created: {formatDate(session.createdAt)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardBody>
        </Card>
      </MainContent>
    </main>
  );
}
