import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing Framer Motion
import { Home, User, Code, Trophy, Github, Mail, Youtube } from "lucide-react";

const ProfileMenu = () => {
  const sections = [
    {
      label: "Home",
      to: "/home",
      color: "hover:shadow-blue-500/50",
      icon: <Home />,
    },
    {
      label: "About",
      to: "/about",
      color: "hover:shadow-purple-500/50",
      icon: <User />,
    },
    {
      label: "Projects",
      to: "/projects",
      color: "hover:shadow-orange-500/50",
      icon: <Code />,
    },
    {
      label: "YouTube",
      to: "https://www.youtube.com/@codewithsitaram",
      color: "hover:shadow-red-500/50",
      icon: <Youtube className="text-red-500" />,
      isExternal: true,
    },
    {
      label: "Achievements",
      to: "/achievement",
      color: "hover:shadow-green-500/50",
      icon: <Trophy />,
    },
    {
      label: "Open Sources",
      to: "/opensources",
      color: "hover:shadow-yellow-500/50",
      icon: <Github />,
    },
    {
      label: "Contact",
      to: "/contact",
      color: "hover:shadow-red-500/50",
      icon: <Mail />,
    },
  ];

  // Animation variants for the "Pop-In" effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This makes cards pop one by one
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.5, opacity: 0 }, // Starts small and invisible
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }, // The "Pop" physics
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#0f0721] flex items-center justify-center p-6 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center"
      >
        <div className="mb-8">
          <div className="text-white text-4xl font-extrabold tracking-tighter italic">
            PORT<span className="text-blue-500">FOLIO</span>
          </div>
        </div>

        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10 tracking-wide">
          Explore My Work
        </h2>

        {/* The Grid with Pop-in Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {sections.map((section, index) => {
            const content = (
              <motion.button
                variants={cardVariants} // Applying the pop effect
                whileHover={{ scale: 1.05, y: -5 }} // Subtle hover bounce
                whileTap={{ scale: 0.95 }}
                className={`w-full py-8 px-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl transition-all shadow-lg flex flex-col items-center gap-3 ${section.color} hover:bg-white/20 hover:border-white/40`}
              >
                <span className="text-3xl">{section.icon}</span>
                <span className="text-sm uppercase tracking-widest">
                  {section.label}
                </span>
              </motion.button>
            );

            if (section.isExternal) {
              return (
                <a
                  key={index}
                  href={section.to}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={index} to={section.to} className="group">
                {content}
              </Link>
            );
          })}
        </div>

        <div className="mt-12 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default ProfileMenu;
