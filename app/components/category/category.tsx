import React from "react";
import { CategoryData } from "./categoryData";

export const Category = () => {
  const categories = [
    "Light Bulbs",
    "LED Light Bulbs",
    "Lighting",
    "Vintage Collection",
    "Outdoor Lighting",
    "Pendants & Shades",
    "Switches & Shockets",
    "Commercial Lighting",
    "Chandeliers",
    "Electrical Goods",
    "Shop BY filament",
    "New Arrivals",
  ];

  return (
<div className="relative w-full group">
  {/* Category List */}
  <ul className="flex items-center justify-center gap-x-1 px-10  z-10 relative">
    {categories.map((category, index) => {
      const isLastTwo = index >= categories.length - 2;

      return (
        <li
          key={index}
          className={`flex items-stretch min-h-[60px] px-3 transition-all duration-300 hover:text-text20 ${
            isLastTwo ? "hover:bg-bg9" : ""
          }`}
        >
          <span
            className={`flex items-center gap-1 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out ${
              isLastTwo ? "text-white hover:text-text20" : ""
            }`}
          >
            <span className="text-text20">•</span>
            {category}
          </span>
        </li>
      );
    })}
  </ul>

  <div className="px-10">
    <div className="h-1 w-0 bg-bg6 group-hover:w-full transition-all  ease-in-out duration-300"></div>
  </div>

  {/* Floating Component */}
  <div className="absolute top-full px-10 w-full   z-20 hidden group-hover:block">
    <div className="bg-bg1 w-full shadow-md">
       <CategoryData />

    </div>
   
  </div>
</div>
  );
  return (
    <div className="flex">
      {/* <ul className="list-none flex items-center justify-center space-x-3   ">
        <span className="text-text20">•</span>
        <li>Light Bulbs</li>
        <span className="text-text20">•</span>
        <li>LED Light Bulbs</li>
        <span className="text-text20">•</span>
        <li>Lighting</li>
        <span className="text-text20">•</span>
        <li>Vintage Collection</li>
        <span className="text-text20">•</span>
        <li>Outdoor Lighting</li>
        <span className="text-text20">•</span>

        <li>Pendants & Shades</li>
        <span className="text-text20">•</span>
        <li>Switches & Shockets</li>
        <span className="text-text20">•</span>
        <li>Commercial Lighting</li>
        <span className="text-text20">•</span>
        <li>Chandeliers</li>
        <span className="text-text20">•</span>
        <li>Electrical Goods</li>
        <span className="text-text20">•</span>
        <li>Shop By Fitment</li>
        <span className="text-text20">•</span>
        <li>New Arrivals</li>
      </ul> */}
    </div>
  );
};
