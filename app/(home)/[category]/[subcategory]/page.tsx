import { categories } from "@/app/components/data/categories";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/app/components/breadcrum/breadcrumbs";

export default function SubCategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const category = categories.find((cat) => cat.slug === params.category);
  const subcategory = category?.subcategory.find(
    (sub) => sub.slug === params.subcategory
  );

  if (!category || !subcategory) {
    return <h1 className="text-center text-xl font-semibold">Not Found</h1>;
  }

  return (
    <div className="min-h-screen w-full bg-bg1 pb-40 py-8">
      
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-6">
          <Breadcrumbs/>
        </div>
        
        <h1 className="text-2xl font-bold text-black mb-4">
          {subcategory.name}
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 border-2 rounded-md">
            <h2 className="text-lg font-semibold text-black border-b-2 border-border9 px-4 py-2">
              CATEGORIES
            </h2>
            <div className="p-4 text-sm  text-text18 flex flex-col space-y-1 cursor-pointer">
              {subcategory.items.map((sub, index) => (
                <Link
                  key={`${sub.slug}-${index}`}
                  href={`/${category.slug}/${subcategory.slug}/${sub.slug}`}
                >
                  {sub.imgName}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold text-black mb-4 mt-4">
              {subcategory.name.toUpperCase()}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
