import { Button } from "@/components/ui/button";
import Image from "next/image";
import { montserrat } from "../layout";
import { properties } from "@/data";
import Property from "@/components/Property";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Heritage Nest | Sell",
  description: "",
};
export default function SellPage() {
  return (
    <div>
      <div>
        <Image
          className="w-full h-[320px] object-cover"
          src="/assets/sell-banner.jpeg"
          alt="sell-banner"
          width={1500}
          height={320}
        />
      </div>
      <div className="max-w-6xl mx-auto px-3 pt-10 pb-10">
        <div className={`${montserrat.className}`}>
          <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-semibold">Popular Properties</h1>
            <Button variant="outline">See all property</Button>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {properties.popular.map((item) => (
              <Property
                id={item.id}
                key={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                location={item.location}
              />
            ))}
          </div>
        </div>
        <div className="pt-10 border-b-2"></div>
        <div className={`${montserrat.className} pt-10`}>
          <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-semibold">New Listed Properties</h1>
            <Button variant="outline">See all property</Button>
          </div>
          <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {properties.popular.map((item) => (
              <Property
                id={item.id}
                key={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                location={item.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
