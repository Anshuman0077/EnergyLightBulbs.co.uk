"use client";

import React, { useEffect } from "react";

interface ToogleSideBtnProps {
  title: string;
  targetId: string;
}

export const ToggleBtn = ({ title, targetId }: ToogleSideBtnProps) => {
  useEffect(() => {
    const button = document.getElementById(`toggle-${targetId}`);
    const content = document.getElementById(targetId);

    const toggle = () => {
      content?.classList.toggle("hidden");
    };

    button?.addEventListener("click", toggle);

    return () => {
      button?.removeEventListener("click", toggle);
    };
  }, [targetId]);
  return (
    <div className="border-b-2 border-border9">
      <button
        id={`toggle-${targetId}`}
        className="w-full text-left text-lg font-semibold text-black px-4 py-2"
      >
        {title}
      </button>
    </div>
  );
};
