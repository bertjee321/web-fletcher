"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <section className="max-w-3xl w-full text-center py-16 space-y-6">
      <div className="text-8xl mb-4">🏹</div>

      <h1 className="text-6xl font-serif tracking-wide text-[#3f3a2f] mb-2">
        404
      </h1>

      <h2 className="text-3xl font-serif text-[#6e6556] mb-4">
        Arrow Missed Its Target
      </h2>

      <Card className="p-8 text-center max-w-2xl mx-auto">
        <p className="text-lg text-[#6e6556] mb-6">
          The page you're looking for has wandered off the fletching table.
          Perhaps it was never crafted, or it's been lost in the design
          sessions.
        </p>

        <div className="space-y-3 text-sm text-[#6e6556] italic mb-8">
          <p>"Even the finest fletcher misses a shot now and then."</p>
          <p className="text-xs">— Ancient Web Fletcher Proverb</p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => (window.location.href = "/")}
            className="px-8 py-3 bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium rounded-lg transition-colors"
          >
            🏠 Return Home
          </Button>

          <Button
            onClick={() => (window.location.href = "/new-session")}
            className="px-8 py-3 border border-[#d3c9b4] hover:bg-[#f8f5ef] text-[#3f3a2f] font-medium rounded-lg transition-colors"
          >
            🪶 Start Fletching
          </Button>
        </div>
      </Card>

      <div className="pt-8">
        <p className="text-xs text-[#6e6556]">
          <strong>Lost?</strong> Check out your{" "}
          <a
            href="/sessions"
            className="text-[#7a5f3e] hover:text-[#8b7355] underline"
          >
            design sessions
          </a>{" "}
          or browse the{" "}
          <a
            href="/docs"
            className="text-[#7a5f3e] hover:text-[#8b7355] underline"
          >
            documentation
          </a>
          .
        </p>
      </div>
    </section>
  );
}
