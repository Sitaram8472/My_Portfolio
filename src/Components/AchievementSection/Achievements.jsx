import { Trophy, Award, Star, Code, Briefcase, Users } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    title: "Open Source Contributor – GSSoC 2024",
    description:
      "Contributed 15+ pull requests across 5+ GitHub repositories under GSSoC 2024, fixing bugs, improving documentation, and adding features while collaborating with open-source maintainers.",
  },
  {
    icon: <Award className="w-10 h-10 text-blue-400" />,
    title: "DSA Problem Solving – 700+ Problems",
    description:
      "Solved 700+ Data Structures & Algorithms problems on LeetCode, CodeChef, and GeeksforGeeks, building strong problem-solving, recursion, and algorithmic skills.",
  },
  {
    icon: <Star className="w-10 h-10 text-green-400" />,
    title: "Full-Stack Project Development",
    description:
      "Built 2 full-stack projects with modern UI, authentication, REST APIs, and database integrations, delivering scalable and production-ready solutions.",
  },
  {
    icon: <Code className="w-10 h-10 text-purple-400" />,
    title: "Hackathon Participation",
    description:
      "Participated in hackathons and built innovative projects within tight deadlines, focusing on teamwork, rapid prototyping, and real-world problem solving.",
  },
  // {
  //   icon: <Briefcase className="w-10 h-10 text-orange-400" />,
  //   title: "Internship Experience",
  //   description:
  //     "Worked as a Web Development Intern, contributing to backend APIs and frontend UI components, gaining hands-on experience in real-world production systems.",
  // },
  {
    icon: <Users className="w-10 h-10 text-pink-400" />,
    title: "Community Engagement",
    description:
      "Actively engaged in developer communities by sharing coding tips, helping peers debug issues, and mentoring juniors in problem-solving and project building.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-gradient-to-b from-[#1e1b4b] to-[#2d1b69] py-16 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">🏆 Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achieve, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-white/20"
            >
              <div className="flex justify-center mb-4 animate-bounce">
                {achieve.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{achieve.title}</h3>
              <p className="text-gray-300">{achieve.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
