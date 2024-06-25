import Image from "next/image";

export default function OurStory() {
  return (
    <div>
      <div>
        <Image
          className="w-[904px] h-[455px] object-cover"
          src="/assets/about-e1.png"
          width={904}
          height={455}
          alt="about-e1"
        />
      </div>
      <div className="flex justify-end -mt-36">
        <div className="bg-[#ECF5FF] p-8 space-y-4">
          <div className="flex space-x-3 items-center">
            <div className="w-12 h-1 bg-[#EE6611]"></div>
            <p className="text-lg font-semibold text-[#EE6611]">Our Story</p>
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
              In the symphony of bustling markets and serene landscapes,
              <br /> Heritage-Nest was born—a vision to
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
