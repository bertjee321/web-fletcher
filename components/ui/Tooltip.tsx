"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface TooltipProps {
  content: ReactNode;
}

const Tooltip = ({ content }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowTooltip]);

  return (
    <div className="relative" ref={tooltipRef}>
      <button
        type="button"
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-4 h-4 rounded-full bg-gray-400 text-white text-xs flex items-center justify-center hover:bg-gray-500"
      >
        ?
      </button>
      {showTooltip && (
        <div className="absolute z-10 left-0 top-6 bg-white border border-gray-300 rounded-lg p-3 shadow-lg w-64">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
