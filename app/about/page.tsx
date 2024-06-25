import OurMission from "@/components/OurMission";
import OurStory from "@/components/OurStory";
import Statistics from "@/components/Statistics";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Heritage Nest | About",
  description: "",
};

export default function AboutPage() {
  return (
    <div>
      <div>
        <Image
          className="h-72 object-cover"
          src="/assets/about-banner.jpg"
          width={1500}
          height={200}
          alt="banner"
        />
      </div>
      <div className="max-w-6xl pt-10 mx-auto px-3">
        <Statistics />
        <div className="pt-10">
          <OurStory />
        </div>
        <div className="pt-10">
          <OurMission />
        </div>
      </div>
    </div>
  );
}
