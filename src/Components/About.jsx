import React from "react";
import {
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiYoutube, // Added YouTube Icon
} from "react-icons/si";
import { FaJava, FaGraduationCap } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { PlayCircle, Video } from "lucide-react"; // Added Lucide Icons for YouTube card
import img1 from "../assets/img1.png";

const About = () => {
  const skills = [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <DiPython className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
  ];

  return (
    <div id="about" className="min-h-screen py-20 px-6 bg-[#0f0721] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Status Badge */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Behind the <span className="text-blue-500">Code</span>
            </h2>
            <p className="text-gray-400 mt-2">
              A glimpse into who I am and what I do.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            <span className="text-green-500 text-xs font-bold uppercase tracking-widest">
              Available for Internships
            </span>
          </div>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4 h-full">
          {/* Card 1: Main Bio (Large) */}
          <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              The Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm{" "}
              <span className="font-bold text-white">Sitaram Sahu</span>.
              Currently, I am a 3rd-year IT student at{" "}
              <span className="text-white">JIS College of Engineering</span>. I
              thrive on building scalable web apps with the{" "}
              <span className="text-white">MERN stack</span> and solving the
              toughest logic puzzles in CP.
            </p>
          </div>

          {/* Card 2: Profile Image */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={img1}
              alt="Sitaram Sahu"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0721] to-transparent opacity-70"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-sm uppercase tracking-widest text-blue-400 font-bold">
                Location
              </p>
              <p className="text-lg font-medium">West Bengal, India</p>
            </div>
          </div>

          {/* Card 3: Technical Arsenal */}
          <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="text-xl font-bold mb-8">Technical Arsenal</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 group"
                >
                  <span className="text-4xl transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: YouTube Content Creator (NEW) */}
          <div className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-red-600/20 to-rose-900/20 border border-red-500/20 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <SiYoutube className="text-4xl text-red-500" />
                <h3 className="text-xl font-bold italic tracking-tighter">
                  CodeWithSitaram
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Teaching **Data Structures & Algorithms** to help students
                master coding interviews.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@codewithsitaram"
              target="_blank"
              rel="noreferrer"
              className="relative z-10 w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              <PlayCircle size={20} />
              Visit Channel
            </a>

            <Video className="absolute -bottom-6 -right-6 text-white/5 w-32 h-32 -rotate-12 group-hover:text-red-500/10 transition-colors" />
          </div>

          {/* Card 5: Education Card */}
          <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex items-center gap-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 text-3xl">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-lg font-bold">JIS College of Engineering</h3>
              <p className="text-sm text-gray-400">
                B.Tech in Information Technology (3rd Year)
              </p>
              <p className="text-xs text-blue-500 font-mono mt-1">
                2023 - 2027
              </p>
            </div>
          </div>

          {/* Card 6: Coding Platforms (Side Grid) */}
          <div className="md:col-span-2 md:row-span-1 grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
            <a
              href="https://leetcode.com/u/sitaramkr831/"
              target="_blank"
              className="bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between px-6 py-4 hover:bg-white/10 transition-all group"
            >
              <span className="font-bold">LeetCode</span>
              <SiLeetcode className="text-2xl text-[#FFA116] group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="https://codeforces.com/profile/sitaramSahu"
              target="_blank"
              className="bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between px-6 py-4 hover:bg-white/10 transition-all group"
            >
              <span className="font-bold">Codeforces</span>
              <SiCodeforces className="text-2xl text-blue-400 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="https://www.codechef.com/users/sitaramsahu"
              target="_blank"
              className="bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between px-6 py-4 hover:bg-white/10 transition-all group"
            >
              <span className="font-bold">CodeChef</span>
              <SiCodechef className="text-2xl text-[#5B4638] group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
