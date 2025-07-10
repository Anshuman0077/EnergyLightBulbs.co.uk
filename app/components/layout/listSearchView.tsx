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
            className="flex w-full border border-gray-200 rounded-md shadow-sm p-4"
          >
            {/* Image Section */}
            <div className=" flex ">
              <img
                src={item.img}
                alt={item.content}
                className="w-full  h-auto object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="w-full pl-6 flex flex-col justify-start">
              {/* Title */}
              <p className="text-base font-medium text-gray-800 mb-2">
                {item.content}
              </p>

              {/* Reviews Row */}
              <div className="flex items-center gap-3 text-sm mb-2">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, idx) => (
                    <IoMdStar key={idx} />
                  ))}
                </div>
                <span className="text-blue-600">
                  {item.reviewCount} Reviews
                </span>
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Add Your Review
                </span>
              </div>

              {/* Price & Button */}
              <div className="flex flex-col justify-start items-end w-full ">
                <div className="flex  flex-col items-start justify-start top-0 bottom-0 ">
                    <p className="text-lg text-orange-600 font-semibold">
                  £{item.price}
                  <span className="text-sm text-gray-500 font-light pl-1">
                    (Incl. Vat)
                  </span>
                </p>

                <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded shadow">
                  Add to basket
                </button>

                </div>
                
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
