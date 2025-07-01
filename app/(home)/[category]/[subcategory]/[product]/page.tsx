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
      <h1 className="text-center text-xl font-semibold pt-10">
        Product Not Found
      </h1>
    );
  }
  const [view, setView] = useState("grid");

  return (
    <div className="min-h-screen w-full bg-bg1">
      <div className="px-10 mt-10">
        <Breadcrumbs />
      </div>
      <h3 className="text-2xl font-semibold text-text18 px-10  mt-4">
        {product.imgName}
      </h3>

      <div className="max-w-screen-xl mx-auto px-14 pl-20 py-12">
        <ShortedListed view={view} setView={setView} />

        <div>{view === "grid" ? <GridView /> : <ListView />}</div>

        <div className="max-w-screen-xl mx-auto  text-text18"> 
          <div className="mt-10 w-full">
            <ShortedListed view={view} setView={setView} />
          </div>
          <div>
            <h3 className="font-light leading-none line-clamp-1 mt-[2em] mb-[1em] text-lg ">
              GU10 halogen bulbs – Brighten Your Space, Lighten Your Life
            </h3>
            <p className="mt-[1em] mb-[1em] leading-6 text-base tracking-tighter">
              Energy Light Bulbs is one of the leading suppliers of GU10 halogen
              bulbs in the UK. We provide a large collection of{" "}
              <Link
                href={`/energy-calculator`}
                className=" text-text11   hover:underline hover:underline-offset-2 hover:decoration-1 "
              >
                energy-saving light bulbs{" "}
              </Link>
              {""}
              and lamps, as well as accessories and fittings. Owing to the
              quality features of energy-saving products, we are reputable for
              supplying high-quality bulbs at the lowest costs available online
              in the UK. GU10 halogen bulbs fit into GU10 bases, while most
              halogen lights are designed to fit into ordinary screw-in Edison
              bases. The two-pronged, twist-and-lock method used by the GU10
              light bulb base is particularly successful at keeping a bulb
              tight. Halogen bulbs use a tungsten filament that is quite thin
              and the light produces visible light by passing energy through the
              tungsten filament. As tungsten has a greater melting point than
              any other metal, it is the most suitable metal for halogen light
              filaments. Tungsten filaments in GU10 halogen bulbs may achieve
              temperatures of above 2,550 degrees Celsius; the melting point of
              Tungsten is 3,410 degrees Celsius.
            </p>
            <h3 className="font-light leading-none line-clamp-1 mt-[2em] mb-[1em] text-lg">
              GU10 Halogen Bulbs Available at Energy Light Bulbs
            </h3>
            <p className="mt-[1em] mb-[1em] leading-6 text-base">
              We offer a {" "}
              <Link
                href={`/${category.slug}`}
                className="text-text11   hover:underline hover:underline-offset-2 hover:decoration-1 "
              >
                wide range of light bulbs
              </Link>{" "}
              that come in various powers, thus, suit every price range. Known
              as the best supplier of GU10 Halogen Bulbs online, we have
              successfully carved our niche in the global market. Buyers both in
              the UK and across the world can purchase halogen bulbs online that
              come on different bases. Order online and buy 10 X GU10 50W
              Halogen Light Bulb Lamp, GU10, MR16 12v Halogen, LED Light Bulb
              Lamp Remover Sucker Tool Bulb Remover, Coloured GU10 Halogen Lamp
              50w, and GU10 Halogen 50w Light Bulb that comes at a reasonable
              price.
            </p>
            <h2 className="font-light leading-none line-clamp-1 mt-[2em] mb-[1em] text-lg">
              Applications of GU10 Halogen Bulbs Offered By Us
            </h2>
            <p className="mt-[1em] mb-[1em] leading-6 text-base">
              Many lighting applications benefit from GU10 halogen bulbs. They
              can be utilized anywhere a GU10 base is available. Adapters that
              accept GU10 halogen bulbs which can be installed into classic
              Edison screw bases are also available to consumers.
            </p>
            <h3 className="font-light leading-none line-clamp-1 mt-[2em] mb-[1em] text-lg">
              Why Choose GU10 Halogen Bulbs?
            </h3>
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
