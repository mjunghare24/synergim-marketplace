import React from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    title: "Continue as a Buyer",
    image: "/buyer.svg",
    buttonText: "Continue",
    linkText: "Not registered? click here",
    path: "/buyer-login",
  },
  {
    title: "Continue as a Seller",
    image: "/seller.svg",
    buttonText: "Continue",
    linkText: "Not registered? click here",
    path: "/seller-login",
  },
];

const ContinueChoice = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 pb-3 px-6 md:px-24 bg-white">
      <div className="border border-gray-300 rounded-3xl p-10 flex flex-wrap justify-center gap-12 bg-white">
        {roles.map((role, index) => (
          <div
            key={index}
            className="w-[350px] h-[400px] bg-[#F5F5F5] rounded-3xl shadow-md flex flex-col items-center justify-between p-6"
          >
            <img src={role.image} alt={role.title} className="w-[90%] h-auto mt-4" />
            <h3 className="text-xl font-medium text-black text-center">
              {role.title}
            </h3>
            <button
              onClick={() => navigate(role.path)}
              className="bg-[#E1EAFF] px-6 py-2 rounded-full text-[#4D80ED] font-medium shadow-sm"
            >
              {role.buttonText}
            </button>
            <p className="text-sm text-gray-500 mt-2 text-center">
              {role.linkText.split("click")[0]}
              <a href="#" className="text-[#4D80ED] underline ml-1">
                click here
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueChoice;
