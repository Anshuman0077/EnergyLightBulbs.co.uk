import React from "react";
import { SubCategory } from "./categoryList";

interface Props {
  subcategories: SubCategory[];
  mainCategoryName: string;
}

export const CategoryData: React.FC<Props> = ({ subcategories, mainCategoryName }) => {
  return (
    <div className="w-full grid grid-cols-5 auto-rows-auto gap-x-3 px-4 py-2 text-black">
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
            <h3 className="font-semibold text-md border-b py-2 mb-2">{sub.name}</h3>
            <div className="flex flex-col gap-3">
              {sub.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 transition-all duration-500 ease-in-out hover:translate-x-2 text-text13 hover:text-text20 hover:opacity-80"
                >
                  <img
                    src={item.img}
                    alt={item.imgName}
                    className="w-14 h-14 border p-1 border-border7 object-contain rounded transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <span className="text-xs transition-all duration-500 ease-in-out">
                    {item.imgName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
