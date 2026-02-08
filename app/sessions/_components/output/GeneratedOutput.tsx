import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface GeneratedOutputProps {
  htmlContent?: string | null;
}

const GeneratedOutput = ({ htmlContent }: GeneratedOutputProps) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!htmlContent) {
    return (
      <div className="mt-4 border border-dashed border-[#d3c9b4] rounded-xl p-6 text-center text-sm text-[#6e6556]">
        <p>Generated layout preview will appear here.</p>
        <p className="mt-2 italic">“You’ve gained +10 Web Fletching XP.”</p>
      </div>
    );
  }

  // Extract HTML from markdown code blocks
  const extractHtmlFromMarkdown = (content: string): string => {
    const match = content.match(/```(?:html)?\s*\n([\s\S]*?)\n```/);
    return match ? match[1].trim() : content;
  };

  const cleanHtml = extractHtmlFromMarkdown(htmlContent);

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([cleanHtml], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "generated-layout.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const maxLines = 20;
  const lineCount = cleanHtml.split("\n").length;
  const shouldTruncate = lineCount > maxLines;

  return (
    <div className="space-y-4">
      {/* Code Display */}
      <div className="relative border border-[#d3c6b1] rounded-lg overflow-hidden">
        <div
          className={`${
            !isExpanded && shouldTruncate ? "max-h-[500px]" : "max-h-[800px]"
          } overflow-auto relative`}
        >
          <SyntaxHighlighter
            language="html"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}
            showLineNumbers
          >
            {isExpanded
              ? cleanHtml
              : cleanHtml.split("\n").slice(0, maxLines).join("\n")}
          </SyntaxHighlighter>

          {/* Gradient fade for truncated content */}
          {!isExpanded && shouldTruncate && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/80 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Expand/Collapse button */}
        {shouldTruncate && (
          <div className="border-t border-[#3d3d3d] bg-[#1e1e1e] p-2 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-1.5 text-xs bg-[#2d2d2d] hover:bg-[#3d3d3d] text-[#d4d4d4] rounded border border-[#4d4d4d] transition-colors"
            >
              {isExpanded
                ? "▲ Show Less"
                : `▼ Show More (${lineCount - maxLines} more lines)`}
            </button>
          </div>
        )}

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 px-3 py-1.5 text-xs bg-[#2d2d2d] hover:bg-[#3d3d3d] text-[#d4d4d4] rounded border border-[#4d4d4d] transition-colors z-10"
        >
          {copied ? "✓ Copied!" : "📋 Copy"}
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end">
        <button
          onClick={handleDownload}
          className="px-4 py-2 text-sm border border-[#d3c6b1] rounded-lg hover:bg-[#f8f5ef] transition-colors text-[#2c2a24]"
        >
          📥 Download HTML
        </button>
        <button
          onClick={handleCopy}
          className="px-4 py-2 text-sm bg-[#7a5f3e] hover:bg-[#8b7355] text-white rounded-lg transition-colors"
        >
          {copied ? "✓ Copied!" : "📋 Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
};
export default GeneratedOutput;
