import { montserrat } from "@/app/layout";
import { BsArrowDownCircle } from "react-icons/bs";
type statisticItemProps = {
  isTrue?: boolean;
};
export default function StatisticItem({ isTrue }: statisticItemProps) {
  return (
    <div
      className={`${
        montserrat.className
      } rounded-md flex flex-col justify-between ${
        isTrue ? " bg-[#ECF5FF]" : "bg-[#FDF0E7]"
      } p-5`}
    >
      <div>
        <h1
          className={`text-[40px] font-bold ${
            isTrue ? "text-[#0051A1]" : "text-[#D95D0F]"
          }`}
        >
          2k+
        </h1>
        <p className="font-semibold text-lg text-[#1F2937]">New Flat Listed</p>
      </div>
      <div className="flex mt-4 justify-between items-center">
        <p
          className={`border-b-2 ${
            isTrue
              ? "text-[#0059B1] border-[#0059B1]"
              : "text-[#EE6611] border-[#EE6611]"
          } font-semibold text-sm`}
        >
          View all
        </p>
        <div>
          <BsArrowDownCircle
            className={`h-6 w-6 ${
              isTrue ? "text-[#0059B1]" : "text-[#EE6611]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
