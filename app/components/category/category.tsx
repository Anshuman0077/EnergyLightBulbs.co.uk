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

  // Auto-close dropdown on route change
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
    }, 200); // smaller delay for smoother UX
  };

  const currentCategory =
    selectedCategoryIndex !== null ? categoryList[selectedCategoryIndex] : null;

  return (
    <div className="relative w-full group z-50">
      {/* Category List */}
      <ul className="flex items-center justify-center gap-x-1 px-10 z-10 relative">
        {categoryList.map((category, index) => {
          const isLastTwo = index >= categoryList.length - 2;
          const slug = generateSlug(category.name);

          return (
            <li
              key={`${slug}-${index}`} // ✅ fixed unique key using slug + index
              className={`relative min-h-[60px] px-3 transition-all duration-300 ${
                isLastTwo ? "hover:bg-bg9" : " "
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={`/${slug}`}>
                <span
                  className={`flex items-center gap-1 my-4 text-sm font-medium cursor-pointer transition-all duration-300 ease-in ${
                    isLastTwo ? "text-white " : "hover:text-text20"
                  }`}
                >
                  <span className="text-text20">•</span>
                  {category.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Underline animation */}
      <div className="px-10">
        <div className="h-1 w-0 bg-bg6 group-hover:w-full transition-all ease-in-out duration-300" />
      </div>

      {/* Dropdown */}
      {currentCategory && (
        <div
          onMouseEnter={() => handleMouseEnter(selectedCategoryIndex!)}
          onMouseLeave={handleMouseLeave}
          className="absolute top-full px-10 w-full z-50"
        >
          <div className="bg-bg1 w-full shadow-md ">
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
