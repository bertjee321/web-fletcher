"use client";

import DesignConfigForm from "@/components/design/DesignConfigForm";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { ModalContainer } from "@/components/ui/ModalContainer";
import { NoticeBox } from "@/components/ui/NoticeBox";
import { TextInput } from "@/components/ui/TextInput";
import {
  BorderRadius,
  ColorScheme,
  Font,
  PrimaryColor,
  Spacing,
  Tone,
} from "@/lib/enums";
import { useGenerateLayout } from "@/lib/hooks/useGenerateLayout";
import { useSessions } from "@/lib/hooks/useSessions";
import { StyleContext } from "@/lib/models/style-context.model";
import { useState } from "react";

const DEFAULT_STYLE_CONTEXT: StyleContext = {
  colorScheme: ColorScheme.Light,
  primaryColor: PrimaryColor.Red,
  borderRadius: BorderRadius.None,
  tone: Tone.ModernMinimalist,
  font: Font.Inter,
  spacing: Spacing.Compact,
  designBrief: "",
};

export default function HomePage() {
  const [sessionNameModal, setSessionNameModal] = useState(false);
  const [sessionName, setSessionName] = useState("");
  const [styleContext, setStyleContext] = useState<StyleContext>(
    DEFAULT_STYLE_CONTEXT
  );

  const { createSession, updateOutput } = useSessions();
  const { isLoading, isError, generateLayout, resetError } =
    useGenerateLayout();

  const onSubmit = () => {
    resetError();
    setSessionNameModal(true);
  };

  const onSessionNameSubmit = async () => {
    setSessionNameModal(false);

    const newSession = createSession(sessionName, styleContext);
    const response = await generateLayout(styleContext);

    if (response) {
      updateOutput(newSession.id, response.output_text);
    } else {
      console.error("Layout generation failed.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      <Header />
      <MainContent>
        <Card className="max-w-3xl w-full p-6">
          <CardHeader
            title="🪶 Start a Design Session"
            byline="Define your design tone and begin fletching your first layout."
          />

          <CardBody>
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
        </Card>
      </MainContent>
      <Footer />

      {/* Session Name Modal */}
      <ModalContainer
        isOpen={sessionNameModal}
        onClose={() => setSessionNameModal(false)}
        title="New Session"
        byline="Give your design session a name"
      >
        <TextInput
          placeholder="E.g., 'My SaaS Landing Page Layout'"
          value={sessionName}
          setValue={(value) => setSessionName(value)}
        />
        <Button
          className="mt-4 w-full bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium py-2 rounded-lg transition-colors"
          onClick={onSessionNameSubmit}
        >
          Submit
        </Button>
      </ModalContainer>
    </main>
  );
}
