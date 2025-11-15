"use client";

import Tooltip from "@/components/ui/Tooltip";
import { Spacing } from "@/enums";
import { useEffect, useRef, useState } from "react";

interface SpacingInputProps {
  value: Spacing;
  setValue: (value: Spacing) => void;
}

const SpacingInput = ({ value, setValue }: SpacingInputProps) => {
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
  }, []);

  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <label className="block text-sm font-medium">Spacing</label>
        <Tooltip
          content={
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <strong>Compact</strong> - Tight spacing for information-dense
                layouts
              </li>
              <li>
                <strong>Normal</strong> - Balanced spacing for standard
                readability and comfort
              </li>
              <li>
                <strong>Comfortable</strong> - Generous spacing for relaxed,
                breathable layouts
              </li>
              <li>
                <strong>Spacious</strong> - Maximum spacing for premium, luxury
                feel with lots of whitespace
              </li>
            </ul>
          }
        />
      </div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as Spacing)}
        className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
      >
        {Object.entries(Spacing).map(([key, spacing]) => (
          <option key={key} value={spacing}>
            {spacing}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SpacingInput;
