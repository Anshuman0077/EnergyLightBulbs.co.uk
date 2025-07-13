"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ResultShorting from "@/app/components/shorting/resultShorting";
import { SearchData } from "./searchData"; // adjust path as per your structure
import { IoMdEye, IoMdStar } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import GridSerachView from "@/app/components/layout/gridSerachView";
import ListSearchView from "@/app/components/layout/listSearchView";

export default function SearchPage() {
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
  const [view , setview] = useState("grid")

  return (
    <div className="md:p-6 w-full max-w-7xl min-h-screen px-6 mx-auto text-text18">
      <h2 className="text-2xl font-semibold mb-4 md:mt-6">
        Search Results for: "{query}"
      </h2>

      <div className="w-full pt-24 md:pl-40">
        <div className="mb-6">
          <ResultShorting
            withPagination={false}
            totalItems={matchedItems.length}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            view={view}
            setView={setview}
            
            />
        </div>
        <div>
          {view === 'grid' ? <GridSerachView /> : <ListSearchView />}
        </div>




        <div className="mt-6">
          <ResultShorting
            withPagination={true}
            totalItems={matchedItems.length}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}   
            view={view}
            setView={setview}    
            
            />
        </div>
      </div>
    </div>
  );
}
