import Image from "next/image";

export default function OurTeam() {
  return (
    <div>
      <div>
        <div className="flex space-x-3 items-center">
          <div className="w-12 h-1 bg-[#EE6611]"></div>
          <p className="text-lg font-semibold text-[#EE6611]">Our Team</p>
        </div>
        <h1 className="font-bold text-4xl text-[#111827] mt-1">
          Discover the Faces Behind Our Success
        </h1>
      </div>
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <Image
          className="object-cover rounded-xl w-full"
          src="/assets/team1.png"
          alt="team1"
          width={384}
          height={417}
        />
        <Image
          className="object-cover rounded-xl w-full"
          src="/assets/team2.png"
          alt="team1"
          width={384}
          height={417}
        />
        <Image
          className="object-cover rounded-xl w-full"
          src="/assets/team3.png"
          alt="team1"
          width={384}
          height={417}
        />
      </div>
    </div>
  );
}
