import { Button } from "./ui/button";
import { IoSearchSharp } from "react-icons/io5";
export default function Banner() {
  return (
    <div className="relative w-full h-[590px] overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        loop
        muted
      >
        <source src="/assets/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 space-y-3">
        <h1 className="text-[64px] font-bold">Your Portal to India&#39;s </h1>
        <h1 className="text-[64px] font-bold">Exquisite Real Estate </h1>
        <p className="">
          Seamlessly connecting you to the heartbeat of India&rsquo;s prime
          properties.
        </p>
        <div>
          <Button className="bg-primaryColor rounded flex items-center space-x-2">
            <IoSearchSharp className="text-white w-6 h-6" />
            <span>Find Property</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
