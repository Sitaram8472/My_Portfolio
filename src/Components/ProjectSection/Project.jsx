import "./Project.css";

const projects = [
  {
    title: "Campus Notes",
    description:
      "A platform for B.Tech students to access semester notes, previous year question papers, and short notes for exams.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/campus-notes",
  },
  {
    title: "DSA Practice Tracker",
    description:
      "A web app to track solved problems from LeetCode & CodeChef, with progress visualization and topic-wise categorization.",
    tech: ["MERN Stack", "Chart.js"],
    link: "https://github.com/yourusername/dsa-practice-tracker",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React showcasing projects, experience, and open-source contributions.",
    tech: ["React", "Vite", "CSS"],
    link: "https://github.com/yourusername/portfolio",
  },
  
];

const Project = () => {
  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">Tech Used: {project.tech.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
