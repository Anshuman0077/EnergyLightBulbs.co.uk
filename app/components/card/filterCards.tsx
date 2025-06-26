"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { CardContent } from "./cardData";
import { GrNext, GrPrevious } from "react-icons/gr";

// Filter card content based on selected tab
const filterData = (type: string) => {
  switch (type) {
    case "new":
      return CardContent.slice(0, 12);
    case "best":
      return CardContent.slice(2, 14);
    case "special":
      return CardContent.slice(1, 13);
    default:
      return CardContent;
  }
};

export const FilterData = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = 5;
  const filteredData = filterData(activeTab);
  const totalItems = filteredData.length;
  const maxIndex = totalItems - visibleItems; // now scrolls one by one

  // Auto-scroll one card at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTab, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <div className="w-full relative bg-bg1 px-18 py-8 overflow-hidden">
      {/* Tabs */}
      <div className="flex gap-3 border-b-4 mb-4">
        {["new", "best", "special"].map((type) => (
          <button
            key={type}
            onClick={() => handleTabChange(type)}
            className={`py-2 px-4 rounded font-bold ${
              activeTab === type
                ? "bg-bg15 text-text1"
                : "bg-bg4 text-text14 hover:bg-bg15"
            }`}
          >
            {type === "new"
              ? "NEW PRODUCTS"
              : type === "best"
              ? "BEST SELLING"
              : "SPECIAL OFFERS"}
          </button>
        ))}
      </div>

      {/* Prev/Next */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="hover:scale-110 transition-transform"
        >
          <GrPrevious size={24} />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="hover:scale-110 transition-transform"
        >
          <GrNext size={24} />
        </button>
      </div>

      {/* Card Slider */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(filteredData.length / visibleItems) * 100}%`,
            transform: `translateX(-${(100 / filteredData.length) * currentIndex}%)`,
          }}
        >
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="px-2"
              style={{ width: `${100 / filteredData.length}%` }}
            >
              <Card
                img={item.img}
                description={item.description}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
