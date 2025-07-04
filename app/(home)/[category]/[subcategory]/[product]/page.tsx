"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { categories } from "@/app/components/data/categories";
import { ShortedListed } from "@/app/components/shortedListed";
import Link from "next/link";
import { Breadcrumbs } from "@/app/components/breadcrum/breadcrumbs";
import { ListView } from "@/app/components/layout/listView";
import { GridView } from "@/app/components/layout/gridView";

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
      <h1 className="text-center text-xl font-semibold pt-10 text-red-600">
        Product Not Found
      </h1>
    );
  }

  const [view, setView] = useState("grid");

  return (
    <div className="min-h-screen w-full bg-bg1">
      {/* Breadcrumb Section */}
      <div className="px-4 sm:px-6 lg:px-10 mt-6">
        <Breadcrumbs />
      </div>

      {/* Product Heading */}
      <h3 className="text-xl sm:text-2xl font-semibold text-text18 px-4 sm:px-6 lg:px-10 mt-4">
        {product.imgName}
      </h3>

      {/* Product View & Description */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid/List Toggle */}
        <div className="mb-6">
          <ShortedListed view={view} setView={setView} />
        </div>

        {/* Product View */}
        <div className="mb-10">{view === "grid" ? <GridView /> : <ListView />}</div>

        {/* Repeated Toggle Below */}
        <div className="mb-8">
          <ShortedListed view={view} setView={setView} />
        </div>

        {/* Product Description */}
        <div className="text-text18 space-y-6 text-justify text-base leading-relaxed tracking-tight">
          <div>
            <h3 className="text-lg font-medium">
              GU10 halogen bulbs – Brighten Your Space, Lighten Your Life
            </h3>
            <p>
              Energy Light Bulbs is one of the leading suppliers of GU10 halogen bulbs in the UK. We provide a large collection of{" "}
              <Link
                href="/energy-calculator"
                className="text-text11 underline hover:underline-offset-2"
              >
                energy-saving light bulbs
              </Link>{" "}
              and lamps, as well as accessories and fittings. Owing to the quality features of energy-saving products, we are reputable for supplying high-quality bulbs at the lowest costs available online in the UK. GU10 halogen bulbs fit into GU10 bases, while most halogen lights are designed to fit into ordinary screw-in Edison bases.
              <br />
              The two-pronged, twist-and-lock method used by the GU10 light bulb base is particularly successful at keeping a bulb tight. Halogen bulbs use a tungsten filament that is quite thin and the light produces visible light by passing energy through the tungsten filament.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">GU10 Halogen Bulbs Available at Energy Light Bulbs</h3>
            <p>
              We offer a{" "}
              <Link
                href={`/${category.slug}`}
                className="text-text11 underline hover:underline-offset-2"
              >
                wide range of light bulbs
              </Link>{" "}
              that come in various powers, thus, suit every price range. Known as the best supplier of GU10 Halogen Bulbs online, we have successfully carved our niche in the global market.
              <br />
              Order online and buy: 10 X GU10 50W Halogen Light Bulb Lamp, MR16 12v Halogen, LED Light Bulb Lamp Remover Sucker Tool, Coloured GU10 Halogen Lamp 50w, and GU10 Halogen 50w Light Bulb.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Applications of GU10 Halogen Bulbs Offered By Us
            </h3>
            <p>
              Many lighting applications benefit from GU10 halogen bulbs. They can be used anywhere a GU10 base is available. Adapters that accept GU10 halogen bulbs, which can be installed into classic Edison screw bases, are also available.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why Choose GU10 Halogen Bulbs?</h3>
            <p>
              In comparison to incandescent technology, the halogen technology employed in GU10 halogen bulbs has resulted in increased efficiency.
              <br />
              Halogen lamps produce brighter light and last considerably longer. The average incandescent bulb lasted ~1,000 hours, while GU10 halogen bulbs last over 5,000 hours depending on power. The lumen output can range from 10 to 20 lumens per watt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
