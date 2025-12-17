'use client';

import Tooltip from "@/components/ui/Tooltip";
import { Font } from "@/lib/enums";
import { useState, useRef, useEffect } from "react";

interface FontInputProps {
  value: Font;
  setValue: (value: Font) => void;
}

//   Inter = "Inter", // Modern, highly legible sans-serif font excellent for interfaces
//   Roboto = "Roboto", // Google's versatile font designed for digital screens
//   OpenSans = "Open Sans", // Friendly, open sans-serif with excellent readability
//   Poppins = "Poppins", // Geometric sans-serif with a contemporary, rounded feel
//   MontSerrat = "Montserrat", // Urban, modern font with strong presence
//   JetBrainsMono = "JetBrains Mono", // Monospace font designed for developers
//   FiraSans = "Fira Sans", // Versatile, techy sans-serif font

const FontInput = ({ value, setValue }: FontInputProps) => {


  return (
    <div>
    <div className="flex items-center gap-1 mb-1">
      <label className="block text-sm font-medium">Font</label>
      <Tooltip
        content={
        <ul className="text-sm text-gray-700 space-y-1">
          <li style={{ fontFamily: 'Inter' }}>
            <strong>Inter</strong> - Modern, highly legible sans-serif font excellent for interfaces
          </li>
          <li style={{ fontFamily: 'Roboto' }}>
            <strong>Roboto</strong> - Google's versatile font designed for digital screens
          </li>
          <li style={{ fontFamily: 'Open Sans' }}>
            <strong>Open Sans</strong> - Friendly, open sans-serif with excellent readability
          </li>
          <li style={{ fontFamily: 'Poppins' }}>
            <strong>Poppins</strong> - Geometric sans-serif with a contemporary, rounded feel
          </li>
          <li style={{ fontFamily: 'Montserrat' }}>
            <strong>Montserrat</strong> - Urban, modern font with strong presence
          </li>
          <li style={{ fontFamily: 'JetBrains Mono' }}>
            <strong>JetBrains Mono</strong> - Monospace font designed for developers
          </li>
          <li style={{ fontFamily: 'Fira Sans' }}>
            <strong>Fira Sans</strong> - Versatile, techy sans-serif font
          </li>
        </ul>
        }
      />
    </div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as Font)}
        className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
      >
        {Object.entries(Font).map(([key, font]) => (
          <option key={key} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontInput;