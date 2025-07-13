"use client";

import React, { useState } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Select } from "../Input/Select";

interface Props {
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  withPagination?: boolean;
  view: string;
  setView: (value: string) => void;
}

export default function ResultShorting({
  totalItems = 1573,
  itemsPerPage = 12,
  currentPage = 1,
  onPageChange = () => {},
  withPagination = false,
  view,
  setView,
}: Props) {
  const [formData, setFormData] = useState({
    itemsPerPage: itemsPerPage.toString(),
    sortBy: "Relevance",
  });

  const totalPages = Math.ceil(totalItems / parseInt(formData.itemsPerPage));

  const handleMobileToggle = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const startItem = (currentPage - 1) * parseInt(formData.itemsPerPage) + 1;
  const endItem = Math.min(
    currentPage * parseInt(formData.itemsPerPage),
    totalItems
  );

  const generatePageNumbers = () => {
    const maxPagesToShow = 5;
    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(start + maxPagesToShow - 1, totalPages);
    if (end - start < maxPagesToShow - 1) {
      start = Math.max(end - maxPagesToShow + 1, 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="w-full bg-bg3 rounded-sm text-text18 flex flex-col gap-4">
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        {/* View Toggle */}
        <div className="flex mx-3 items-center gap-2">
          <p
            onClick={handleMobileToggle}
            className="md:hidden flex sm:text-center max-sm:text-start text-sm font-bold cursor-pointer"
          >
            View as {"    "}
            <span className="text-blue-600 pl-1">
              {view === "grid" ? "Grid" : "List"}
            </span>{" "}
            {/* View */}
          </p>
          <div className="hidden md:flex items-center border-1 border-border3 bg-bg3 text-text16">
            <button
              onClick={() => setView("grid")}
              className={`p-2 transition-colors ${
                view === "grid" ? "bg-bg5 text-text16 font-semibold" : ""
              }`}
              title="GridSearchView"
            >
              <IoGrid size={18} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 transition-colors border-l-1 border-border3 ${
                view === "list" ? "bg-bg5 text-text16 font-semibold" : ""
              }`}
              title="ListSearchView"
            >
              <BsGrid1X2Fill size={18} />
            </button>
          </div>
             
          <span className="text-sm ">
            Items {startItem}-{endItem} of {totalItems}
          </span>

          {/* Pagination Buttons */}
          {withPagination && (
            <div className="flex items-center justify-center gap-2 ml-4">
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageClick(currentPage - 1)}
                  className="hover:bg-white hover:px-2 px-2 hover:rounded  hover:text-orange-500  cursor-pointer"
                >
                  <MdNavigateBefore size={20} />
                </button>
              )}

              {generatePageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`py-2.5 px-2 text-sm ${
                    currentPage === page
                      ? "bg-gray-300 text-black"
                      : "hover:bg-orange-500    hover:text-white text-blue-600"
                  }`}
                >
                  {page}
                </button>
              ))}

              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageClick(currentPage + 1)}
                  className="hover:bg-white hover:px-2 px-2 hover:rounded  hover:text-orange-500  cursor-pointer"
                >
                  <MdNavigateNext size={20} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right Filters */}
        <div className="flex flex-wrap py-1.5 items-center gap-4 justify-end w-full md:w-auto">
          <div className="flex items-center gap-2">
            <label htmlFor="itemsPerPage" className="text-sm font-medium">
              Show
            </label>
            <Select
              name="itemsPerPage"
              value={formData.itemsPerPage}
              options={[
                { value: "12", label: "12" },
                { value: "24", label: "24" },
                { value: "36", label: "36" },
              ]}
              onchange={handleChange}
              label=""
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-sm font-medium">
              Sort By
            </label>
            <Select
              name="sortBy"
              value={formData.sortBy}
              options={[
                { value: "Relevance", label: "Relevance" },
                { value: "Product Name", label: "Product Name" },
                { value: "Price", label: "Price" },
              ]}
              onchange={handleChange}
              label=""
            />
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded hover:bg-gray-200 transition-colors">
              <IoMdDownload size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
