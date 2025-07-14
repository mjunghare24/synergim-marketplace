import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Top left: Still Questions and Request Demo */}
      <div className="px-6 md:px-24 pt-12">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Still questions ?</h3>
        <button className="flex items-center bg-[#E1EAFF] px-5 py-3 rounded-lg text-base font-medium text-gray-800 shadow-sm hover:bg-[#d1dfff] transition">
          Request a Demo.
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Centered Logo + Quote */}
      <div className="text-center mt-12 mb-8">
        <img src="/logo.png" alt="Logo" className="mx-auto w-100 h-100 mb-3" />
      </div>

      {/* Blue background area */}
      <div className="w-full bg-[#E1EAFF] pt-20 pb-12 px-6 md:px-24">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-base text-gray-800">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-3">The good</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Our Story</li>
              <li>Why Markethub ?</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-3">The Boring</h4>
            <ul className="space-y-2">
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-lg mb-3">The Cool</h4>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
          </div>

          {/* Column 4 - Call to Action */}
          <div className="bg-white border border-gray-300 p-5 rounded-xl shadow-md">
            <h4 className="font-bold text-base mb-3">
              Boost your Sales by Joining Us Today !
            </h4>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✔️ Get discount</li>
            </ul>
            <div className="flex gap-2">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                Get in touch
              </button>
              <button className="border border-black px-4 py-2 rounded-md text-sm">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
