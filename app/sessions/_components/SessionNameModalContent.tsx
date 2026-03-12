"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { TextInput } from "../../../components/ui/TextInput";

interface SessionNameModalContentProps {
  onSessionNameSubmit: (sessionName: string) => void;
}

export const SessionNameModalContent = ({
  onSessionNameSubmit,
}: SessionNameModalContentProps) => {
  const [sessionName, setSessionName] = useState("");

  return (
    <>
      <TextInput
        placeholder="E.g., 'My SaaS Landing Page Layout'"
        value={sessionName}
        setValue={(value) => setSessionName(value)}
      />
      <Button
        className="mt-4 w-full bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium py-2 rounded-lg transition-colors"
        onClick={() => onSessionNameSubmit(sessionName)}
      >
        Submit
      </Button>
    </>
  );
};