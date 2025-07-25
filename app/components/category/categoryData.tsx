import React from "react";
import { SubCategory } from "./categoryList";
import { generateSlug } from "@/app/utility/slugy";
import Link from "next/link";

interface Props {
  subcategories: SubCategory[];
  mainCategoryName: string;
}

export const CategoryData: React.FC<Props> = ({ subcategories, mainCategoryName }) => {


  
  return (
    <div className="w-full  max-w-7xl px-6 mx-auto grid grid-cols-1 auto-rows-auto gap-x-3  py-2 text-black">
      {subcategories.map((sub, index) => {
        const isFirstMainCategory = mainCategoryName === "Light Bulbs";

        const positionClass = isFirstMainCategory
          ? index === subcategories.length - 3
            ? "col-start-3 row-start-2"
            : index === subcategories.length - 2
            ? "col-start-4 row-start-2"
            : index === subcategories.length - 1
            ? "col-start-5 row-start-2"
            : ""
          : "";

        return (
          <div key={index} className={`flex flex-col mb-4 ${positionClass}`}>
            <Link href={`/${generateSlug(mainCategoryName)}/${generateSlug(sub.name)}`} className="font-semibold text-md border-b py-2 mb-2 transition-all duration-500 ease-in-out hover:translate-x-2 text-text13 hover:text-text20 hover:opacity-80">{sub.name}</Link>
            <div className="flex flex-col gap-3">
              {sub.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 transition-all duration-500 ease-in-out hover:translate-x-2 text-text13 hover:text-text20 hover:opacity-80"
                >
                  <img
                    src={item.img}
                    alt={item.imgName}
                    className="w-14 h-14 border  border-border7 object-contain rounded transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <Link href={`/${generateSlug(mainCategoryName)}/${generateSlug(sub.name)}/${generateSlug(item.imgName)}`}  className="text-xs transition-all duration-500 ease-in-out">
                    {item.imgName}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
