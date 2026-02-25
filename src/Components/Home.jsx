import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import {
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
  SiYoutube,
} from "react-icons/si"; // Added SiYoutube
import img1 from "../assets/img1.png";

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 bg-[#0f0721] overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Section: Branding & CTA */}
        <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
              Available for New Projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Sitaram Sahu
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-400">
            Full-Stack Developer & Content Creator 🎥
          </h2>

          <p className="text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I build high-performance web applications using the MERN stack and
            teach Data Structures & Algorithms on my YouTube channel,
            **CodeWithSitaram**.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transform hover:-translate-y-1">
              <FontAwesomeIcon icon={faFileDownload} />
              Download Resume
            </button>

            {/* Social Dock with YouTube */}
            <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <a
                href="https://github.com/Sitaram8472"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-all text-xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <div className="w-[1px] h-6 bg-white/10"></div>
              <a
                href="https://www.linkedin.com/in/sitaram-sahu/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all text-xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <div className="w-[1px] h-6 bg-white/10"></div>
              <a
                href="https://www.youtube.com/@codewithsitaram"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-red-600 transition-all text-xl"
              >
                <SiYoutube />
              </a>
              <div className="w-[1px] h-6 bg-white/10"></div>
              <a
                href="mailto:sitaramsahu8472@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-all text-xl"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Visual & CP Stats */}
        <div className="order-1 lg:order-2 flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#190b3f] shadow-2xl">
              <img
                src={img1}
                alt="Sitaram Sahu"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Floating CP Badges */}
            <div className="absolute -bottom-6 -right-6 md:bottom-0 md:right-0 bg-[#190b3f]/80 backdrop-blur-xl p-4 rounded-3xl border border-white/10 shadow-2xl">
              <p className="text-[10px] uppercase font-bold text-gray-400 mb-3 text-center tracking-widest">
                Coding Profiles
              </p>
              <div className="flex gap-4">
                <a
                  href="https://codeforces.com/profile/sitaramSahu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400 text-2xl transition-transform hover:scale-110"
                >
                  <SiCodeforces />
                </a>
                <a
                  href="https://leetcode.com/u/sitaramkr831/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#FFA116] text-2xl transition-transform hover:scale-110"
                >
                  <SiLeetcode />
                </a>
                <a
                  href="https://www.codechef.com/users/sitaramsahu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#5B4638] text-2xl transition-transform hover:scale-110"
                >
                  <SiCodechef />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
