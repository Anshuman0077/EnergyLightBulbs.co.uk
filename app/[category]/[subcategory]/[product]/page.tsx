"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { categories } from "@/app/components/data/categories";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { IoMdStar, IoMdCart, IoMdEye } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";

export default function ProductPage() {
  const [focused, setFocused] = useState(false);
  const params = useParams();

  const category = categories.find((cat) => cat.slug === params.category);
  const subcategory = category?.subcategory.find(
    (sub) => sub.slug === params.subcategory
  );
  const product = subcategory?.items.find(
    (item) => item.slug === params.product
  );

  if (!category || !subcategory || !product) {
    return (
      <h1 className="text-center text-xl font-semibold pt-10">
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen w-full bg-bg1">
      <h3 className="text-2xl font-semibold text-text18 px-6 py-4">
        {product.imgName}
      </h3>

      <div className="max-w-screen-xl mx-auto px-14 pl-20 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center text-text18 gap-4 bg-bg3 p-4 rounded-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center border-2 border-border3 px-2 py-1 rounded-sm text-text3 space-x-2">
              <IoGrid />
              <div className="border-l-2 border-border3 pl-2">
                <BsGrid1X2Fill />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span>Sort By</span>
              <select
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`border-2 px-2 py-1 rounded-sm transition-shadow duration-200 ${
                  focused
                    ? "border-border9 shadow-lg shadow-blue-custom"
                    : "border-border4"
                }`}
              >
                <option value="Position">Position</option>
                <option value="Product-Name">Product Name</option>
                <option value="Price">Price</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 text-sm text-text18">
              <IoMdDownload />
              <span>2 Items</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span>Show</span>
            <select className="border border-border4 px-2 py-1 rounded-sm">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
            <span>per page</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-6">
          <div className="relative group border-2 border-gray-200 hover:border-orange-500  overflow-hidden transition-all duration-300 ease-in-out">
            {/* Product Image and Info */}
            <div className="flex flex-col items-center p-4">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
                className="pt-4 w-full h-[150px] object-contain mb-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
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
                <span className="flex text-gray-500 pl-3 text-sm">
                  1 Review
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-center text-black mt-2 w-full space-x-1 pb-3">
                <span className="text-md font-bold">£2.99</span>
                <span className="text-gray-400 font-light text-sm">
                  (Incl. Vat)
                </span>
              </div>
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

    <div className="relative group w-full border border-gray-200 hover:border-orange-500 hover:shadow-md cursor-pointer rounded-md overflow-hidden transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-center p-4">
        {/* Product Image */}
        <img
          src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
          className="pt-4 w-full h-[150px] object-contain mb-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
          alt="GU10 Halogen"
        />

        {/* Product Info */}
        <div className="flex flex-col w-full text-end">
          <span className="text-sm text-text18 text-center">
            GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool Bulb Remover
          </span>

          <div className="flex items-center justify-center text-text6 mt-30 w-full space-x-1 py-4">
            <span className="font-bold text-md">£2.99</span>
            <span className="text-text17 font-light text-sm">(Incl. Vat)</span>
          </div>
        </div>
      </div>

      {/* Hover bottom action bar */}
      <div className="absolute bottom-14 left-0 right-0 h-14 bg-orange-500 text-white flex items-center justify-around opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <div className="cursor-pointer">
          <IoMdEye size={30} />
        </div>
        <div className="cursor-pointer">
         <FaBasketShopping size={30} />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
