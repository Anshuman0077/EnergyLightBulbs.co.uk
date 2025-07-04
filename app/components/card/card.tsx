import React from "react";

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
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full bg-bg1 hover:shadow-md transition-all duration-300 flex flex-col mx-auto">
      {/* Image Section */}
      <div className="w-full h-[220px] sm:h-[230px] md:h-[240px] lg:h-[250px] p-4 flex items-center justify-center">
        <img
          src={img}
          alt="Product"
          className="object-contain h-full w-full"
        />
      </div>

      {/* Description & Pricing */}
      <div className="flex flex-col justify-between px-4 pb-4 flex-grow">
        {/* Description */}
        <p className="text-sm font-medium text-text7 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Price Section */}
        <div className="flex justify-between text-xs flex-wrap">
          {/* New Price */}
          <div className="flex ">
            <span className="text-text6 font-semibold">{price}</span>
            <span className="text-text18">(Incl. VAT)</span>
          </div>

          {/* Old Price */}
          <div className="flex gap-1  items-start flex-wrap text-xs">
            <span className="line-through text-text6 font-semibold">{oldPrice}</span>
            <span className="text-text18">(Incl. VAT)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
