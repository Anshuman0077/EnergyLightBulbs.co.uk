"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { categoryList } from "../category/categoryList";

import { IoSearch } from "react-icons/io5";

import { Input } from "../Input/Input";

export default function SearchBar() {
  const [query, setquery] = useState("");
  const [suggestions, setSuggestions] = useState<
    { imgName: string; img: string }[]
  >([]);
  const router = useRouter();

  const allItems = categoryList.flatMap((category) =>
    category.subcategory.flatMap((sub) =>
      sub.items.map((item) => ({
        imgName: item.imgName,
        img: item.img,
      }))
    )
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setquery(value);

    const filtered = allItems.filter((item) =>
      item.imgName.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     setSuggestions([]);
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleSelect = (value: string) => {
    setquery(value);
     setSuggestions([]);
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:px-0 max-sm:px-4 sm:px-4 space-x-3 flex justify-start md:justify-end py-0 bg-gray-600 md:bg-white transition-colors duration-300"
    >
      <div className="relative w-full max-w-xl md:mt-4 mt-0">
        <div className="sm:px-6 md:px-0 md:py-0 sm:py-2 max-sm:py-2 mr-4 ">
          <Input
            type="text"
            name="search"
            placeholder="Search entire store here..."
            className="w-full md:py-4 py-0 text-xs sm:rounded-tl-md sm:rounded-bl-md md:rounded-none max-sm:rounded-tl-md max-sm:rounded-bl-md border border-border4 text-text4 bg-white shadow-sm placeholder:font-bold focus:outline-none md:mx-4  sm:mx-0"
            label=""
            onchange={handleChange}
          />
          <IoSearch
            size={20}
            className="absolute sm:right-0 md:right-4 max-sm:right-0 top-1/2 text-text4  -translate-y-1/2 transition-colors duration-300"
          />
        </div>
      </div>

      {query && suggestions.length > 0 && (
        <div className="absolute z-50 text-text18 px-2 w-full max-w-xl flex flex-col mr-1 text-xs  shadow- mt-14 max-h-64 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-hide mx-auto ">
          <ul className=" bg-bg1 border w-full flex flex-col border-border2 shadow-lg">
            {suggestions.map((item, i) => (
              <li
                key={i}
                onClick={() => handleSelect(item.imgName)}
                className=" relative border-t  border-border2 flex items-center gap-2 px-4  py-1 hover:bg-gray-100 cursor-pointer"
              >
                <span>{item.imgName}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
