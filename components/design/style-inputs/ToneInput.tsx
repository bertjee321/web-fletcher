"use client";

import { Tone } from "@/enums";

interface ToneInputProps {
  value: Tone;
  setValue: (value: Tone) => void;
}

const ToneInput = ({ value, setValue }: ToneInputProps) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <label className="block text-sm font-medium">Tone</label>
      </div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as Tone)}
        className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
      >
        {Object.entries(Tone).map(([key, tone]) => (
          <option key={key} value={tone}>
            {tone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ToneInput;
