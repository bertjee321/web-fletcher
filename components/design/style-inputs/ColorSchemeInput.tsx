"use client";

import Tooltip from "@/components/ui/Tooltip";
import { ColorScheme } from "@/lib/enums";

interface ColorSchemeInputProps {
  value: ColorScheme;
  setValue: (value: ColorScheme) => void;
}

const ColorSchemeInput = ({ value, setValue }: ColorSchemeInputProps) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <label className="block text-sm font-medium">Color Scheme</label>
        <Tooltip
          content={
            <p className="text-sm text-gray-700">
              The color scheme determines the overall visual theme of your
              application, typically offering light and dark mode variations
              that affect background colors, text colors, and overall contrast
              throughout the interface.
            </p>
          }
        />
      </div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as ColorScheme)}
        className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
      >
        {Object.entries(ColorScheme).map(([key, scheme]) => (
          <option key={key} value={scheme}>
            {scheme}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorSchemeInput;
