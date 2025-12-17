"use client";

import Tooltip from "@/components/ui/Tooltip";
import { BorderRadius } from "@/enums";

interface BorderRadiusInputProps {
  value: BorderRadius;
  setValue: (value: BorderRadius) => void;
}

const BorderRadiusInput = ({ value, setValue }: BorderRadiusInputProps) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <label className="block text-sm font-medium">Border Radius</label>
        <Tooltip
          content={
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <strong>None</strong> - Sharp, square corners with no rounding
                (0px radius)
              </li>
              <li>
                <strong>Small</strong> - Subtle rounding for a slightly softer
                appearance
              </li>
              <li>
                <strong>Medium</strong> - Medium rounding that balances modern
                aesthetics with readability
              </li>
              <li>
                <strong>Large</strong> - Pronounced rounding for a more friendly,
                approachable feel
              </li>
              <li>
                <strong>Extra Large</strong> - Heavy rounding for a very modern,
                pill-like appearance
              </li>
              <li>
                <strong>Full</strong> - Complete rounding creating perfect
                circles or pills
              </li>
            </ul>
          }
        />
      </div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as BorderRadius)}
        className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
      >
        {Object.entries(BorderRadius).map(([key, radius]) => (
          <option key={key} value={radius}>
            {radius}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BorderRadiusInput;
