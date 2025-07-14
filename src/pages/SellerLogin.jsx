import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { ArrowLeft } from "lucide-react";

const SellerLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg border">
        {/* Left side with blue background */}
        <div className="w-full md:w-1/2 bg-[#A6CCFF] p-8 flex flex-col">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#000000] font-medium mb-4 hover:text-blue-700"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>

          {/* Main content */}
          <div className="flex flex-col justify-center items-center flex-grow mt-4">
            <h1 className="text-4xl font-bold mb-6 text-[#000]">Market Hub</h1>
            <img
              src="/seller-login-graphic.svg"
              alt="Login Illustration"
              className="w-3/4 max-w-md"
            />
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-12 bg-white">
          <h2 className="text-2xl font-semibold mb-4 text-[#4D80ED]">Seller Login</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your login details below</p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="enter your email"
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            />
            <input
              type="password"
              placeholder="enter your password"
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            />
            <p className="text-sm text-[#4D80ED] cursor-pointer">forgot password ?</p>
            <button
              type="submit"
              className="w-full bg-[#4D80ED] text-white py-2 rounded-full font-semibold"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">Login Via</div>
          <div className="flex justify-center gap-6 mt-3 text-2xl text-[#4D80ED]">
            <FaGoogle className="cursor-pointer hover:text-blue-600 transition" />
            <FaFacebookF className="cursor-pointer hover:text-blue-700 transition" />
            <FaXTwitter className="cursor-pointer hover:text-blue-500 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
