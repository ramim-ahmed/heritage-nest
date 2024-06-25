import OtherService from "@/components/OtherService";
import ServiceItem from "@/components/ServiceItem";
import Image from "next/image";
import { montserrat } from "../layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Heritage Nest | Services",
  description: "",
};
export default function page() {
  return (
    <div>
      <div>
        <Image
          className="w-full h-[320px] object-cover"
          src="/assets/services-banner.jpeg"
          alt="sell-banner"
          width={1500}
          height={320}
        />
      </div>
      <div className={`${montserrat.className}`}>
        <div className="max-w-6xl mx-auto px-3 pt-10 pb-10">
          <h1 className="text-4xl font-semibold pb-10 text-center">
            All Services
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <ServiceItem
              title="Advanced Property Search"
              description="Explore properties through immersive virtual tours and HD photos."
            />
            <ServiceItem
              title="Virtual Tours and Multimedia"
              description="Explore properties through immersive virtual tours and HD photos."
            />
            <ServiceItem
              title="Secure Online Transactions"
              description="Ensure secure transactions and e-sign documents seamlessly online."
            />
            <ServiceItem
              title="Residential Area Services"
              description="Ensure secure transactions and e-sign documents seamlessly online."
            />
            <ServiceItem
              title="Commerical Rental City"
              description="Ensure secure transactions and e-sign documents seamlessly online."
            />
            <ServiceItem
              title="Rent Plot Service"
              description="Ensure secure transactions and e-sign documents seamlessly online."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
