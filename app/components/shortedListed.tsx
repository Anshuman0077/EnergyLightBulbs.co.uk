"use client";

import React, { useState } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { GridView } from "./layout/gridView";
import { ListView } from "./layout/listView";

interface Props {
  view: string;
  setView: (value: string) => void;
}

export const ShortedListed: React.FC<Props> = ({ view, setView }) => {
  const [focused, setFocused] = useState({
    short: false,
    show: false,
  });

  // const [view, setView] = useState("grid"); //

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-text18 gap-4 bg-bg3 p-4 rounded-sm">
      {/* Left Side */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Grid Icon */}

        <div className="flex items-center border-2 border-border3 px-2 bg-bg2   text-text3 space-x-2">
          <button
            onClick={() => setView("grid")}
            className={`${view === "grid" ? "bg-bg1" : ""}`}
          >
            <IoGrid />
          </button>

          <button
            onClick={() => setView("list")}
            className={`border-l-2 border-border3 pl-2 py-1 ${
              view === "list" ? "bg-bg1" : ""
            }`}
          >
            <BsGrid1X2Fill />
          </button>
        </div>

        {/* Sort By */}
        <div className="flex items-center space-x-2">
          <span>Sort By</span>
          <select
            onFocus={() => setFocused((prev) => ({ ...prev, short: true }))}
            onBlur={() => setFocused((prev) => ({ ...prev, short: false }))}
            className={`border-2 px-2 py-1 rounded-sm transition-shadow duration-200 ${
              focused.short
                ? "border-border9 shadow-lg shadow-blue-custom"
                : "border-border4"
            }`}
          >
            <option value="Position">Position</option>
            <option value="Product-Name">Product Name</option>
            <option value="Price">Price</option>
          </select>
        </div>

        {/* Download Info */}
        <div className="flex items-center space-x-2 text-sm text-text18">
          <IoMdDownload />
          <span>2 Items</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2">
        <span>Show</span>
        <select
          onFocus={() => setFocused((prev) => ({ ...prev, show: true }))}
          onBlur={() => setFocused((prev) => ({ ...prev, show: false }))}
          className={`border-2 px-2 py-1 rounded-sm transition-shadow duration-200 ${
            focused.show
              ? "border-border9 shadow-lg shadow-blue-custom"
              : "border-border4"
          }`}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
        <span>per page</span>
      </div>
    </div>
  );
};
