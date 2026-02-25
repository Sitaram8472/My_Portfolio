import { useNavigate } from "react-router-dom";
import React from "react";

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#0f0721] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Sitaram Sahu
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
          Welcome to my digital space. I build full-stack experiences and
          explore the world of open-source.
        </p>

        {/* Main CTA Button */}
        <button
          onClick={() => navigate("/menu")}
          className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transform hover:scale-105 active:scale-95"
        >
          <span className="relative">See My Profile</span>
          <svg
            className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator (Decoration) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <span className="text-white text-[10px] uppercase tracking-[0.3em]">
          Ready?
        </span>
      </div>
    </div>
  );
};

export default FrontPage;
