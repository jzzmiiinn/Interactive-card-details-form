interface FormInputProps {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  maxLength?: number;
}

export const FormInput = ({
  label,
  placeholder,
  type,
  id,
  value,
  onChange,
  error,
  maxLength,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-[#21092f]"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className={`h-12 rounded-lg border px-4 text-sm text-[#21092f] outline-none placeholder:text-gray-400 focus:border-[#6448ff] focus:ring-1 focus:ring-[#6448ff]
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }
        `}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
