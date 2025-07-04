"use client";

import { useParams } from "next/navigation";
import { categories } from "@/app/components/data/categories";
import { Breadcrumbs } from "@/app/components/breadcrum/breadcrumbs";
import Link from "next/link";
import { ToggleBtn } from "@/app/components/toggleBtn";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params?.category as string;

  const category = categories.find((cat) => cat.slug === categorySlug);

  if (!category) {
    return <h1 className="text-center text-red-500 text-xl">Category Not Found</h1>;
  }

  return (
    <section className="min-h-screen w-full bg-bg1 pb-40 md:py-8 py-4 flex flex-col justify-start">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        {/* Breadcrumb */}
        <div className="md:mb-6 mb-4">
          <Breadcrumbs />
        </div>

        {/* Category Heading */}
        <h1 className="text-2xl font-bold text-black md:mb-6 mb-4">{category.name}</h1>

        <div className="flex flex-col md:flex-row md:gap-8 gap-4">
          {/* Sidebar */}
          <aside className="w-full md:w-64 md:h-72 border-2 rounded-md">

            <ToggleBtn title="CATEGORIES"  targetId="sidebarContent"/>

            {/* Sidebar Content */}
            <div id="sidebarContent" className="hidden md:block">
              <ul className="p-4 space-y-2 text-xs text-black">
                {category.subcategory.map((sub) => (
                  <li key={sub.slug}>
                    <Link href={`/${category.slug}/${sub.slug}`}>
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h2 className="text-2xl font-bold text-black">{category.name.toUpperCase()}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 md:gap-y-6 mt-4 gap-y-4 md:pt-2">
              {category.subcategory.map((sub) => (
                <div
                  key={sub.slug}
                  className="border rounded-md pb-6 w-full flex flex-col items-center text-center hover:shadow-md cursor-pointer transition-shadow duration-300"
                >
                  <img
                    src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/GU10_Halogen_Bulbs_4.jpg"
                    alt={sub.name}
                    className="w-full h-40 object-contain rounded-t"
                  />
                  <div className="text-sm font-semibold text-black mt-4 hover:text-text6 transition-colors duration-300">
                    <Link href={`/${category.slug}/${sub.slug}`}>
                      {sub.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
