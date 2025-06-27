// app/components/Input/Select.tsx
"use client";

import React, { useState } from "react";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  required?: boolean;
  onchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  label,
  name,
  value,
  options,
  required = false,
  onchange,
}: SelectProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onchange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`border px-3 py-2 rounded focus:outline-none transition-shadow duration-200 ${
          focused
            ? "border-border9 shadow-md shadow-blue-custom"
            : "border-border3"
        }`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
