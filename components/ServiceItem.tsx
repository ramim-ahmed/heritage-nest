import { RiHome2Line } from "react-icons/ri";
type serviceItemProps = {
  title: string;
  description: string;
};
export default function ServiceItem({ title, description }: serviceItemProps) {
  return (
    <div className="flex bg-[#ECF5FF] rounded-md p-4 space-x-4">
      <div>
        <div className="bg-[#EE6611] p-2 rounded-md">
          <RiHome2Line className="w-7 h-7  text-white" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-[#6B7280] mt-2 font-medium">{description}</p>
      </div>
    </div>
  );
}
