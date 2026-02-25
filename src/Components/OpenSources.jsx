import React, { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import {
  ExternalLink,
  FolderOpen,
  GitBranch,
  Terminal,
  Users,
  GraduationCap,
  Code2,
  MessageSquare,
} from "lucide-react";

const organizationData = {
  GSSoC: [
    {
      name: "AnimateItNow",
      description:
        "Contributed to frontend components and fixed API issues to improve animation rendering.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sitaram8472/AnimateItNow",
      impact: "UI Bug Fixes",
    },
    {
      name: "CodeCanvas",
      description:
        "Enhanced the component library UI and optimized responsive layouts.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sitaram8472/CodeCanvas",
      impact: "Feature Addition",
    },
    {
      name: "RECIPEDIA",
      description:
        "Improved dashboard UI and optimized backend routes for faster recipe loading.",
      tech: ["React", "Node.js", "EJS"],
      link: "https://github.com/Sitaram8472/RECIPEDIA",
      impact: "Performance",
    },
    {
      name: "Job-Portal",
      description:
        "Redesigned the employer dashboard and integrated EJS templates.",
      tech: ["Node.js", "EJS", "Tailwind"],
      link: "https://github.com/Sitaram8472/Job-Portal",
      impact: "UI Redesign",
    },
  ],
  Mentorship: [
    {
      name: "MERN Stack Guidance",
      description:
        "Mentoring juniors in building full-stack applications using React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://www.linkedin.com/in/sitaram-sahu/",
      impact: "10+ Students",
      isMentor: true,
    },
    {
      name: "Open Source Onboarding",
      description:
        "Conducting workshops on Git, GitHub, and how to successfully contribute to GSSoC.",
      tech: ["Git", "GitHub", "Workflow"],
      link: "https://github.com/Sitaram8472",
      impact: "5+ Workshops",
      isMentor: true,
    },
    {
      name: "DSA Strategy",
      description:
        "Helping peers at JIS College solve algorithmic challenges on LeetCode and Codeforces.",
      tech: ["DSA", "Logic", "C++"],
      link: "https://leetcode.com/u/sitaramkr831/",
      impact: "Daily Support",
      isMentor: true,
    },
  ],
  Hacktoberfest: [
    {
      name: "Component-Library",
      description:
        "Added a comprehensive dark mode feature and responsive mobile navbar.",
      tech: ["React", "TailwindCSS"],
      link: "https://github.com/Sitaram8472/component-library",
      impact: "Accessibility",
    },
    {
      name: "Recode-Website",
      description:
        "Refactored legacy CSS into modern Tailwind utility classes.",
      tech: ["React", "TailwindCSS"],
      link: "https://github.com/Sitaram8472/recode-website",
      impact: "Code Quality",
    },
  ],
  "Open Source India": [
    {
      name: "RAKTDAAN",
      description:
        "Integrated an NLP model to improve blood donor query understanding.",
      tech: ["Python", "Flask", "NLP"],
      link: "https://github.com/Sitaram8472/RAKTDAAN",
      impact: "AI Integration",
    },
    {
      name: "RuRal-ReTreats",
      description: "Developed a booking engine for eco-friendly rural tourism.",
      tech: ["Python", "Flask", "NLP"],
      link: "https://github.com/Sitaram8472/RuRal-ReTreats",
      impact: "Backend Logic",
    },
  ],
  SSoC: [
    {
      name: "EcoTracker",
      description:
        "Built a scalable REST API for tracking individual carbon footprints.",
      tech: ["Django", "PostgreSQL"],
      link: "https://github.com/Sitaram8472",
      impact: "API Design",
    },
  ],
};

const OpenSources = () => {
  const [activeTab, setActiveTab] = useState("GSSoC");

  return (
    <section
      id="opensources"
      className="min-h-screen py-24 px-6 bg-[#0f0721] text-white overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Impact &{" "}
            <span className="text-blue-500 text-glow">Contributions</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            From merging pull requests in **GSSoC 2024** to mentoring the next
            generation of developers at **JIS College of Engineering**, I am
            committed to community-driven growth.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(organizationData).map((org) => (
            <button
              key={org}
              onClick={() => setActiveTab(org)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 border flex items-center gap-2 ${
                activeTab === org
                  ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {org === "Mentorship" && <Users size={16} />}
              {org}
            </button>
          ))}
        </div>

        {/* Project & Mentorship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
          {organizationData[activeTab].map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`p-3 rounded-2xl ${item.isMentor ? "bg-purple-600/10 text-purple-400" : "bg-blue-600/10 text-blue-400"}`}
                >
                  {item.isMentor ? (
                    <GraduationCap size={24} />
                  ) : (
                    <GitBranch size={24} />
                  )}
                </div>
                <span
                  className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 border rounded-full ${
                    item.isMentor
                      ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                      : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                  }`}
                >
                  {item.impact}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors italic">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono font-bold text-gray-500 border border-white/5 px-2 py-1 rounded-md bg-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {item.isMentor ? (
                    <SiLinkedin size={18} />
                  ) : (
                    <SiGithub size={18} />
                  )}
                  {item.isMentor ? "Connect" : "Codebase"}
                </a>
              </div>

              {item.isMentor ? (
                <MessageSquare className="absolute -bottom-4 -right-4 text-white/5 w-24 h-24 rotate-12 group-hover:text-purple-500/10 transition-colors" />
              ) : (
                <Terminal className="absolute -bottom-4 -right-4 text-white/5 w-24 h-24 rotate-12 group-hover:text-blue-500/10 transition-colors" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSources;
