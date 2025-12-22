"use client";

import DesignConfigForm from "@/components/design/DesignConfigForm";
import DesignTabs from "@/components/design/DesignTabs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { NoticeBox } from "@/components/ui/NoticeBox";
import {
  BorderRadius,
  ColorScheme,
  Font,
  PrimaryColor,
  Spacing,
  Tone,
} from "@/lib/enums";
import { useGenerateLayout } from "@/lib/hooks/useGenerateLayout";
import { StyleContext } from "@/lib/models/style-context.model";
import { useState } from "react";

export default function HomePage() {
  const { isLoading, isError, generateLayout, resetError } = useGenerateLayout();
  const [selectedTab, setSelectedTab] = useState("style");
  const [styleContext, setStyleContext] = useState<StyleContext>({
    colorScheme: ColorScheme.Light,
    primaryColor: PrimaryColor.Red,
    borderRadius: BorderRadius.None,
    tone: Tone.ModernMinimalist,
    font: Font.Inter,
    spacing: Spacing.Compact,
    designBrief: "",
  });

  const onSubmit = async () => {
    resetError();

    const data = await generateLayout(styleContext);

    if (data) {
      console.log(data.output_text);
    }
  };

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
            {/* Error State */}
            {isError && (
              <NoticeBox
                type="error"
                className="mt-6"
                text="Failed to generate layout. Please try again."
              ></NoticeBox>
            )}

            {isLoading ? (
              <LoadingSpinner text="Generating layout..." />
            ) : (
              <DesignConfigForm
                styleContext={styleContext}
                setStyleContext={setStyleContext}
                onSubmit={onSubmit}
              ></DesignConfigForm>
            )}
          </CardBody>

          {/* Dummy Preview */}
        </Card>
      </MainContent>

      {/* Footer */}
      <Footer />
    </main>
  );
}
