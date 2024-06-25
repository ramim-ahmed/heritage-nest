import Image from "next/image";
import { Button } from "./ui/button";

export default function BookConsultation() {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center">
      <div className=" space-y-8">
        <div className="flex space-x-3 items-center">
          <div className="w-12 h-1 bg-[#EE6611]"></div>
          <p className="text-lg font-semibold text-[#EE6611]">
            Meet the Team For Book Consultation
          </p>
        </div>
        <h1 className="font-bold text-4xl text-[#111827] mt-1">
          Meet the stewards of your <br /> heritage journey
        </h1>
        <p className="text-[#6B7280]">
          each member an embodiment of expertise and warmth, dedicated to
          guiding you home, <br /> every step of the way.
        </p>
        <Button className="w-60 text-base bg-primaryColor text-white rounded-none">
          Book Consultation Now
        </Button>
      </div>
      <div className="mt-6 lg:mt-0`">
        <Image
          src="/assets/book-e1.png"
          alt="book-e1"
          width={384}
          height={304}
          className="h-[304] w-[384]"
        />
      </div>
    </div>
  );
}
