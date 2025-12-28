export const TextInput = ({
  label,
  value,
  setValue,
  onBlur,
  placeholder,
}: {
  label?: string;
  value: string;
  setValue?: (value: string) => void;
  onBlur?: (value: string) => void;
  placeholder?: string;
}) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <label className="block text-sm font-medium">{label}</label>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        onBlur={(e) => onBlur && onBlur(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-[#d3c9b4] rounded-lg p-2 bg-white"
      />
    </div>
  );
};
