import Activities from "./components/Home/Activities"
import ContactSection from "./components/Home/Contact"
import Education from "./components/Home/Education"
import Footer from "./components/Home/Footer"
import Hero from "./components/Home/Hero"
import FeaturedProjects from "./components/Home/Projects"
import SkillsAndServices from "./components/Home/Skills"
import Navbar from "./components/Includes/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SkillsAndServices />
      <Education />
      <FeaturedProjects />
      <Activities />
      <ContactSection />
      <Footer/>
    </div>
  )
}

export default App