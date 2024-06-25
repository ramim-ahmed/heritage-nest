import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoSearchSharp } from "react-icons/io5";
import { montserrat } from "../layout";
import Property from "@/components/Property";
import { properties } from "@/data";
import { TbMapPin } from "react-icons/tb";
import { RiHomeLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Heritage Nest | Buy",
  description: "",
};
export default function BuyPage() {
  return (
    <div>
      <div>
        <Image
          className="object-cover h-[309px]"
          src="/assets/buy-banner.jpeg"
          alt="buy-banner"
          width={1500}
          height={309}
        />
        <div className="flex justify-center -mt-40">
          <div className="bg-white p-5 w-2/3 rounded-lg">
            <div>
              <ul className="flex space-x-5 ">
                <li className="border-b-2 border-primaryColor text-primaryColor">
                  Buy
                </li>
                <li>Rent</li>
                <li>PG</li>
                <li>Plot</li>
                <li>Commercial</li>
              </ul>
            </div>
            <div className="mt-4">
              <Input placeholder="Search Properties" />
            </div>
            <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 gap-6 items-center">
              <div>
                <div className="space-x-2 flex items-center">
                  <TbMapPin className="h-6 w-6 space-x-2 text-[#EE6611]" />
                  <h1>Your Location</h1>
                </div>
                <div className="mt-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dhaka">Dhaka</SelectItem>
                      <SelectItem value="Shylet">Shylet</SelectItem>
                      <SelectItem value="Khulna">Khulna</SelectItem>
                      <SelectItem value="Khulna">Chattogram</SelectItem>
                      <SelectItem value="Khulna">Rajshahi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Property type */}
              <div>
                <div className="space-x-2 flex items-center">
                  <RiHomeLine className="h-6 w-6 space-x-2 text-[#EE6611]" />
                  <h1>Property Type</h1>
                </div>
                <div className="mt-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dhaka">Buy</SelectItem>
                      <SelectItem value="Shylet">Sell</SelectItem>
                      <SelectItem value="Khulna">Plot</SelectItem>
                      <SelectItem value="Khulna">Rensidential</SelectItem>
                      <SelectItem value="Khulna">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <div className="space-x-2 flex items-center">
                  <CiDollar className="h-6 w-6 space-x-2 text-[#EE6611]" />
                  <h1>Your Budget</h1>
                </div>
                <div className="mt-2">
                  <Input type="number" placeholder="Budget" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button className="bg-primaryColor w-full rounded flex items-center space-x-2">
                <IoSearchSharp className="text-white w-6 h-6" />
                <span>Find Property</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-3">
        <div className="pt-10">
          <Statistics />
        </div>
        <div className={`${montserrat.className} pt-10`}>
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
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                location={item.location}
              />
            ))}
          </div>
        </div>
        <div className="pt-10">
          <Testimonials />
        </div>
      </div>
      <div className="bg-[#FDF0E7] py-10">
        <div className="max-w-6xl mx-auto px-3 flex items-center justify-between">
          <div>
            <h4 className="text-xl font-semibold text-[#101828]">
              Post your Property for free
            </h4>
            <p className="text-[#475467] mt-1">
              List it on Your Propriety and get genuine leads
            </p>
          </div>
          <div>
            <Button className="bg-[#F06224] text-base">Post Property</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
