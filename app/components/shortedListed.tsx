"use client";

import React, { useState } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { IoGrid } from "react-icons/io5";

interface Props {
  view: string;
  setView: (value: string) => void;
}

export const ShortedListed: React.FC<Props> = ({ view, setView }) => {
  const [focused, setFocused] = useState({ short: false, show: false });

 
  const handleMobileToggle = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  return (
<div className="flex flex-col gap-4 bg-bg3 p-4 rounded-sm text-text18 w-full">
  {/* Mobile Toggle Text */}
  <p
    onClick={handleMobileToggle}
    className="md:hidden flex sm:text-center max-sm:text-start text-sm font-bold cursor-pointer"
  >
    View as{" "}
    <span className="text-blue-600">
      {view === "grid" ? "Grid" : "List"}
    </span>{" "}
    View
  </p>

  {/* Main Controls Container */}
  <div className="flex flex-col  lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
    {/* Left Group: Toggle + Sort + Items */}
    <div className="flex    gap-4    md:items-center items-center w-full">
      {/* Toggle Icons (Desktop only) */}
      <div className="hidden sm:flex items-center border-1 border-border3 bg-bg3 text-text16">
        <button
          onClick={() => setView("grid")}
          className={`p-2 transition-colors ${
            view === "grid" ? "bg-bg5 text-text16 font-semibold" : ""
          }`}
          title="Grid View"
        >
          <IoGrid size={18} />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 transition-colors border-l-1 border-border3 ${
            view === "list" ? "bg-bg5 text-text16 font-semibold" : ""
          }`}
          title="List View"
        >
          <BsGrid1X2Fill size={18} />
        </button>
      </div>

      {/* Sort By Dropdown */}
      <div className="flex items-center space-x-2 whitespace-nowrap">
        <label htmlFor="sort" className="text-sm font-medium">
          Sort By
        </label>
        <select
          id="sort"
          onFocus={() => setFocused((prev) => ({ ...prev, short: true }))}
          onBlur={() => setFocused((prev) => ({ ...prev, short: false }))}
          className={`text-sm border-2 px-3 py-1 focus:outline-none rounded-sm transition-shadow duration-200 ${
            focused.short
              ? "border-border9 shadow-md shadow-blue-custom"
              : "border-border4"
          }`}
        >
          <option value="Position">Position</option>
          <option value="Product-Name">Product Name</option>
          <option value="Price">Price</option>
        </select>
      </div>

      {/* Download Info */}
      <div className="flex items-center space-x-2 text-sm">
        <IoMdDownload />
        <span>2 Items</span>
      </div>
    </div>

    {/* Right Group: Show per page */}
    <div className="flex items-center  space-x-2 text-sm whitespace-nowrap w-full xl:w-auto">
      <span>Show</span>
      <select
        onFocus={() => setFocused((prev) => ({ ...prev, show: true }))}
        onBlur={() => setFocused((prev) => ({ ...prev, show: false }))}
        className={`border-2 px-3 py-1 rounded-sm focus:outline-none w-auto  transition-shadow duration-200 ${
          focused.show
            ? "border-border9 shadow-md shadow-blue-custom"
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
</div>

  );
};
