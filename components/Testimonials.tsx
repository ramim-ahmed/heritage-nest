"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineStar } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-[#181818] font-bold text-center">
          Testimonials
        </h1>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#ECF5FF] p-10 space-y-5">
              <div className="flex justify-center">
                <div className="flex space-x-4 items-center">
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#fec84b75]" />
                </div>
              </div>
              <p className="mt-2 text-center">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className="mt-3 flex justify-center">
                <div>
                  <div className="flex justify-center">
                    <Image
                      className="w-12 h-12 rounded-full object-cover"
                      src="/assets/review1.jpeg"
                      alt="review-1"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h3 className="text-xl text-center mt-3 font-semibold text-[#111827]">
                    Tony Stark
                  </h3>
                  <p className="mt-1 text-center text-[#6B7280]">
                    Marketing manager, XYZ
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#ECF5FF] p-10 space-y-5">
              <div className="flex justify-center">
                <div className="flex space-x-4 items-center">
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#fec84b75]" />
                </div>
              </div>
              <p className="mt-2 text-center">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className="mt-3 flex justify-center">
                <div>
                  <div className="flex justify-center">
                    <Image
                      className="w-12 h-12 rounded-full object-cover"
                      src="/assets/review2.jpeg"
                      alt="review-1"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h3 className="text-xl text-center mt-3 font-semibold text-[#111827]">
                    Hallen Shark
                  </h3>
                  <p className="mt-1 text-center text-[#6B7280]">
                    Marketing manager, XYZ
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#ECF5FF] p-10 space-y-5">
              <div className="flex justify-center">
                <div className="flex space-x-4 items-center">
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#FEC84B]" />
                  <MdOutlineStar className="w-8 h-8 text-[#fec84b75]" />
                </div>
              </div>
              <p className="mt-2 text-center">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className="mt-3 flex justify-center">
                <div>
                  <div className="flex justify-center">
                    <Image
                      className="w-12 h-12 rounded-full object-cover"
                      src="/assets/review3.jpeg"
                      alt="review-1"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h3 className="text-xl text-center mt-3 font-semibold text-[#111827]">
                    Tony Stark
                  </h3>
                  <p className="mt-1 text-center text-[#6B7280]">
                    Marketing manager, XYZ
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
