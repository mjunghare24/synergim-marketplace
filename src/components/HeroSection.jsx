import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#E1EAFF] px-6 md:px-24 py-16 font-inter">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-20">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#4D80ED]">
              Welcome to MarketHub
            </h2>
            <h3 className="text-3xl text-[#4D80ED] font-semibold">
              Your one-stop market for buying & selling
            </h3>
          </div>

          <div className="text-gray-700 text-sm leading-relaxed space-y-2">
            <p>Buy. Sell. Thrive – All in one place.</p>
            <p>List your products, reach more customers, and manage everything with ease.</p>
            <p>Secure payments, real-time insights, and 24/7 support help turn your passion into profit.</p>
          </div>

          <button className="bg-[#4D80ED] text-white px-6 py-2 rounded-lg hover:bg-[#3b6cd6]">
            Explore Now
          </button>
        </div>

        <div>
          <img src="/hero-illustration.png" alt="MarketHub" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
