import { montserrat } from "@/app/layout";
import ServiceItem from "./ServiceItem";

export default function OtherService() {
  return (
    <div className={`${montserrat.className}`}>
      <div className="max-w-6xl mx-auto px-3">
        <h1 className="text-4xl font-semibold pb-10 text-center">
          Other Services
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <ServiceItem
            title="Advanced Property Search"
            description="Explore properties through immersive virtual tours and HD photos."
          />
          <ServiceItem
            title="Virtual Tours and Multimedia"
            description="Explore properties through immersive virtual tours and HD photos."
          />
          <ServiceItem
            title="Secure Online Transactions"
            description="Ensure secure transactions and e-sign documents seamlessly online."
          />
        </div>
      </div>
    </div>
  );
}
