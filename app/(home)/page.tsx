import Image from "next/image";
import { Crousel } from "../components/crousel/crousel";
import { Category } from "../components/category/category";
import { Card } from "../components/card/card";
import { Offers } from "../components/offers/offers";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex   flex-col justify-center">
        <div className="bg-bg14">
            <Category />
        </div>
        <div className="px-18 mt-4 ">
          <Crousel />
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
