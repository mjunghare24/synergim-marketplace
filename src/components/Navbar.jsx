
import React from "react";
import { PhoneCall, Globe } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#E1EAFF] py-4 px-6 md:px-24 font-inter mb-8">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[24px] md:text-[28px] font-semibold text-black">Market Hub</h1>
        <div className="flex items-center space-x-4 md:space-x-6">
          <ul className="hidden md:flex space-x-6 text-[16px] font-light text-black">
            <li>
              <a href="#home" className="underline underline-offset-8 text-black">
                Home
              </a>
            </li>
            <li><a href="#about" className="hover:text-[#4D80ED]">About</a></li>
            <li><a href="#contact" className="hover:text-[#4D80ED]">Contact</a></li>
            <li><a href="#pricing" className="hover:text-[#4D80ED]">Pricing</a></li>
          </ul>
          <div className="flex items-center space-x-1 border px-2 py-1 rounded-md cursor-pointer">
            <Globe className="h-4 w-4 text-black" />
            <span className="text-black text-sm font-light">En ▼</span>
          </div>
          <div className="p-2 rounded-full border border-black">
            <PhoneCall className="text-black h-5 w-5" />
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-900 text-sm">
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
