const projects = [
  {
    title: "Recipedia",
    description:
      "A recipe-sharing platform where users can explore, create, and share recipes.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Sitaram8472/RECIPEDIA",
  },
  {
    title: "JavaScript Calculator",
    description:
      "A fully functional calculator built with vanilla JavaScript including history and trigonometry features.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Sitaram8472/JS-Calculator",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website to showcase my projects, skills, and contact information.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/Sitaram8472/Portfolio",
  },
];

const Project = () => {
  return (
    <div
      id="projects"
      className="py-20 px-5 bg-gradient-to-br from-[#321580] to-[#1a0a3d] text-center border-b border-white/30"
    >
      <h2 className="text-4xl font-bold mb-10 text-white">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h3>
            <p className="mb-3 text-white">{project.description}</p>
            <p className="mb-4 text-sm font-bold text-gray-300">
              Tech Used: {project.tech.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-[#231387] hover:bg-[#4837c2] text-white rounded-md transition duration-300"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
