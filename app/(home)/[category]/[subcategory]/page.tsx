"use client";

import { useParams } from "next/navigation";
import { categories } from "@/app/components/data/categories";
import { Breadcrumbs } from "@/app/components/breadcrum/breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { ToggleBtn } from "@/app/components/toggleBtn";

export default function SubCategoryPage() {
  const params = useParams();
  const category = categories.find((cat) => cat.slug === params?.category);
  const subcategory = category?.subcategory.find(
    (sub) => sub.slug === params?.subcategory
  );

  if (!category || !subcategory) {
    return <h1 className="text-center text-xl font-semibold">Not Found</h1>;
  }

  return (
    <div className="min-h-screen w-full bg-bg1 pb-40 md:py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="md:mb-6">
          <Breadcrumbs />
        </div>

        {/* Subcategory Heading */}
        <h1 className="text-2xl font-bold text-black md:mb-6 mb-4">
          {subcategory.name}
        </h1>

        <div className="flex flex-col md:flex-row md:gap-8 gap-4">
          {/* Sidebar */}
          <aside className="w-full md:w-64 md:h-fit border-2 rounded-md">
            {/* Toggle for mobile */}
            <ToggleBtn title="CATEGORIES" targetId="subSidebarContent" />

            {/* Sidebar List */}
            <div id="subSidebarContent" className="hidden md:block">
              <div className="p-4 text-sm text-text18 flex flex-col space-y-2">
                {subcategory.items.map((item, index) => (
                  <Link
                    key={`${item.slug}-${index}`}
                    href={`/${category.slug}/${subcategory.slug}/${item.slug}`}
                  >
                    {item.imgName}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h2 className="text-xl font-bold text-black mb-4 mt-2">
              {subcategory.name.toUpperCase()}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 pt-2">
              {subcategory.items.map((item, index) => (
                <Link
                  key={item.slug + index}
                  href={`/${category.slug}/${subcategory.slug}/${item.slug}`}
                  className="border rounded-md pb-8 py-4 w-full flex flex-col items-center text-center px-4 hover:shadow-md transition cursor-pointer"
                >
                  <Image
                    src={item.img}
                    alt={item.imgName}
                    width={100}
                    height={100}
                    className="object-contain h-[100px] w-full mb-2 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="text-sm font-semibold text-text18 mt-10 hover:text-text6 transition-all duration-300 ease-in-out">
                    {item.imgName}
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
