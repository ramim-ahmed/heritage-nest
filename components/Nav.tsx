import Image from "next/image";
import logo from "../public/assets/logo.png";
import { montserrat } from "@/app/layout";
import { Button } from "./ui/button";
import NavLink from "./NavLink";
import { LuMenu } from "react-icons/lu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Nav() {
  return (
    <div className={` ${montserrat.className} bg-[#ECF5FF] py-2 border-b`}>
      <nav className="max-w-6xl mx-auto px-3">
        <div className="flex justify-between items-center">
          <div>
            <div className="md:block hidden">
              <ul className="flex items-center space-x-5">
                <NavLink path="/buy" level="Buy" />
                <NavLink path="/sell" level="Sell" />
                <NavLink path="/services" level="Services" />
                <NavLink path="/about" level="About" />
              </ul>
            </div>
            <div className="md:hidden block">
              <Sheet>
                <SheetTrigger>
                  <LuMenu className="w-6 h-6" />
                </SheetTrigger>
                <SheetContent>
                  <ul className="space-y-5">
                    <SheetClose asChild>
                      <NavLink path="/buy" level="Buy" />
                    </SheetClose>
                    <SheetClose asChild>
                      <NavLink path="/sell" level="Sell" />
                    </SheetClose>
                    <SheetClose asChild>
                      <NavLink path="/services" level="Services" />
                    </SheetClose>
                    <SheetClose asChild>
                      <NavLink path="/about" level="About" />
                    </SheetClose>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
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
