import React from "react";
import { categories } from "../data/categories";

export interface CardProps {
  img: string;
  description: string;
  price: string;
  oldPrice: string;
}

export const Card: React.FC<CardProps> = ({
  img,
  description,
  price,
  oldPrice,
}) => {
  return (
    <div className="w-[250x] bg-bg1 overflow-hidden shadow-none  items-center flex flex-col justify-center  transition-shadow hover:side-Only ">
      {/* Image */}
      <div className="h-[250px] mx-14">
        <img src={img} alt="Product" className="object-contain w-full   h-full" />
      </div>

      {/* Description */}
      <div className="px-3 py-3  pt-10">
        <p className="text-sm font-medium text-text7">{description}</p>

        {/* Price */}
        <div className="mt-10 flex justify-between text-xs ">
          <div className="flex gap-1">
            <span className="text-text6 font-semibold">{price}</span>
            <span className="text-text18">(Incl. VAT)</span>
          </div>
          <div className="flex gap-1">
            <span className="line-through text-text6 font-semibold">
              {oldPrice}
            </span>
            <span className="text-text18">(Incl. VAT)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
