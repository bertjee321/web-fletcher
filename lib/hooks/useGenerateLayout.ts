// lib/hooks/useGenerateLayout.ts
import { StyleContext } from "@/lib/models/style-context.model";
import OpenAI from "openai";
import { useState } from "react";

interface UseGenerateLayoutReturn {
  isLoading: boolean;
  isError: boolean;
  generateLayout: (
    styleContext: StyleContext
  ) => Promise<
    (OpenAI.Responses.Response & { _request_id?: string | null }) | null
  >;
  resetError: () => void;
}

export function useGenerateLayout(): UseGenerateLayoutReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const generateLayout = async (
    styleContext: StyleContext
  ): Promise<
    (OpenAI.Responses.Response & { _request_id?: string | null }) | null
  > => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch("/api/generate-layout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(styleContext),
      });

      if (!response.ok) throw new Error("Failed to generate layout");

      const data: OpenAI.Responses.Response & { _request_id?: string | null } =
        await response.json();

      setIsLoading(false);

      return data;
    } catch (error) {
      setIsError(true);
      setIsLoading(false);

      console.error(error);

      return null;
    }
  };

  return {
    isLoading,
    isError,
    generateLayout,
    resetError: () => setIsError(false),
  };
}
