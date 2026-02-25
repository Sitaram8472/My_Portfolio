import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Project from "./Components/Project.jsx";
import Achievements from "./Components/Achievements.jsx";
import OpenSources from "./Components/OpenSources.jsx"; // Fixed typo (added 'c')
import Contact from "./Components/Contact.jsx";

// Entry Flow Components
import FrontPage from "./Components/FrontPage.jsx";
import ProfileMenu from "./Components/ProfileMenu.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Step 1: Entry Point */}
        <Route path="/" element={<FrontPage />} />
        {/* Step 2: The Selection Menu */}
        <Route path="/menu" element={<ProfileMenu />} />
        {/* Step 3: Specific Sections */}
        <Route path="/home" element={<Home />} /> {/* Changed to lowercase */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />{" "}
        {/* Matched plural name */}
        <Route path="/opensources" element={<OpenSources />} />
      </Routes>
    </>
  );
}

export default App;
