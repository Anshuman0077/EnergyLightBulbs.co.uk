import React, { useState } from "react";

interface InputFieldsProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string; 
}

export const Input = ({
  label,
  name,
  type = "text",
  required = false,
  value,
  onchange,
  placeholder,
  className = "", 
}: InputFieldsProps) => {
  const [focused, setfocused] = useState(false);

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="font-semibold text-sm">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onchange}
        placeholder={placeholder}
        onFocus={() => setfocused(true)}
        onBlur={() => setfocused(false)}
        className={`
          border px-3 py-2 rounded-xs transition-all duration-200 outline-none text-text18
          ${focused ? "border-border9 shadow-md shadow-blue-custom" : "border-border3"}
          ${className} 
        `}
      />
    </div>
  );
};
