"use client";

import React, { useState, useRef, useEffect } from "react";
import { CategoryData } from "./categoryData";
import { categoryList } from "./categoryList";
import { generateSlug } from "@/app/utility/slugy";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Category = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setSelectedCategoryIndex(null);
  }, [pathname]);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSelectedCategoryIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSelectedCategoryIndex(null);
    }, 200);
  };

  // ✅ Precomputed version to avoid hydration mismatch
  const processedCategoryList = categoryList.map((category, index) => ({
    ...category,
    isLastTwo: index >= categoryList.length - 2,
    slug: generateSlug(category.name),
  }));

  const currentCategory =
    selectedCategoryIndex !== null ? processedCategoryList[selectedCategoryIndex] : null;

  return (
    <div className="relative w-full group z-40 overflow-visible">
      {/* Category List */}
      <ul className="flex items-center justify-center space-x-1 px-10 relative z-10">
        {processedCategoryList.map((category, index) => (
          <li
            key={`${category.slug}-${index}`}
            className={`relative min-h-[60px] flex items-center px-3 transition-all duration-300 hover:text-text20 ${
              category.isLastTwo ? "hover:bg-bg9 mb-1 hover:text-text20" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={`/${category.slug}`}>
              <span
                className={`flex items-center gap-3 justify-center text-sm font-medium cursor-pointer transition-all duration-300 ease-in ${
                  category.isLastTwo ? "hover:text-text20" : ""
                }`}
              >
                <span className="text-text20">•</span>
                {category.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Underline animation moved behind the category list */}
      <div className="absolute left-0 bottom-0 w-full h-1 bg-transparent z-0">
        <div className="bg-bg6 h-full w-0 group-hover:w-[calc(100%-5rem)] mx-10 transition-all ease-in-out duration-300" />
      </div>

      {/* Dropdown */}
      {currentCategory && (
        <div
          onMouseEnter={() => handleMouseEnter(selectedCategoryIndex!)}
          onMouseLeave={handleMouseLeave}
          className="absolute top-full left-0 w-full z-50"
        >
          <div className="bg-bg1 w-full shadow-md px-10">
            <CategoryData
              subcategories={currentCategory.subcategory}
              mainCategoryName={currentCategory.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};
