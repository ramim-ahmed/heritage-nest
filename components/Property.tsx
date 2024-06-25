import { montserrat } from "@/app/layout";
import Image from "next/image";
import { TbMapPin } from "react-icons/tb";
import { IoImage } from "react-icons/io5";
import Link from "next/link";

type PropertyProps = {
  id: number;
  title: string;
  img: string;
  price: string;
  location: string;
};
export default function Property({
  id,
  title,
  img,
  price,
  location,
}: PropertyProps) {
  return (
    <Link href={`/property-details/${id}`}>
      <div className={`${montserrat.className} bg-[#ebebeb79]`}>
        <div className="relative">
          <Image
            className="h-[200px] object-cover w-full"
            width={385}
            height={200}
            src={img}
            alt="property"
          />
          <div className=" absolute bottom-5 left-5">
            <p className="bg-[#fdf0e7db] rounded-lg p-2 flex items-center space-x-2">
              <IoImage className="w-6 h-6 text-[#EE6611]" />
              <span className="text-sm font-semibold text-[#101010]">20</span>
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-3 px-3 pb-3">
          <div className="flex items-center justify-between">
            <p className="bg-[#C5E2FF] px-3">Apartment</p>
            <p className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#EE6611]"></span>
              <span>Ready to Move</span>
            </p>
          </div>
          <div className="border-b-2"></div>
          <div>
            <h1 className="text-xl font-semibold text-[#111827]">{title}</h1>
            <div className="mt-2 flex items-center space-x-2">
              <TbMapPin className="h-6 w-6 text-[#EE6611]" />
              <p className="text-[#6B7280] font-medium">
                Meadowshire Park, Greenfield, USA
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#111827]">${price}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
