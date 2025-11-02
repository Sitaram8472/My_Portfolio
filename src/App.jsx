// import section
import NavBarSection from './Components/NavBar/NavBarSection.jsx'
import Home from './Components/Home/Home.jsx';
import About from './Components/AboutSection/About.jsx';
import Project from './Components/ProjectSection/Project.jsx';
import Achievements from './Components/AchievementSection/Achievements.jsx';
import OpenSources from './Components/OpenSources/OpenSoures.jsx';
import Contact from './Components/ContactSection/Contact.jsx';
import Footer from './Components/FooterSection/Footer.jsx';


function App() {
  return (
    <>
     <NavBarSection/>
     <Home/>
     <About/>
     <Project/>
     <Achievements/>
     <OpenSources/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;
