import { SearchData } from "@/app/(home)/search/searchData";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdEye, IoMdStar } from "react-icons/io";

export default function GridSerachView() {
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {paginatedItems.length > 0 ? (
        paginatedItems.map((item, i) => (
          <div
            key={i}
            className="w-full border-2 group hover:border-orange-400 transition-colors duration-300 ease-in-out shadow-md border-border2 p-2 pb-5"
          >
            <div className="p-4 h-full relative overflow-hidden border rounded border-border1 group-hover:border-orange-400 transition">
              {/* Image */}
              <div>
                <img
                  src={item.img}
                  alt={item.content}
                  className="w-full h-full object-contain mb-2"
                />
              </div>

              {/* Content */}
              <p className="text-sm text-text-18 font-medium text-center mt-6">
                {item.content}
              </p>

              {/* Reviews */}
              <div className="flex items-center justify-center space-x-1 pt-10 text-lg">
                <div className="flex text-text6">
                  {[...Array(5)].map((_, idx) => (
                    <IoMdStar key={idx} />
                  ))}
                </div>
                <span className="text-blue-600 text-xs">
                  {item.reviewCount} Reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-18 justify-center pt-4">
                <p className="text-xl text-text6 text-center">
                  £{item.price}
                  <span className="text-sm text-text16 font-light pl-1">
                    (Incl. Vat)
                  </span>
                </p>
              </div>

              {/* Hover Actions */}
              <div className="absolute bottom-0 left-0 right-0  h-14 bg-orange-500 text-white flex items-center justify-around opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <button className="cursor-pointer">
                  <IoMdEye size={26} />
                </button>
                <button className="cursor-pointer">
                  <FaBasketShopping size={26} />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No matching items found.</p>
      )}
    </div>
  );
}
