"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { categories } from "@/app/components/data/categories";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { IoMdStar, IoMdCart, IoMdEye } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { ShortedListed } from "@/app/components/shortedListed";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();

  const category = categories.find((cat) => cat.slug === params.category);
  const subcategory = category?.subcategory.find(
    (sub) => sub.slug === params.subcategory
  );
  const product = subcategory?.items.find(
    (item) => item.slug === params.product
  );

  if (!category || !subcategory || !product) {
    return (
      <h1 className="text-center text-xl font-semibold pt-10">
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen w-full bg-bg1">
      <h3 className="text-2xl font-semibold text-text18 px-6  mt-10">
        {product.imgName}
      </h3>

      <div className="max-w-screen-xl mx-auto px-14 pl-20 py-16">
        <ShortedListed />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-6">
          <div className="relative group border-2 border-gray-200 hover:border-orange-500  overflow-hidden transition-all duration-300 ease-in-out">
            {/* Product Image and Info */}
            <div className="flex flex-col items-center p-4">
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
                className="pt-4 w-full h-[150px] object-contain mb-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <span className="text-center text-text18 text-sm">
                GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool
                Bulb Remover
              </span>

              {/* Review Stars */}
              <div className="flex items-center justify-center text-orange-400 text-lg mt-2 w-full py-4">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <span className="flex text-gray-500 pl-3 text-sm">
                  1 Review
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-center text-text6 mt-2 w-full space-x-1 pb-3">
                <span className="text-md font-bold">£2.99</span>
                <span className="text-gray-400 font-light text-sm">
                  (Incl. Vat)
                </span>
              </div>
            </div>

            {/* Hover Bottom Actions */}
            <div className="absolute bottom-0   left-0 right-0 h-14  bg-orange-500 flex justify-around items-center shadow-xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="cursor-pointer">
                <IoMdEye size={30} />
              </div>
              <div className="cursor-pointer">
                <FaBasketShopping size={30} />
              </div>
            </div>
          </div>

          <div className="relative group w-full border border-gray-200 hover:border-orange-500 hover:shadow-md cursor-pointer rounded-md overflow-hidden transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center p-4">
              {/* Product Image */}
              <img
                src="https://doo9vxlv0gkqf.cloudfront.net/media/catalog/product/cache/3c2867412ad9bf52dc12dece35e9e4dd/1/_/1_68_13.jpg"
                className="pt-4 w-full h-[150px] object-contain mb-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
                alt="GU10 Halogen"
              />

              {/* Product Info */}
              <div className="flex flex-col w-full text-end">
                <span className="text-sm text-text18 text-center">
                  GU10, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker
                  Tool Bulb Remover
                </span>

                <div className="flex items-center justify-center text-text6 mt-30 w-full space-x-1 py-4">
                  <span className="font-bold text-md text-text6">£2.99</span>
                  <span className="text-text17 font-light text-sm">
                    (Incl. Vat)
                  </span>
                </div>
              </div>
            </div>

            {/* Hover bottom action bar */}
            <div className="absolute bottom-14 left-0 right-0 h-14 bg-orange-500 text-white flex items-center justify-around opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="cursor-pointer">
                <IoMdEye size={30} />
              </div>
              <div className="cursor-pointer">
                <FaBasketShopping size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto  text-text18">
          <div className="mt-10 w-full">
            <ShortedListed />
          </div>
          <div>
            <h3 className="font-light leading-none line-clamp-1 mt-[2em] mb-[1em] text-lg ">GU10 halogen bulbs – Brighten Your Space, Lighten Your Life</h3>
            <p className="mt-[1em] mb-[1em] leading-6 text-base tracking-tighter">
              Energy Light Bulbs is one of the leading suppliers of GU10 halogen
              bulbs in the UK. We provide a large collection of 
              {" "}
              <Link href={``} className=" text-blue-600   hover:underline hover:underline-offset-2 hover:decoration-1 ">energy-saving  light bulbs </Link>
              {""}
               and lamps, as well as accessories and fittings. Owing
              to the quality features of energy-saving products, we are
              reputable for supplying high-quality bulbs at the lowest costs
              available online in the UK. GU10 halogen bulbs fit into GU10
              bases, while most halogen lights are designed to fit into ordinary
              screw-in Edison bases. The two-pronged, twist-and-lock method used
              by the GU10 light bulb base is particularly successful at keeping
              a bulb tight. Halogen bulbs use a tungsten filament that is quite
              thin and the light produces visible light by passing energy
              through the tungsten filament. As tungsten has a greater melting
              point than any other metal, it is the most suitable metal for
              halogen light filaments. Tungsten filaments in GU10 halogen bulbs
              may achieve temperatures of above 2,550 degrees Celsius; the
              melting point of Tungsten is 3,410 degrees Celsius.
            </p>
            <h3 className="font-light leading-none line-clamp-1 mt-[2em] mb-[1em] text-lg">GU10 Halogen Bulbs Available at Energy Light Bulbs</h3>
            <p className="mt-[1em] mb-[1em] leading-6 text-base">
              We offer a {" "}
               <Link href={``} className="text-blue-600   hover:underline hover:underline-offset-2 hover:decoration-1 ">wide range of light bulbs</Link> 
               {" "}
             that come in various powers,
              thus, suit every price range. Known as the best supplier of GU10
              Halogen Bulbs online, we have successfully carved our niche in the
              global market. Buyers both in the UK and across the world can
              purchase halogen bulbs online that come on different bases. Order
              online and buy 10 X GU10 50W Halogen Light Bulb Lamp, GU10, MR16
              12v Halogen, LED Light Bulb Lamp Remover Sucker Tool Bulb Remover,
              Coloured GU10 Halogen Lamp 50w, and GU10 Halogen 50w Light Bulb
              that comes at a reasonable price.
            </p>
            <h2 className="font-light leading-none line-clamp-1 mt-[2em] mb-[1em] text-lg">Applications of GU10 Halogen Bulbs Offered By Us</h2>
            <p className="mt-[1em] mb-[1em] leading-6 text-base">
              Many lighting applications benefit from GU10 halogen bulbs. They
              can be utilized anywhere a GU10 base is available. Adapters that
              accept GU10 halogen bulbs which can be installed into classic
              Edison screw bases are also available to consumers.
            </p>
            <h3 className="font-light leading-none line-clamp-1 mt-[2em] mb-[1em] text-lg">Why Choose GU10 Halogen Bulbs?</h3>
            <p className="mt-[1em] mb-[1em] leading-6 text-base">
              In comparison to incandescent technology, the halogen technology
              employed in GU10 halogen bulbs has resulted in increased
              efficiency. Halogen bulbs are more efficient and last considerably
              longer than incandescent lamps because of the fill gases. Halogen
              lamps produce brighter light because the fill gases allow the
              filaments to burn at higher temperatures. In the early
              twenty-first century, the average incandescent bulb lasted around
              1,000 hours, whereas GU10 halogen bulbs were designed to endure
              for more than 5,000 hours, depending on the power. Today it is
              easy to buy halogen bulbs online with a GU10 base. The lumen
              output of halogen light bulbs can range from 10 to 20 lumens per
              watt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
