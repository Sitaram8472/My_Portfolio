import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import img1 from "../../assets/img1.png";

const About = () => {
  return (
    <div
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-[#321580] to-[#1a0a3d] text-white border-b border-white/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2">About Me</h1>
        <p className="text-center text-gray-300 mb-12">
          Let me introduce myself
        </p>

        {/* Content */}
        <div className="flex flex-wrap items-center justify-between gap-8">
          {/* Left Side: Text */}
          <div className="flex-1 space-y-6">
            {/* About Text */}
            <div className="rounded-2xl bg-white/10 p-5 text-center text-sm leading-7">
              <p className="mb-3">
                Hello! I'm{" "}
                <span className="text-yellow-400 font-semibold">
                  Sitaram Sahu
                </span>{" "}
                Currently, I am pursuing my{" "}
                <strong>B.Tech in Information Technology</strong> at{" "}
                <strong>JIS College of Engineering</strong>. I completed my
                schooling from the <strong>CBSE board</strong> (Class 10 & 12).
              </p>

              <p className="mb-3">
                I am deeply passionate about{" "}
                <strong>coding and problem-solving</strong>, and I enjoy solving
                Data Structures & Algorithms problems. I actively practice
                coding on platforms like <strong>LeetCode</strong>,{" "}
                <strong>CodeChef</strong>, and <strong>CodeForces</strong>.
              </p>

              <p>
                Apart from academics, I am currently learning{" "}
                <strong>full-stack development</strong> using{" "}
                <strong>React.js, Node.js, Express, and MongoDB</strong>. I also
                enjoy building projects with <strong>JavaScript</strong> and
                plan to explore frameworks like React further.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="mt-6 mb-4 text-2xl font-bold text-center w-64 bg-gradient-to-r from-purple-600 to-blue-400 rounded-2xl mx-auto">
                Technical Skills
              </h2>
              <ul className="space-y-3">
                <li className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-transform hover:-translate-y-1">
                  <strong>Language/Technologies: </strong> C | Python | Java
                </li>
                <li className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-transform hover:-translate-y-1">
                  <strong>Web Development: </strong> Node.js | Express | ReactJs
                  | MongoDB | JavaScript | Bootstrap | HTML | CSS |TailwindCSS
                </li>
                <li className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-transform hover:-translate-y-1">
                  <strong>Relevant Coursework: </strong> Data Structures &
                  Algorithms | Object-Oriented Programming | Operating System
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Profile Image + CP Links */}
          <div className="flex flex-col items-center">
            <img
              src={img1}
              alt="Sitaram Sahu"
              className="w-72 h-72 rounded-full border-4 border-yellow-400 shadow-lg shadow-purple-700/50 mb-6"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">CP Profile</h2>
              <div className="flex gap-5 justify-center text-yellow-400 text-2xl">
                <a
                  href="https://codeforces.com/profile/sitaramSahu"
                  target="_blank"
                  rel="noreferrer"
                  className="transition transform hover:scale-125"
                >
                  <SiCodeforces />
                </a>
                <a
                  href="https://leetcode.com/u/sitaramkr831/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition transform hover:scale-125"
                >
                  <SiLeetcode />
                </a>
                <a
                  href="https://www.codechef.com/users/sitaramsahu"
                  target="_blank"
                  rel="noreferrer"
                  className="transition transform hover:scale-125"
                >
                  <SiCodechef />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
