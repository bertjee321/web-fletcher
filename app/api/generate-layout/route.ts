import { StyleContext } from "@/lib/models/style-context.model";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Validate StyleContext object
function validateStyleContext(data: any): data is StyleContext {
  return (
    data &&
    typeof data === "object" &&
    typeof data.colorScheme === "string" &&
    typeof data.primaryColor === "string" &&
    typeof data.borderRadius === "string" &&
    typeof data.tone === "string" &&
    typeof data.font === "string" &&
    typeof data.spacing === "string" &&
    (data.designBrief === undefined || typeof data.designBrief === "string")
  );
}

export async function POST(request: NextRequest): Promise<
  NextResponse<
    | (OpenAI.Responses.Response & {
        _request_id?: string | null;
      })
    | { error: string }
  >
> {
  try {
    // Check API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key not configured.");
      return NextResponse.json(
        { error: "OpenAI API key not configured." },
        { status: 500 },
      );
    }

    // Validate request body exists
    let styleContext: StyleContext;
    try {
      styleContext = (await request.json()) as StyleContext;
    } catch (parseError) {
      console.error("Invalid JSON in request body:", parseError);
      return NextResponse.json(
        { error: "Invalid JSON in request body." },
        { status: 400 },
      );
    }

    // Validate StyleContext structure
    if (!validateStyleContext(styleContext)) {
      return NextResponse.json(
        { error: "Invalid StyleContext structure." },
        { status: 400 },
      );
    }

    // Validate designBrief length if provided
    if (styleContext.designBrief && styleContext.designBrief.length > 500) {
      return NextResponse.json(
        { error: "designBrief is too long. Maximum length is 500 characters." },
        { status: 400 },
      );
    }

    // Load layout-fletcher.v1.md prompt template
    const fs = await import("fs").then((m) => m.promises);
    const promptPath = path.join(
      process.cwd(),
      "server",
      "agents",
      "layout-fletcher.v1.md",
    );

    let promptTemplate: string;
    try {
      promptTemplate = await fs.readFile(promptPath, "utf-8");
    } catch (fileError) {
      console.error("Error reading prompt template:", fileError);
      return NextResponse.json(
        { error: "Error reading prompt template." },
        { status: 500 },
      );
    }

    // Call OpenAI API with timeout handling
    let result: OpenAI.Responses.Response;
    try {
      result = await Promise.race([
        openai.responses.create({
          model: "gpt-5.1-codex-max",
          input: [
            { role: "system", content: promptTemplate },
            { role: "user", content: JSON.stringify(styleContext, null, 2) },
          ],
          reasoning: { effort: "high" },
        }),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), 60000),
        ),
      ]);
    } catch (apiError) {
      console.error("OpenAI API error:", apiError);

      if (apiError instanceof Error && apiError.message === "Request timeout") {
        return NextResponse.json(
          { error: "Request timed out. Please try again." },
          { status: 504 },
        );
      }

      // Handle specific OpenAI errors
      if (apiError instanceof OpenAI.APIError) {
        if (apiError.status === 429) {
          return NextResponse.json(
            { error: "Rate limit exceeded. Please try again later." },
            { status: 429 },
          );
        }
        if (apiError.status === 401) {
          return NextResponse.json(
            { error: "API authentication failed" },
            { status: 500 },
          );
        }
      }

      return NextResponse.json(
        { error: "Failed to generate layout. Please try again." },
        { status: 500 },
      );
    }

    if (!result.output_text || result.output_text.trim() === "") {
      return NextResponse.json(
        { error: "Generated output was empty" },
        { status: 500 },
      );
    }

    return NextResponse.json(result, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (generalError) {
    // Catch-all for unexpected errors
    console.error("Unexpected error in generate-layout route:", generalError);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
