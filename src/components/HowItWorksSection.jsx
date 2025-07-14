import React from "react";

const steps = [
  {
    icon: "📝",
    title: "Register",
    description: "Sellers and buyers sign up in seconds.",
  },
  {
    icon: "🔍",
    title: "List & discover",
    description: "Sellers list products, buyers explore.",
  },
  {
    icon: "🤝",
    title: "Get Support",
    description: "Reliable support when you need it.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-sm">
        {/* Left: Text + steps */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            How MarketHub Works
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            See how it is easy to connect and trade.
          </p>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-[#E1EAFF] p-4 rounded-xl">
                <div className="text-2xl">{step.icon}</div>
                <div>
                  <p className="font-semibold text-[#4D80ED]">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
         <img
  src="/how-it-works.png"
  alt="How it works illustration"
  className="w-full max-w-md mx-auto mt-20" // 👈 added mt-10
/>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
