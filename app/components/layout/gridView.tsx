import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdEye, IoMdStar } from "react-icons/io";

export const GridView = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 pt-6">
      {/* Product Card */}
      <div className="relative group border border-gray-200 hover:border-orange-500 pb-8 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center w-full h-full p-4">
          <img
            src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
            alt="GU10 Halogen Bulb Remover"
            className="w-full h-40 object-contain mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          <span className="text-center text-text18 text-sm leading-5 ">
            GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
          </span>

          {/* Star Ratings */}
          <div className="flex items-center justify-center text-orange-400 text-lg mt-2">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <span className="text-gray-500 text-sm pl-2">1 Review</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-center mt-2 mb-16 text-sm space-x-1">
            <span className="font-bold text-text6">£2.99</span>
            <span className="text-gray-400 font-light">(Incl. Vat)</span>
          </div>
        </div>

        {/* Hover Action Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-orange-500 text-white flex items-center justify-around opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <button className="cursor-pointer">
            <IoMdEye size={26} />
          </button>
          <button className="cursor-pointer">
            <FaBasketShopping size={26} />
          </button>
        </div>
      </div>

      {/* Product Card 2 */}
      <div className="relative group border border-gray-200 hover:border-orange-500 pb-8 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center w-full h-full p-4">
          <img
            src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
            alt="GU10 Halogen Bulb Remover"
            className="w-full h-40 object-contain mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          <span className="text-center text-text18 text-sm leading-5">
            GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
          </span>

          {/* Star Ratings */}
          {/* <div className="flex items-center justify-center text-orange-400 text-lg mt-2">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <span className="text-gray-500 text-sm pl-2">1 Review</span>
      </div> */}

          {/* Price */}
          <div className="flex items-center justify-center mt-8  mb-16 text-sm space-x-1">
            <span className="font-bold text-text6">£2.99</span>
            <span className="text-gray-400 font-light">(Incl. Vat)</span>
          </div>
        </div>

        {/* Hover Action Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-orange-500 text-white flex items-center justify-around opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <button className="cursor-pointer">
            <IoMdEye size={26} />
          </button>
          <button className="cursor-pointer">
            <FaBasketShopping size={26} />
          </button>
        </div>
      </div>
    </section>
  );
};
