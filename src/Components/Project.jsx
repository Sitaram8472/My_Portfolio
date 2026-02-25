import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { ExternalLink, Code2, Layers } from "lucide-react";
import Hackathon from "../assets/HackathonImg.png";
import Portofolio from "../assets/Portofolio.png";

const projects = [
  {
    id: 1,
    title: "Academic Resource Portal",
    description:
      "A centralized MERN-stack platform for students and faculty featuring role-based access and scalable UI architecture.",
    technologies: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
    ],
    github: "https://github.com/Sitaram8472/Academic-Resource-Portal",
    liveDemo: "#",
    image: "/images/academic_portal.png", // Use actual path
    accent: "shadow-blue-500/20",
  },
  {
    id: 2,
    title: "Docs Mini App",
    description:
      "An interactive document manager with drag-and-drop functionality and smooth framer-motion animations.",
    technologies: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "JS", icon: <SiJavascript className="text-yellow-400" /> },
    ],
    github: "https://github.com/Sitaram8472/Docs_mini_app-React-",
    liveDemo: "#",
    image: "/images/docs_app.png",
    accent: "shadow-purple-500/20",
  },
  {
    id: 3,
    title: "Hackathon Hub",
    description:
      "Streamlined registration and participant management system designed for high-traffic developer events.",
    technologies: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    image: Hackathon,
    github: "https://github.com/Sitaram8472/Hackathon_Upload",
    liveDemo: "#",
    accent: "shadow-green-500/20",
  },
  {
    id: 4,
    title: "Digital Portfolio",
    description:
      "This very site. A high-performance portfolio showcasing MERN stack proficiency and modern UI patterns.",
    technologies: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    image: Portofolio,
    github: "https://github.com/Sitaram8472/Portfolio_React",
    liveDemo: "#",
    accent: "shadow-pink-500/20",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 bg-[#0f0721] text-white overflow-hidden relative"
    >
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            SELECTED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              WORKS
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gray-700"></div>
            <p className="text-gray-400 font-mono tracking-widest uppercase text-sm">
              Case Studies
            </p>
            <div className="h-[1px] w-12 bg-gray-700"></div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-4 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 shadow-2xl ${project.accent}`}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-[2rem] bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0721] to-transparent opacity-80"></div>

                {/* Floating Tech Tag */}
                <div className="absolute top-6 left-6 flex gap-2">
                  {project.technologies.slice(0, 2).map((tech, i) => (
                    <div
                      key={i}
                      className="p-2 bg-[#0f0721]/60 backdrop-blur-md rounded-xl border border-white/10 text-xl"
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <SiGithub size={24} />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 h-20 overflow-hidden line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-gray-400 flex items-center gap-2 group-hover:border-blue-500/30 group-hover:text-gray-300 transition-all"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Background Glow Decoration */}
              <Code2 className="absolute bottom-10 right-10 w-32 h-32 text-white/[0.02] -rotate-12 pointer-events-none group-hover:text-blue-500/5 transition-colors" />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6 font-mono text-sm uppercase tracking-tighter">
            Looking for more?
          </p>
          <a
            href="https://github.com/Sitaram8472"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-bold group"
          >
            <Layers className="text-blue-500 group-hover:rotate-12 transition-transform" />
            VIEW ALL ARCHIVES
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
