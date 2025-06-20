"use client";

import React, { useState } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { IoGrid } from "react-icons/io5";

export const ShortedListed = () => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-text18 gap-4 bg-bg3 p-4 rounded-sm">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center border-2 border-border3 px-2 py-1 rounded-sm text-text3 space-x-2">
          <IoGrid />
          <div className="border-l-2 border-border3 pl-2">
            <BsGrid1X2Fill />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span>Sort By</span>
          <select
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`border-2 px-2 py-1 rounded-sm transition-shadow duration-200 ${
              focused
                ? "border-border9 shadow-lg shadow-blue-custom"
                : "border-border4"
            }`}
          >
            <option value="Position">Position</option>
            <option value="Product-Name">Product Name</option>
            <option value="Price">Price</option>
          </select>
        </div>

        <div className="flex items-center space-x-2 text-sm text-text18">
          <IoMdDownload />
          <span>2 Items</span>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span>Show</span>
        <select className="border border-border4 px-2 py-1 rounded-sm">
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
        <span>per page</span>
      </div>
    </div>
  );
};
