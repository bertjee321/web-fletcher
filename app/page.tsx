"use client";

import DesignConfigForm from "@/components/design/DesignConfigForm";
import DesignTabs from "@/components/design/DesignTabs";
import Footer from "@/components/layout/Footer";
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
import { StyleContext } from "@/lib/models/style-context.model";
import { useState } from "react";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState("style");
  const [styleContext, setStyleContext] = useState<StyleContext>({
    colorScheme: ColorScheme.Light,
    primaryColor: PrimaryColor.Red,
    borderRadius: BorderRadius.None,
    tone: Tone.ModernMinimalist,
    font: Font.Inter,
    spacing: Spacing.Compact,
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      {/* 🏹 Header / Navigation */}
      <Header />

      {/* 🪶 Main Content */}
      <MainContent>
        <Card className="max-w-3xl w-full p-6">
          <CardHeader
            title="🪶 Start a Design Session"
            byline="Define your design tone and begin fletching your first layout."
          />

          {/* Tabs */}
          <DesignTabs
            selectedTab={selectedTab}
            onValueChange={setSelectedTab}
          />

          {/* Style Settings */}
          <CardBody>
            <DesignConfigForm
              styleContext={styleContext}
              setStyleContext={setStyleContext}
            ></DesignConfigForm>

            {/* <div className="mt-4 border border-dashed border-[#d3c9b4] rounded-xl p-6 text-center text-sm text-[#6e6556]">
              <p>Generated layout preview will appear here.</p>
              <p className="mt-2 italic">
                “You’ve gained +10 UI Consistency XP.”
              </p>
            </div> */}
          </CardBody>

          {/* Dummy Preview */}
        </Card>
      </MainContent>

      {/* Footer */}
      <Footer />
    </main>
  );
}
