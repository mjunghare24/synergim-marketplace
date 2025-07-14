import React, { useState } from 'react';
import { MessageSquare, BarChart, BadgeDollarSign } from 'lucide-react';

const features = [
  {
    frontIcon: <MessageSquare className="h-8 w-8 text-[#4D80ED]" />,
    frontTitle: 'Instant Messaging System',
    backText: 'Connect directly with Buyers & Sellers in Real Time for seamless Communication',
  },
  {
    frontIcon: <BarChart className="h-8 w-8 text-[#4D80ED]" />,
    frontTitle: 'Analytics Dashboard',
    backText: 'Track Performance, Views and Conversions in in-built-n Interactive Dashboards',
  },
  {
    frontIcon: <BadgeDollarSign className="h-8 w-8 text-[#4D80ED]" />,
    frontTitle: 'Zero Commission on first 3 listing',
    backText: 'List your first 3 Products absolutely free-risk-free Start for your Business',
  },
];

const FeatureCard = ({ icon, title, backText }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[289px] h-[448px] perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full rounded-3xl shadow-md backface-hidden">
  {/* Top Half: Icon */}
  <div className="h-[50%] bg-[#E1EAFF] flex items-center justify-center rounded-t-3xl">
    <div className="bg-[#A6CCFF] p-3 rounded-full shadow-md">
      {icon}
    </div>
  </div>

  {/* Bottom Half: Title and Button in Blue Block */}
  <div className="h-[50%] bg-[#A6CCFF] rounded-b-3xl flex flex-col items-center justify-center px-4 ">
    <h3 className="text-center text-xl font-medium text-black mb-4">
      {title}
    </h3>
    <button className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition">
      Know More
    </button>
  </div>
</div>
        <div className="absolute w-full h-full bg-[#E1EAFF] rounded-3xl shadow-md p-6 flex items-center justify-center backface-hidden transform rotate-y-180">
          <p className="text-sm text-center text-black leading-snug">{backText}</p>
        </div>
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="flex justify-center mb-12">
        <div
          className="bg-[#E1EAFF] w-[436px] h-[82px] flex items-center justify-center rounded-full shadow-md"
        >
          <h2 className="text-[32px] font-semibold font-inter text-center">
            Why Choose <span className="text-[#4D80ED]">Market Hub</span> ?
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[125px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.frontIcon}
            title={feature.frontTitle}
            backText={feature.backText}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
