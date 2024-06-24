import Image from "next/image";
import logo from "../public/assets/logo.png";
import { montserrat } from "@/app/layout";
import { Button } from "./ui/button";
export default function Nav() {
  return (
    <div className={` ${montserrat.className} bg-[#ECF5FF] py-2 border-b`}>
      <nav className="max-w-6xl mx-auto px-3">
        <div className="flex justify-between items-center">
          <div>
            <ul className="flex items-center space-x-5">
              <li>Buy</li>
              <li>Sell</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <Image src={logo} alt="logo" className="w-10" />
          </div>
          <div>
            <Button
              className="bg-[#C5E2FF] text-[#0059B1] font-semibold"
              variant="outline"
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
