import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export default function SessionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      {/* 🏹 Header / Navigation */}
      <Header />
      <MainContent>
        <Card className="max-w-3xl w-full p-6">
          <CardHeader
            title="📂 Your Design Sessions"
            byline="Manage and revisit your previous design fletching sessions."
          />
          <CardBody>
            <div className="mt-4 border border-dashed border-[#d3c9b4] rounded-xl p-6 text-center text-sm text-[#6e6556]">
              <p>Your saved design sessions will appear here.</p>
              <p className="mt-2 italic">“Ready to fletch a <a href="/">new design?</a>”</p>
            </div>
          </CardBody>
        </Card>
      </MainContent>
    </main>
  );
}
