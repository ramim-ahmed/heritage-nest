import { montserrat } from "@/app/layout";
import Property from "@/components/Property";
import ServiceItem from "@/components/ServiceItem";
import { Button } from "@/components/ui/button";
import { properties } from "@/data";
import Image from "next/image";
import React from "react";
import { TbMapPin } from "react-icons/tb";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { MdBalcony } from "react-icons/md";
import { GiBunkBeds } from "react-icons/gi";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Heritage Nest | property-details",
  description: "",
};
export default function details() {
  return (
    <div>
      <div className="max-w-6xl pt-10 px-3 mx-auto min-h-screen">
        <div className="flex items-center space-x-6">
          <div>
            <div>
              <h1 className="text-xl font-semibold text-[#010101]">
                3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
              </h1>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <TbMapPin className="h-6 w-6 text-[#EE6611]" />
              <p className="text-[#6B7280] font-medium">
                Meadowshire Park, Greenfield, USA
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[28px] font-bold text-[#010101] ">$300K</h1>
          </div>
        </div>
        <div className={`grid grid-cols-12 gap-6 pt-6`}>
          <div className="lg:col-span-8 col-span-12">
            <div>
              <div>
                <Image
                  className="w-full rounded-md h-[400px] object-cover"
                  src="/assets/p-d1.jpeg"
                  alt="property-details"
                  width={800}
                  height={400}
                />
              </div>
              <div className="grid pt-4 grid-cols-3 gap-6">
                <Image
                  className="w-full rounded-md h-[160px] object-cover"
                  src="/assets/p-d2.jpeg"
                  alt="property-details"
                  width={800}
                  height={160}
                />
                <Image
                  className="w-full rounded-md h-[160px] object-cover"
                  src="/assets/p-d3.jpeg"
                  alt="property-details"
                  width={800}
                  height={160}
                />
                <div className="relative">
                  <Image
                    className="w-full rounded-md h-[160px] object-cover"
                    src="/assets/p-d4.jpeg"
                    alt="property-details"
                    width={800}
                    height={160}
                  />
                  <div className="absolute rounded-md inset-0 bg-black opacity-50 flex items-center justify-center">
                    <Button className="bg-black text-white">View More</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 mt-6 bg-[#f4f4f477] rounded-md p-5">
              <h1 className="text-2xl font-semibold">Overview</h1>
              <div className="flex justify-between items-center bg-white p-4 mt-6">
                <div className="flex items-center space-x-2">
                  <FaCartFlatbedSuitcase className="h-6 w-6" />
                  <p>
                    <span className="font-bold">2</span> Beds
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBath className="h-6 w-6" />
                  <p>
                    <span className="font-bold">2</span> Bath
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdBalcony className="h-6 w-6" />
                  <p>
                    <span className="font-bold">2</span> Balcony
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <GiBunkBeds className="h-6 w-6" />
                  <p>
                    <span className="font-bold">2</span> Full Furnished
                  </p>
                </div>
              </div>
              <div className={`${montserrat.className} mt-6`}>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#535353]">Carpet Area</p>
                    <h4 className="text-[#101010] font-medium">2000 sqft</h4>
                    <p className="text-[#535353]">$ 225/sqft</p>
                  </div>
                  <div>
                    <p className="text-[#535353]">Floor</p>
                    <h4 className="text-[#101010] font-medium">
                      Second (Out of 6th floor)
                    </h4>
                  </div>
                  <div>
                    <p className="text-[#535353]">Transaction Type</p>
                    <h4 className="text-[#101010] font-medium">
                      Ready to move
                    </h4>
                  </div>
                  <div>
                    <p className="text-[#535353]">Lift</p>
                    <h4 className="text-[#101010] font-medium">1</h4>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div>
                    <p className="text-[#535353]">Facing</p>
                    <h4 className="text-[#101010] font-medium">North - East</h4>
                    <p className="text-[#535353]">$ 225/sqft</p>
                  </div>
                  <div>
                    <p className="text-[#535353]">Additional Rooms</p>
                    <h4 className="text-[#101010] font-medium">
                      1 servant room & 1 gust room{" "}
                    </h4>
                  </div>
                  <div>
                    <p className="text-[#535353]">Age of construction</p>
                    <h4 className="text-[#101010] font-medium">
                      New Construction{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-[#ECF5FF] p-5 space-y-7">
              <p className="text-[#6B7280]">Property Value</p>
              <h1 className="text-2xl font-bold">$ 300k - $ 310k</h1>
              <p className="text-[#6B7280]">
                Your bid can not be than 10% of the property Minimum value.
              </p>
              <div>
                <p className="text-[#6B7280]">Min</p>
                <p className="bg-white border p-2">$28k</p>
                <p className="mt-1 text-[#6B7280]">Max</p>
                <p className="bg-white border p-2">$305k</p>
              </div>
              <div>
                <Image
                  src="/assets/frame.png"
                  alt="frame"
                  width={400}
                  height={5}
                />
                <div className="flex items-center justify-between">
                  <p className="text-sm">$ 280k</p>
                  <p className="text-sm">$ 305k</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button className="bg-primaryColor text-white">
                    Bid Property
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-md">
              <iframe
                className="w-full h-[430px]"
                src="https://www.google.com/maps?q=dhaka&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={`${montserrat.className}`}>
          <div className="pt-10">
            <h1 className="text-4xl font-semibold pb-10 text-center">
              Other Services
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
            </div>
          </div>
        </div>
        <div className={`${montserrat.className} pt-10 pb-10`}>
          <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-semibold">
              Others Nearby Properties
            </h1>
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
