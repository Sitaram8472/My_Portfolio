import React from "react";

const gssocProjects = [
  {
    name: "CodeZen",
    description: "Contributed to frontend components and fixed API issues.",
    tech: ["React", "Express", "MongoDB"],
    link: "https://github.com/example/CodeZen",
  },
  {
    name: "EduHub",
    description: "Improved dashboard UI and optimized backend routes.",
    tech: ["Node.js", "EJS", "CSS"],
    link: "https://github.com/example/EduHub",
  },
];

const hacktoberfestProjects = [
  {
    name: "DevPortfolio",
    description: "Added new dark mode feature and responsive navbar.",
    tech: ["React", "TailwindCSS"],
    link: "https://github.com/example/DevPortfolio",
  },
];

const openSourceIndiaProjects = [
  {
    name: "AI Chatbot",
    description: "Integrated NLP model for better user query understanding.",
    tech: ["Python", "Flask", "NLP"],
    link: "https://github.com/example/AI-Chatbot",
  },
];

const socialSummerProjects = [
  {
    name: "EcoTracker",
    description: "Built REST API for carbon footprint tracking app.",
    tech: ["Django", "PostgreSQL"],
    link: "https://github.com/example/EcoTracker",
  },
];

// ---------- Section Component ----------
const ProjectSection = ({ title, projects }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-5 border rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            {project.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
          <p className="text-xs text-gray-500 mt-2">
            <strong>Tech:</strong> {project.tech.join(", ")}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-500 hover:underline text-sm"
          >
            🔗 View Project
          </a>
        </div>
      ))}
    </div>
  </div>
);

// ---------- Main Component ----------
const OpenSources = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        🌍 Open Source Contributions
      </h1>

      <ProjectSection
        title="GSSoC (GirlScript Summer of Code)"
        projects={gssocProjects}
      />
      <ProjectSection title="Hacktoberfest" projects={hacktoberfestProjects} />
      <ProjectSection
        title="Open Source India"
        projects={openSourceIndiaProjects}
      />
      <ProjectSection
        title="Social Summer of Code"
        projects={socialSummerProjects}
      />
    </div>
  );
};

export default OpenSources;
