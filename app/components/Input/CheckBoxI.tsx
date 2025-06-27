// components/ui/CheckboxField.tsx
"use client";
import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({ label, name, checked, onChange }: CheckboxProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-5 h-5 accent-blue-600 rounded bg-bg6 transition-all duration-200 ease-in-out focus:outline-none ${
          focused
            ? "border border-border9 ring-2 shadow-blue-custom shadow-md"
            : "border-none border-border3"
        }`}
      />
      <label htmlFor={name} className="text-sm mt-0.5">{label}</label>
    </div>
  );
};
