import "./About.css";
import profileImg from "../../assets/profileimg.jpg";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const About = () => {
  // const details = [
  //   { id: 1,

  //   }
  // ];

  return (
    <div className="about" id="about">
      <div className="about-container">
        {/* Heading */}
        <h1>About Me</h1>
        <p className="subtitle">Let me introduce myself</p>

        {/* Content */}
        <div className="about-content">
          {/* Left Side: Text */}
          <div className="about-text">
            <div className="aboutmy">
              <p className="intro">
                Hello! I'm <span className="highlight">Sitaram Sahu</span> from
                <span className="highlight"> Darbhanga, Bihar</span>. Currently,
                I am pursuing my{" "}
                <strong>B.Tech in Information Technology </strong>
                at <strong>JIS College of Engineering</strong>. I completed my
                schooling from the <strong>CBSE board</strong> (Class 10 & 12).
              </p>

              <p className="intro">
                I am deeply passionate about{" "}
                <strong>coding and problem-solving</strong>, and I enjoy solving
                Data Structures & Algorithms problems. I actively practice
                coding on platforms like <strong>LeetCode</strong>,{" "}
                <strong>CodeChef</strong>, and <strong>CodeForces</strong>.
              </p>

              <p>
                Apart from academics, I am currently learning{" "}
                <strong>full-stack development</strong>
                using <strong>React.js, Node.js, Express, and MongoDB</strong>.
                I also enjoy building projects with <strong>JavaScript</strong>{" "}
                and plan to explore frameworks like React further.
              </p>
            </div>

            {/* Experience Section */}
            <div className="experience">
              <h2>Technical-Skills</h2>
              <ul>
                <li>
                  <strong>Language/Technologies : </strong> C | Python | java
                </li>
                <li>
                  <strong>Web Development : </strong>
                  ReactJs | MongoDB | JavaScript | Bootstrap | Html | CSS
                </li>
                <li>
                  <strong>Relevant Coursework : </strong>
                  Data Structure and algorithms | Objects oriented programming |
                  operating system
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="about-image">
            <img src={profileImg} alt="Sitaram Sahu" />
            <div className="cp-main">
              <h2>CP Profile</h2>
              <div className="cp">
                <a
                  href="https://codeforces.com/profile/sitaramSahu"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<SiCodeforces />}
                </a>
                <a
                  href="https://leetcode.com/u/sitaramkr831/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<SiLeetcode />}
                </a>
                <a
                  href="https://www.codechef.com/users/sitaramsahu"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<SiCodechef />}
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
