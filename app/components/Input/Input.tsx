import React, { useState } from "react";

interface InputFieldsProps {
  label: string;
  name: string;
  type?: string;
  id?: string;
  ref?:  React.Ref<HTMLInputElement> | undefined;
  defaultValue?: string;
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
  id,
  defaultValue,
  required = false,
  ref,
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
        id={id}
        ref={ref}
        name={name}
        defaultValue={defaultValue}
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
