import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdEye, IoMdStar } from "react-icons/io";
import { categories } from "../data/categories";

export const GridView = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-6">
      <div className="relative group border-2 border-gray-200 hover:border-orange-500  overflow-hidden transition-all duration-300 ease-in-out">
        {/* Product Image and Info */}
        <div className="flex flex-col items-center w-full h-full p-4">
          {/* <a href={`/${category.slug}/${subcategory.slug}/${sub.slug}`}> */}
            <img
              src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
              className="pt-4 w-full h-full pb-4  object-contain mb-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <span className="text-center text-text18 text-sm">
              GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
              Bulb Remover
            </span>

            {/* Review Stars */}
            <div className="flex items-center justify-center text-orange-400 text-lg mt-2 w-full py-4">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <span className="flex text-gray-500 pl-3 text-sm">1 Review</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-center text-text6 mt-2 mb-14 w-full space-x-1 pb-3">
              <span className="text-md font-bold ">£2.99</span>
              <span className="text-gray-400 font-light text-sm">
                (Incl. Vat)
              </span>
            </div>
          {/* </a> */}
        </div>

        {/* Hover Bottom Actions */}
        <div className="absolute bottom-0   left-0 right-0 h-14  bg-orange-500 flex justify-around items-center shadow-xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="cursor-pointer">
            <IoMdEye size={30} />
          </div>
          <div className="cursor-pointer">
            <FaBasketShopping size={30} />
          </div>
        </div>
      </div>

      <div className="relative group w-full border border-gray-200 hover:border-orange-500 hover:shadow-md cursor-pointer  overflow-hidden transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center p-4 ">
          {/* Product Image */}
          <img
            src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
            className="pt-4 w-full h-full pb-4 object-contain mb-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
            alt="GU10 Halogen"
          />

          {/* Product Info */}
          <div className="flex flex-col w-full text-end">
            <span className="text-sm text-text18 text-center">
              GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
              Bulb Remover
            </span>

            <div className="flex items-center justify-center text-text6  w-full space-x-1 py-4">
              <span className="font-bold text-md text-text6">£2.99</span>
              <span className="text-text17 font-light text-sm">
                (Incl. Vat)
              </span>
            </div>
          </div>
        </div>

        {/* Hover bottom action bar */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-orange-500 text-white flex items-center justify-around opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="cursor-pointer">
            <IoMdEye size={30} />
          </div>
          <div className="cursor-pointer">
            {/* <FaBasketShopping size={30} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
