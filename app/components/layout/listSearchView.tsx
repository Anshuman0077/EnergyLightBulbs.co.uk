"use client";

import React from "react";
import { SearchData } from "@/app/(home)/search/searchData";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdEye, IoMdStar } from "react-icons/io";

export default function ListSearchView() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const matchedItems = SearchData.filter((item) =>
    item.content.toLowerCase().includes(query)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = matchedItems.slice(startIndex, endIndex);
  return (
    <div className="space-y-4">
      {paginatedItems.length > 0 ? (
        paginatedItems.map((item, i) => (
          <div
            key={i}
            className="flex w-full border  h-full border-gray-200 rounded-md shadow-sm p-4"
          >
            {/* Image Section */}
            {/* <div className="h-[10em] w-full  "> */}
            <img
              src={item.img}
              alt={item.content}
              className="object-contain h-full md:max-w-[240px] sm:max-w-[180px]"
            />
            {/* </div> */}

            {/* Content Section */}
            {/* <div className="w-full flex items-start justify-between h-full"> */}
              {/* Title */}

              <div className="w-full pl-6  flex flex-col md:justify-start md:items-start  items-end">
                <p className="md:text-sm text-xs  font-medium text-gray-800 mb-2 w-full">
                  {item.content}
                </p>

                {/* Reviews Row */}
                <div className="flex w-full md:flex-row flex-col   items-start md:mt-10  md:gap-4">
                  <div className="flex text-orange-500 space-y-3">
                    {[...Array(5)].map((_, idx) => (
                      <IoMdStar key={idx}  />
                    ))}
                  </div>
                  <span className="text-blue-600 text-xs md:text-sm cursor-pointer hover:underline">
                    {item.reviewCount} Reviews
                  </span>
                  <span className="text-blue-600 text-xs md:text-sm cursor-pointer hover:underline">
                    Add Your Review
                  </span>
                </div>
              </div>
              {/* Price & Button */}
            {/* </div> */}
            <div className="w-full">
              <div className="flex  w-full flex-col items-end justify-between  h-full">
                <p className="md:text-lg text-md text-orange-600 md:mt-16 mt-8 font-semibold">
                  £{item.price}
                  <span className="md:text-sm text-xs text-gray-500 font-light pl-1">
                    (Incl. Vat)
                  </span>
                </p>

                <button className="bg-green-500  hover:bg-green-600 text-white md:text-sm text-xs px-4 py-1 rounded shadow-xl">
                  Add to basket
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-red-600 font-medium">
          No results found!
        </p>
      )}
    </div>
  );
}
