import React from "react";

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
    "New Arrivals"
  ];

  return (
    <div className="w-full">
      <ul className="flex items-center justify-center gap-x-1 px-10">
        {categories.map((category, index) => {
          const isLastTwo = index >= categories.length - 2;

          return (
            <li
              key={index}
              className={`flex items-stretch min-h-[60px] px-3  transition-all duration-300 hover:text-text20 ${
                isLastTwo ? "hover:bg-bg9" : ""
              }`}
            >
              {/* Bullet + Text together for hover area */}
              <span
                className={`flex items-center gap-1 text-sm font-medium cursor-pointer  transition-all duration-300 ease-in-out
              ${
                isLastTwo
                  ? "text-white hover:text-text20 "
                  : ""
              }
            `}
              >
                <span className="text-text20">•</span>
                {category}
              </span>
            </li>
          );
        })}
      </ul>
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
