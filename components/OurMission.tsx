import Image from "next/image";

export default function OurMission() {
  return (
    <div>
      <div className="flex justify-end">
        <Image
          className="w-[702px] h-[455px] object-cover"
          src="/assets/about-e2.png"
          width={904}
          height={455}
          alt="about-e1"
        />
      </div>
      <div className="flex justify-start -mt-36">
        <div className="bg-[#FDF0E7] p-8 space-y-4">
          <div className="flex space-x-3 items-center">
            <div className="w-12 h-1 bg-[#EE6611]"></div>
            <p className="text-lg font-semibold text-[#EE6611]">
              Mission Statement
            </p>
          </div>
          <div>
            <h1 className="lg:text-4xl text-2xl font-bold text-[#1F2937]">
              Efficient and Transparent
            </h1>
            <h1 className="lg:text-4xl text-2xl mt-1 font-bold text-[#1F2937]">
              Home Buying Solutions
            </h1>
          </div>
          <div>
            <p className="text-[#6B7280] font-medium">
              To bridge the miles with smiles, Heritage-Nest pledges <br /> to
              be the golden thread connecting NRIs to their homeland, <br />{" "}
              through trust, transparency, and tailored real estate solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
