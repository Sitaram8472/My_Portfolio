import React from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Terminal,
  Globe,
} from "lucide-react";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 bg-[#0f0721] text-white overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Whether it's about **MERN stack** projects, **open-source**
            collaborations, or **DSA** discussions, I'm always open to
            connecting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Connect Cards */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Contact Info Card */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Terminal className="text-blue-500" /> Contact Info
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">
                      Email
                    </p>
                    <p className="text-lg font-medium text-gray-200">
                      sitaramsahu8472@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-purple-600/10 rounded-2xl text-purple-400 group-hover:bg-purple-600/20 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">
                      Location
                    </p>
                    <p className="text-lg font-medium text-gray-200">
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    icon: <Github size={20} />,
                    link: "https://github.com/Sitaram8472",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin size={20} />,
                    link: "https://www.linkedin.com/in/sitaram-sahu/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <SiLeetcode size={20} />,
                    link: "https://leetcode.com/u/sitaramkr831/",
                    label: "LeetCode",
                  },
                  {
                    icon: <SiCodeforces size={20} />,
                    link: "https://codeforces.com/profile/sitaramSahu",
                    label: "Forces",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all group"
                  >
                    <span className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all mb-2">
                      {social.icon}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-500 group-hover:text-blue-400">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Status Badge */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 p-6 rounded-3xl flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">
                Currently active at **JIS College of Engineering**
              </span>
              <span className="flex h-3 w-3 rounded-full bg-blue-500 animate-pulse"></span>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="order-1 lg:order-2">
            <form
              action="https://formspree.io/f/xreajqpr"
              method="POST"
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 italic">
                  Send a Message
                </h3>
                <p className="text-sm text-gray-500">
                  Expect a response within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-4 rounded-2xl bg-[#0f0721] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all group-hover:border-white/20"
                  />
                </div>

                <div className="group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-4 rounded-2xl bg-[#0f0721] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all group-hover:border-white/20"
                  />
                </div>

                <div className="group">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                    className="w-full p-4 rounded-2xl bg-[#0f0721] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all group-hover:border-white/20 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full p-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white font-bold text-lg shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  <Send size={20} />
                  Dispatch Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
