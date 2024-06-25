import Image from "next/image";
import { IoMdPlay } from "react-icons/io";
import { Button } from "./ui/button";
import { IoSearchSharp } from "react-icons/io5";

type HomeEstateProps = {
  isTrue?: boolean;
  img: string;
};

export default function HomeEstateItem({ isTrue, img }: HomeEstateProps) {
  return (
    <div className="grid grid-cols-12 pb-10 gap-x-8">
      <div
        className={`relative lg:col-span-6 col-span-12 ${
          isTrue ? "order-last" : null
        }`}
      >
        <div>
          <Image
            className="object-cover"
            src={img}
            alt="estate-a1"
            width={592}
            height={504}
          />
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12">
        <div className={`space-y-4 ${isTrue ? "mb-6" : ""}`}>
          <p className="text-[#F06711] font-semibold">Property buying</p>
          <div>
            <h2 className="lg:text-[40px] text-[#111827] text-[24px] font-bold">
              Efficient and Transparent
            </h2>
            <h2 className="lg:text-[40px] text-[#111827] text-[24px] font-bold">
              Home Buying Solutions
            </h2>
          </div>
          <p className="text-[#667085]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
          </p>
          <div>
            <Button
              variant="outline"
              className="bg-[#E6EFF7] text-primaryColor rounded flex items-center space-x-2"
            >
              <IoSearchSharp className=" w-6 h-6" />
              <span>Find Property</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
