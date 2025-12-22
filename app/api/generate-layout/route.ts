import { StyleContext } from "@/lib/models/style-context.model";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
const path = require("path");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest): Promise<
  NextResponse<
    OpenAI.Responses.Response & {
      _request_id?: string | null;
    }
  >
> {
  const styleContext = (await request.json()) as StyleContext;

  // Load layout-fletcher.v1.md prompt template
  const fs = await import("fs").then((m) => m.promises);

  const promptPath = path.join(
    process.cwd(),
    "server",
    "agents",
    "layout-fletcher.v1.md"
  );
  const promptTemplate = await fs.readFile(promptPath, "utf-8");

  const result = await openai.responses.create({
    model: "gpt-5.1-codex-max",
    input: [
      { role: "system", content: promptTemplate },
      { role: "user", content: JSON.stringify(styleContext, null, 2) },
    ],
    reasoning: { effort: "high" },
  });

  return NextResponse.json(result, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
