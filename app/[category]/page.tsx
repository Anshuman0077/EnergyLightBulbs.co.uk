import { Breadcrumbs } from "../components/breadcrum/breadcrumbs";
import { categories } from "../components/data/categories";
import Link from "next/link";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find((cat) => cat.slug === params.category);

  if (!category) {
    return <h1>Category Not Found</h1>;
  }

  return (
    <div className="min-h-screen w-full bg-bg1 pb-40 py-8 flex flex-col justify-center">
      
      {/* <Link href={`/${category.slug}`} className="text-text18 hover:text-text6 transition-colors duration-300 text-sm px-26 pb-10 pt-6  ">Home</Link> */}
       {/* <Link href={`/${category.name}/${category.slug}`}>{category.name}</Link> */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-6">
           <Breadcrumbs/>

        </div>
       
        
        <h1 className="text-2xl font-bold text-black mb-6">{category.name}</h1>
         

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-64 border-2 rounded-md  ">
            <h2 className="text-lg font-extralight text-black border-b-2 border-border9  px-4 py-2">
              CATEGORIES
            </h2>
            <ul className="p-4 text-xs   text-black space-y-2 cursor-pointer">
              {category.subcategory.map((sub) => (
                <li key={sub.slug}>
                  <Link href={`/${category.slug}/${sub.slug}`}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-black mb-3 mt-2">
              {category.name.toUpperCase()}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-2 ">
              {category.subcategory.map((sub) => (
                <div
                  key={sub.slug}
                  className="border rounded-md pb-10 w-full flex flex-col  text-center items-sstart  hover:shadow-md cursor-pointer"
                >
                  
                  <img
                    src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/GU10_Halogen_Bulbs_4.jpg"
                    alt={sub.name}
                    className=" h-full w-full object-contain"
                  />
                  <div className="text-sm font-semibold text-black mt-4 hover:text-text6 transition-all duration-300 ease-in-out">
                    <Link href={`/${category.slug}/${sub.slug}`}>
                      {sub.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


