"use client";

import { PageLayoutWrapper } from "@/components/layout/PageLayoutWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useSessions } from "@/lib/hooks/useSessions";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const { sessions } = useSessions();
  const recentSessions = sessions.slice(0, 3);

  return (
    <PageLayoutWrapper>
      {/* Hero Section */}
      <section className="max-w-4xl w-full text-center py-16 space-y-6">
        <h1 className="text-5xl font-serif tracking-wide text-[#3f3a2f]">
          Craft your web like a fletcher crafts his arrows
        </h1>
        <p className="text-xl text-[#6e6556] max-w-2xl mx-auto">
          AI-powered layout and component generation with consistent design
          systems. Define your style once, generate unlimited matching designs.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button
            onClick={() => router.push("/new-session")}
            className="px-8 py-3 bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium rounded-lg transition-colors"
          >
            🏹 Start Fletching
          </Button>
          <Button
            onClick={() => router.push("/sessions")}
            className="px-8 py-3 border border-[#d3c9b4] hover:bg-[#f8f5ef] text-[#3f3a2f] font-medium rounded-lg transition-colors"
          >
            View Sessions
          </Button>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="max-w-5xl w-full py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-[#3f3a2f] mb-2">
              Rapid Prototyping
            </h3>
            <p className="text-sm text-[#6e6556]">
              Generate complete layouts in under 2 minutes with AI assistance
            </p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold text-[#3f3a2f] mb-2">
              Design Consistency
            </h3>
            <p className="text-sm text-[#6e6556]">
              All components automatically respect your style context
            </p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-lg font-semibold text-[#3f3a2f] mb-2">
              Production-Ready Code
            </h3>
            <p className="text-sm text-[#6e6556]">
              Clean, semantic HTML/JSX with Tailwind CSS
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl w-full py-12">
        <h2 className="text-3xl font-serif text-center mb-8 text-[#3f3a2f]">
          How It Works
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7a5f3e] text-white flex items-center justify-center font-semibold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-[#3f3a2f] mb-1">
                Define Your Style
              </h3>
              <p className="text-[#6e6556]">
                Choose colors, fonts, spacing, tone, and add an optional design
                brief
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7a5f3e] text-white flex items-center justify-center font-semibold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-[#3f3a2f] mb-1">
                Fletch Your Layout
              </h3>
              <p className="text-[#6e6556]">
                AI generates responsive, accessible designs matching your exact
                specifications
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7a5f3e] text-white flex items-center justify-center font-semibold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-[#3f3a2f] mb-1">
                Copy & Build
              </h3>
              <p className="text-[#6e6556]">
                Export production-ready code and iterate with matching
                components
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sessions (if any) */}
      {recentSessions.length > 0 && (
        <section className="max-w-5xl w-full py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif text-[#3f3a2f]">
              Your Recent Sessions
            </h2>
            <a
              href="/sessions"
              className="text-sm text-[#7a5f3e] hover:text-[#8b7355] transition-colors"
            >
              View All →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recentSessions.map((session) => (
              <Card
                key={session.id}
                className="p-4 cursor-pointer hover:border-[#b8a88a] transition-all"
                onClick={() => router.push(`/sessions/${session.id}`)}
              >
                <h3 className="font-semibold text-[#2c2a24] mb-2">
                  {session.name}
                </h3>
                <p className="text-xs text-[#6e6556] bg-[#f0ebe3] px-2 py-1 rounded inline-block">
                  {session.styleContext.tone}
                </p>
              </Card>
            ))}
          </div>
        </section>
      )}
    </PageLayoutWrapper>
  );
}
