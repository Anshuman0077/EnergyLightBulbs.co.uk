import Image from "next/image";
import Carousel from "../components/crousel/crousel";
import { Category } from "../components/category/category";
import { Card } from "../components/card/card";
import { Offers } from "../components/offers/offers";

export default function Home() {
      const images = [
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_21.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_23_1.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_24.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_18_wall_fan-new.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_22.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_20.jpg",

  ]

  return (
    <div className="w-full">
      <div className="flex   flex-col justify-center">
        <div className="bg-bg14">
            <Category />
        </div>
        <div className="px-18 mt-3 w-full   ">
          <Carousel/>
          {/* <h1 className="font-bold text-2xl text-green-400">energyLightBulbs.co.uk</h1> */}
        </div>
        <div className="px-18 mt-4 text-black">
          <Card />
        </div>
        <div className="px-18 my-4 text-black">
          <Offers />
        </div>
      </div>
    </div>
  );
}
