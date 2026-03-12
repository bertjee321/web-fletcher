import { useState } from "react";

interface LayoutPreviewProps {
  htmlContent?: string | null;
}

const LayoutPreview = ({ htmlContent }: LayoutPreviewProps) => {
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

  const previewHtml = `
    <style>
      a, button, input[type="submit"], input[type="button"] { 
        pointer-events: none !important; 
        cursor: default !important; 
      }
    </style>
    ${cleanHtml}
  `;

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

  return (
    <div className="space-y-4">
      {/* Preview Frame */}
      <div className="border border-[#d3c6b1] rounded-lg overflow-hidden bg-white">
        {/* <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}></div> */}
        <iframe
          srcDoc={previewHtml}
          title="Generated Layout Preview"
          className="w-full h-[600px] border-0"
          sandbox="allow-same-origin"
        />
      </div>

      {/* Controls */}
      <div className="flex gap-3 justify-end">
        <button
          onClick={handleDownload}
          className="px-4 py-2 text-sm border border-[#d3c6b1] rounded-lg hover:bg-[#f8f5ef] transition-colors"
        >
          📥 Download HTML
        </button>
        <button
          onClick={handleCopy}
          className="px-4 py-2 text-sm border border-[#d3c6b1] rounded-lg hover:bg-[#f8f5ef] transition-colors"
        >
          📋 Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default LayoutPreview;
