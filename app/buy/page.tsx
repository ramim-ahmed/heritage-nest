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
                <div>
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
                <div>
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
                <div>
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
        <div className="pt-10">
          <Testimonials />
        </div>
      </div>
      <div className="bg-[#FDF0E7] py-10">
        <div className="max-w-6xl mx-auto px-3 flex items-center justify-between">
          <div>
            <h4>Post your Property for free</h4>
            <p>List it on Your Propriety and get genuine leads</p>
          </div>
          <div>
            <Button>Post Property</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
