"use client";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  disabled,
  onClick,
}: ButtonProps) => {
  const mandatoryStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";
  const defaultStyle =
    "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer";

  return (
    <button
      className={`${className ?? defaultStyle} ${mandatoryStyle}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
