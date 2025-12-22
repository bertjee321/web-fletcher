interface LoadingSpinnerProps {
  text?: string;
}

export const LoadingSpinner = ({ text }: LoadingSpinnerProps) => {
  return (
    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-amber-600"></div>
        <p className="text-amber-800 font-medium">{text ?? "Loading..."}</p>
      </div>
    </div>
  );
};
