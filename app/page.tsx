"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { Button } from "@/components/ui/Button";
import TabsContainer from "@/components/ui/Tabs";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState("style");
  const [styleContext, setStyleContext] = useState({
    theme: "modern",
    palette: "forest",
    tone: "professional",
    description: "",
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      {/* 🏹 Header / Navigation */}
      <Header />

      {/* 🪶 Main Content */}
      <MainContent>
        <div className="max-w-3xl w-full bg-[#fffaf3] border border-[#e3d6c1] shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#3f3a2f] mb-1">
            🪶 Start a Design Session
          </h2>
          <p className="text-sm text-[#6e6556] mb-6">
            Define your design tone and begin fletching your first layout.
          </p>

          {/* Tabs */}
          <TabsContainer value={selectedTab} onValueChange={setSelectedTab}>
            <Tabs.List className="flex border-b border-[#e3d6c1]">
              <Tabs.Trigger
                value="style"
                className={`px-4 py-2 text-sm font-medium ${
                  selectedTab === "style"
                    ? "border-b-2 border-[#7a5f3e] text-[#3f3a2f]"
                    : "text-[#6e6556] hover:text-[#3f3a2f]"
                }`}
              >
                Style Settings
              </Tabs.Trigger>

              <Tabs.Trigger
                value="preview"
                className={`px-4 py-2 text-sm font-medium ${
                  selectedTab === "preview"
                    ? "border-b-2 border-[#7a5f3e] text-[#3f3a2f]"
                    : "text-[#6e6556] hover:text-[#3f3a2f]"
                }`}
              >
                Preview
              </Tabs.Trigger>
            </Tabs.List>
          </TabsContainer>

          {/* Style Settings */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 font-medium">Theme</label>
              <select
                value={styleContext.theme}
                onChange={(e) =>
                  setStyleContext({ ...styleContext, theme: e.target.value })
                }
                className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
              >
                <option value="modern">Modern</option>
                <option value="minimal">Minimal</option>
                <option value="brutalist">Brutalist</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">Palette</label>
              <select
                value={styleContext.palette}
                onChange={(e) =>
                  setStyleContext({ ...styleContext, palette: e.target.value })
                }
                className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
              >
                <option value="forest">Forest Green</option>
                <option value="desert">Warm Brown</option>
                <option value="night">Dark Gold</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">Tone</label>
              <select
                value={styleContext.tone}
                onChange={(e) =>
                  setStyleContext({ ...styleContext, tone: e.target.value })
                }
                className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
              >
                <option value="professional">Professional</option>
                <option value="fun">Fun</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                Describe your style
              </label>
              <input
                type="text"
                placeholder="e.g. Modern OSRS vibe with parchment textures"
                value={styleContext.description}
                onChange={(e) =>
                  setStyleContext({
                    ...styleContext,
                    description: e.target.value,
                  })
                }
                className="w-full border border-[#d3c9b4] rounded-lg p-2"
              />
            </div>

            <Button
              className="mt-4 w-full bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium py-2 rounded-lg transition-colors"
              onClick={() =>
                alert("🏹 Starting design session... (dummy action)")
              }
            >
              🏹 Fletch Layout
            </Button>
          </div>

          {/* Dummy Preview */}
          <div className="mt-8 border border-dashed border-[#d3c9b4] rounded-xl p-6 text-center text-sm text-[#6e6556]">
            <p>Generated layout preview will appear here.</p>
            <p className="mt-2 italic">
              “You’ve gained +10 UI Consistency XP.”
            </p>
          </div>
        </div>
      </MainContent>

      {/* Footer */}
      <Footer />
    </main>
  );
}
