"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { CardContent } from "./cardData";
import { GrNext, GrPrevious } from "react-icons/gr";

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

  const filteredData = filterData(activeTab);
  const totalItems = filteredData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalItems - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [activeTab, totalItems]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= totalItems - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalItems - 1 : prev - 1));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <div className="w-full relative bg-bg1  py-8 overflow-hidden">
      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide md:overflow-visible mb-4 border-b-0 md:border-b-4">
        {["new", "best", "special"].map((type) => (
          <button
            key={type}
            onClick={() => handleTabChange(type)}
            className={`py-2 px-4 whitespace-nowrap text-xs md:text-sm rounded font-bold shrink-0 transition-colors duration-200 ${
              activeTab === type
                ? "bg-bg15 text-text1"
                : "bg-bg4 text-text14 hover:bg-bg15 hover:text-text1"
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

      {/* Navigation Buttons */}
      <div className="absolute left-2 md:left-0  sm:left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="hover:scale-110 transition-transform"
        >
          <GrPrevious size={20} />
        </button>
      </div>
      <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="hover:scale-110 transition-transform"
        >
          <GrNext size={20} />
        </button>
      </div>

      {/* Card Slider */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(100 / filteredData.length) * currentIndex}%)`,
          }}
        >
          {filteredData.map((item, index) => (
            <div key={index} className="px-2 shrink-0 card-wrapper">
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
