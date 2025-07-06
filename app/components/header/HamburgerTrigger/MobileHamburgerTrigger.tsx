"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { categoryList, SubCategory } from "../../category/categoryList";
import { generateSlug } from "@/app/utility/slugy";
import { usePathname } from "next/navigation";

interface MobileHamburgerTriggerProps {
  isSheetOpen: boolean;
  setIsSheetOpen: (open: boolean) => void;
  subcategories: SubCategory[];
  mainCategoryName: string;
}

const MobileHamburgerTrigger: React.FC<MobileHamburgerTriggerProps> = ({
  isSheetOpen,
  setIsSheetOpen,
  subcategories,
  mainCategoryName,
}) => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const processedCategoryList = categoryList.map((category) => ({
    ...category,
    slug: generateSlug(category.name),
  }));

  useEffect(() => {
    setActiveIndex(null);
  }, [pathname]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className={`fixed inset-0 z-[999] bg-transparent bg-opacity-40 transition-opacity duration-300 ${
        isSheetOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setIsSheetOpen(false)}
    >
      <div
        className={`fixed top-0 left-0 h-screen w-[100%] max-w-xs bg-white shadow-lg transform transition-transform duration-300 ${
          isSheetOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable content */}
        <div className="h-full w-full overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-hide">
          <nav className="flex flex-col">
            {processedCategoryList.map((category, index) => (
              <div key={`category-${category.slug}-${index}`}>
                {/* Accordion Header */}
                <div
                  className="accordion-trigger flex items-center justify-between cursor-pointer text-md font-semibold text-white bg-bg14 hover:bg-bg9 px-3 py-4 hover:text-black border-b"
                  onClick={() => toggleAccordion(index)}
                >
                  <Link href={`/${category.slug}`}>{category.name}</Link>
                  <span className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-500 ease-in-out  ${
                    activeIndex === index
                      ? "max-h-[2000px] py-4"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="pl-3 pr-2 flex flex-col gap-4">
                    {category.subcategory.map((sub, subIndex) => (
                      <div key={`${category.slug}-${sub.name}-${subIndex}`}>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 border-b pb-1">
                          <Link
                            href={`/${generateSlug(mainCategoryName)}/${generateSlug(sub.name)}`}
                            onClick={() => setIsSheetOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </h4>

                        <ul className="grid grid-cols-1 gap-2">
                          {sub.items.map((item, itemIndex) => (
                            <li
                              key={`${category.slug}-${sub.name}-${item.imgName}-${itemIndex}`}
                              className="flex items-center gap-2"
                            >
                              <Link
                                href={`/${generateSlug(
                                  mainCategoryName
                                )}/${generateSlug(sub.name)}/${generateSlug(
                                  item.imgName
                                )}`}
                                onClick={() => setIsSheetOpen(false)}
                                className="flex items-center gap-2"
                              >
                                <img
                                  src={item.img}
                                  alt={item.imgName}
                                  className="w-8 h-8 object-contain"
                                />
                                <span className="text-xs text-text14">
                                  {item.imgName}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MobileHamburgerTrigger;
