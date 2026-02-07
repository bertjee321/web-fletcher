"use client";

import DesignConfigForm from "@/components/design/DesignConfigForm";
import { SessionNameModalContent } from "@/components/sessions/SessionNameModalContent";
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
import { useSessions } from "@/lib/hooks/useSessions";
import { StyleContext } from "@/lib/models/style-context.model";
import { useModal } from "@/lib/providers/ModalProvider";
import { useRouter } from "next/navigation";
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

export default function NewSessionPage() {
  const router = useRouter();
  const { modal, openModal, closeModal } = useModal();
  const [sessionName, setSessionName] = useState("");
  const [styleContext, setStyleContext] = useState<StyleContext>(
    DEFAULT_STYLE_CONTEXT,
  );

  const { createSession, updateOutput } = useSessions();
  const { isLoading, isError, generateLayout, resetError } =
    useGenerateLayout();

  const onSubmit = () => {
    resetError();
    openModal({
      title: "New Session",
      byline: "Give your design session a name",
      content: SessionNameModalContent({
        sessionName,
        setSessionName,
        onSessionNameSubmit,
      }),
    });
  };

  const onSessionNameSubmit = async () => {
    closeModal();

    const newSession = createSession(sessionName, styleContext);
    const response = await generateLayout(styleContext);

    if (response) {
      updateOutput(newSession.id, response.output_text);
      router.push(`/sessions/${newSession.id}`);
    } else {
      console.error("Layout generation failed.");
    }
  };

  return (
    <>
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
    </>
  );
}
