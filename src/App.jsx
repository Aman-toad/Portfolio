import Index from "./sections/Index";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills.jsx";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  return(
    <div className="min-h-screen">
      <CustomCursor/>
      <Index/>
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  )
};
