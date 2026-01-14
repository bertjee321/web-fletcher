"use client";

import Tooltip from "@/components/ui/Tooltip";

interface DesignBriefInputProps {
  value: string;
  setValue: (value: string) => void;
}

const MAX_LENGTH = 500;

const DesignBriefInput = ({ value, setValue }: DesignBriefInputProps) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <label className="block text-sm font-medium">Design Brief <span className="text-xs">(optional, but recommended)</span></label>
        <Tooltip
          content={
            <p className="text-sm text-gray-700">
              Provide additional context about your layout—what it's for, any specific features or information you'd like included, or any other details that help clarify your vision. This is optional and complements your style settings.
            </p>
          }
        />
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, MAX_LENGTH))}
        placeholder="E.g., 'Landing page for a SaaS productivity tool. Include a hero section, feature highlights, and pricing table.'"
        maxLength={MAX_LENGTH}
        className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white resize-none"
        rows={4}
      />
      <p className="text-xs text-[#6e6556] mt-1">
        {value.length} / {MAX_LENGTH}
      </p>
    </div>
  );
};

export default DesignBriefInput;