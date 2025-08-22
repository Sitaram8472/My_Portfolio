// import section
import NavBarSection from './Components/NavBar/NavBarSection'
import Home from './Components/Home/Home';
import About from './Components/AboutSection/About';
import Project from './Components/ProjectSection/Project';
import Achievements from './Components/AchievementSection/Achievements';
import Contact from './Components/ContactSection/Contact';
import Footer from './Components/FooterSection/Footer';

function App() {
  return (
    <>
     <NavBarSection/>
     <Home/>
     <About/>
     <Project/>
     <Achievements/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;
