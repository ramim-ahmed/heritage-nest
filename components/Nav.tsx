import Image from "next/image";
import logo from "../public/assets/logo.png";
import { montserrat } from "@/app/layout";
export default function Nav() {
  return (
    <div className={` ${montserrat.className} bg-white py-2 border-b`}>
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
            <ul className="flex items-center space-x-5">
              <li>Manage Rentals</li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
