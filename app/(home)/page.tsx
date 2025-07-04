import Image from "next/image";
import Carousel from "../components/crousel/crousel";
import { Category } from "../components/category/category";
// import { Card } from "../components/card/card";
import { Offers } from "../components/offers/offers";
import { FilterData } from "../components/card/filterCards";

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
    <div className=" w-full max-w-7xl px-6 mx-auto">
      <div className="flex   flex-col justify-center items-center ">

        <div className="w-full">
          <Carousel/>
        </div>
        <div className=" w-full items-start justify-between text-black">
          <FilterData/>
          
        </div>
        <div className="text-black">
          <Offers />
        </div>
      </div>
    </div>
  );
}
