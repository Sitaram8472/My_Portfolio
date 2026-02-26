import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Code, Trophy, Github, Mail, Youtube } from "lucide-react";

const ProfileMenu = () => {
  // Back to your original labels and routes
  const sections = [
    {
      label: "Home",
      to: "/home",
      hex: "#3b82f6",
      icon: <Home size={20} />,
    },
    {
      label: "About",
      to: "/about",
      hex: "#a855f7",
      icon: <User size={20} />,
    },
    {
      label: "Projects",
      to: "/projects",
      hex: "#f97316",
      icon: <Code size={20} />,
    },
    {
      label: "YouTube",
      to: "https://www.youtube.com/@codewithsitaram",
      hex: "#ef4444",
      icon: <Youtube size={20} className="text-red-500" />,
      isExternal: true,
    },
    {
      label: "Achievements",
      to: "/achievements",
      hex: "#22c55e",
      icon: <Trophy size={20} />,
    },
    {
      label: "Open Sources",
      to: "/opensources",
      hex: "#eab308",
      icon: <Github size={20} />,
    },
    {
      label: "Contact",
      to: "/contact",
      hex: "#ef4444",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0f0721] flex items-center justify-center p-4">
      <style>{`
        @keyframes spin-gradient {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .button-wrapper::before {
          content: "";
          position: absolute;
          inset: -150%;
          background: conic-gradient(
            from 0deg,
            var(--glow-color),
            var(--glow-color-transparent),
            var(--glow-color)
          );
          animation: spin-gradient 4s linear infinite;
        }
      `}</style>

      <div className="max-w-3xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 shadow-2xl flex flex-col items-center">
        <div className="mb-8">
          <div className="text-white text-3xl font-extrabold tracking-tighter italic">
            PORT<span className="text-blue-500">FOLIO</span>
          </div>
        </div>

        {/* Small box grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
          {sections.map((section, index) => {
            const cardContent = (
              <div
                className="button-wrapper relative block p-[1.5px] rounded-xl overflow-hidden hover:scale-105 transition duration-300 active:scale-95 group w-full"
                style={{
                  "--glow-color": section.hex,
                  "--glow-color-transparent": `${section.hex}30`,
                }}
              >
                {/* Inner Content - Smaller Padding */}
                <div className="relative z-10 bg-[#150a24] h-full w-full rounded-[calc(0.75rem-1px)] py-5 px-2 text-white flex flex-col items-center justify-center gap-2">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-90 text-center">
                    {section.label}
                  </span>
                </div>
              </div>
            );

            return section.isExternal ? (
              <a
                key={index}
                href={section.to}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                {cardContent}
              </a>
            ) : (
              <Link key={index} to={section.to} className="w-full">
                {cardContent}
              </Link>
            );
          })}
        </div>

        <div className="mt-10 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default ProfileMenu;
