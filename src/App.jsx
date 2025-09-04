import Index from "./sections/Index";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills.jsx";
import Footer from "./components/Footer";

export default function App() {
  return(
    <div>
      <Index/>
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  )
};
