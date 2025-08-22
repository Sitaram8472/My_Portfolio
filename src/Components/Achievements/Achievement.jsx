import "./Achievement.css";
import { Trophy, Award, Star } from "lucide-react"; // icons

const achievements = [
  {
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    title: "Open Source Contribution",
    description:
      "Contributed to open-source projects under GSSoC and GitHub repositories by fixing bugs and adding new features.",
  },
  {
    icon: <Award className="w-10 h-10 text-blue-400" />,
    title: "DSA Problem Solving",
    description:
      "Solved 700+ Data Structures & Algorithms problems on platforms like LeetCode and CodeChef.",
  },
  {
    icon: <Star className="w-10 h-10 text-green-400" />,
    title: "MERN Stack Projects",
    description:
      "Built full-stack apps using React, Node.js, Express, and MongoDB. Created scalable and responsive solutions.",
  },
 
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="achievements-title">🏆 Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((achieve, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achieve.icon}</div>
              <h3 className="achievement-heading">{achieve.title}</h3>
              <p className="achievement-description">{achieve.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
