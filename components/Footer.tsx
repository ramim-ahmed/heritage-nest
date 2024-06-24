import { montserrat } from "@/app/layout";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className={`${montserrat.className} bg-[#ECF5FF] py-10 `}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-7 pb-5 gap-6">
          <div className="col-span-2">
            <div>
              <Image src={logo} alt="logo" className="w-16" />
              <p className="mt-2">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h2 className="font-semibold">Product</h2>
              <ul className="space-y-2 mt-2">
                <li>Overview</li>
                <li>Features</li>
                <li>Solutions</li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h2 className="font-semibold">Company</h2>
              <ul className="space-y-2 mt-2">
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media kit</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h2 className="font-semibold">Resources</h2>
              <ul className="space-y-2 mt-2">
                <li>Blog</li>
                <li>Newsletter</li>
                <li>Events</li>
                <li>Help centre</li>
                <li>Tutorials</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h2 className="font-semibold">Social</h2>
              <ul className="space-y-2 mt-2">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>AngelList</li>
                <li>Dribbble</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h2 className="font-semibold">Legal</h2>
              <ul className="space-y-2 mt-2">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Settings</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-b"></div>
        <div className="flex pt-5 items-center justify-between">
          <p>
            © {new Date().getFullYear()} Heritage-Nest . All rights reserved.
          </p>
          <div className="flex items-center space-x-5">
            <FaTwitter className="w-6 h-6 text-primaryColor" />
            <FaFacebook className="w-6 h-6 text-primaryColor" />
            <FaLinkedin className="w-6 h-6 text-primaryColor" />
            <FaInstagramSquare className="w-6 h-6 text-primaryColor" />
          </div>
        </div>
      </div>
    </footer>
  );
}
