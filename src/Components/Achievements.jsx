import React from "react";
import { Trophy, Award, Star, Code, Users, Rocket, Target } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: "GSSoC 2024 Contributor",
    description:
      "Merged 15+ PRs across 5 repositories. Improved documentation and fixed critical UI bugs.",
    tag: "Open Source",
    color: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    title: "700+ DSA Problems",
    description:
      "Consistent problem solver on LeetCode and CodeChef, focusing on recursion and dynamic programming.",
    tag: "Problem Solving",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: "Full-Stack Specialist",
    description:
      "Successfully deployed 2+ production-ready MERN projects with secure authentication.",
    tag: "Development",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    icon: <Target className="w-8 h-8 text-green-400" />,
    title: "GSoC 2026 Aspirant",
    description:
      "Currently preparing and contributing to organizations to secure a spot in GSoC 2026.",
    tag: "Future Goal",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
  },
  {
    icon: <Star className="w-8 h-8 text-pink-400" />,
    title: "Hackathon Finalist",
    description:
      "Built innovative prototypes under 48-hour deadlines, focusing on rapid MERN deployment.",
    tag: "Competition",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-400" />,
    title: "Community Mentor",
    description:
      "Mentoring juniors at JIS College in web development and open-source workflows.",
    tag: "Leadership",
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen py-24 px-6 bg-[#0f0721] overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
            Milestones & <span className="text-blue-500">Impact</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A track record of technical excellence, from solving complex
            algorithms to contributing to global open-source projects.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achieve, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border ${achieve.border} hover:bg-white/10 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Inner Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achieve.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {achieve.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 py-1 px-3 border border-white/10 rounded-full bg-white/5">
                    {achieve.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {achieve.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {achieve.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
