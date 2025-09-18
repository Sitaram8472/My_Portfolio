import { useState } from "react";
import Hackathon from "../../assets/HackathonImg.png";
import Portofolio from "../../assets/Portofolio.png";

const projects = [
  {
    id: 1,
    title: "Recipedia",
    description:
      "A recipe-sharing platform where users can explore, create, and share recipes. Includes authentication, image uploads, and category filtering.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/recipedia.png",
    github: "https://github.com/Sitaram8472/RECIPEDIA",
    liveDemo: "https://recipedia.vercel.app",
  },
  {
    id: 2,
    title: "Hackathon Upload",
    description:
      "A simple and responsive registration form that collects participant details and stores them securely for easy management, making hackathon registrations smooth and organized.",
    technologies: ["React", "TailWindCSS"],
    image: Hackathon,
    github: "https://github.com/Sitaram8472/Hackathon_Upload",
    liveDemo: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "My personal portfolio website to showcase my projects, skills, and contact information with a smooth, modern UI.",
    technologies: ["React", "Tailwind CSS"],
    image: Portofolio,
    github: "https://github.com/Sitaram8472/Portfolio_React",
    liveDemo: "#",
  },
];

const Project = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div
      id="projects"
      className="py-20 px-5 bg-gradient-to-br from-[#321580] to-[#1a0a3d] text-center border-b border-white/30"
    >
      <h2 className="text-4xl font-bold mb-10 text-white">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project.id)}
            className={`cursor-pointer bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border 
              transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] 
              ${
                selectedCard === project.id
                  ? "border-[#60a5fa] shadow-[0_0_20px_#60a5fa]"
                  : "border-white/20 hover:border-[#60a5fa] hover:shadow-[0_0_15px_#60a5fa]"
              }`}
          >
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-all duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="mb-3 text-gray-200 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/20 text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#231387] hover:bg-[#4837c2] text-white text-sm rounded-md transition duration-300"
                >
                  View Code
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
