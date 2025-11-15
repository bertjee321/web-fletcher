"use client";

import Tooltip from "@/components/ui/Tooltip";
import { PrimaryColor } from "@/enums";

interface PrimaryColorInputProps {
  value: PrimaryColor;
  setValue: (value: PrimaryColor) => void;
}

const PrimaryColorInput = ({ value, setValue }: PrimaryColorInputProps) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <label className="block text-sm font-medium">Primary Color</label>
        <Tooltip
          content={
            <p className="text-sm text-gray-700">
              The primary color is the main color used throughout your
              application, influencing buttons, links, and other key UI elements
              to create a cohesive and visually appealing design.
            </p>
          }
        />
      </div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as PrimaryColor)}
        className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
      >
        {Object.entries(PrimaryColor).map(([key, color]) => (
          <option key={key} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PrimaryColorInput;
