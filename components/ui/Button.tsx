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
  const defaultStyle =
    "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600";

  return (
    <button
      className={className ?? defaultStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
