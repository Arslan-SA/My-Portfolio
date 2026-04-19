import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollCanvas from "./components/ScrollCanvas";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ParallaxSection from "./components/ParallaxSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ScrollCanvas />
      <About />
      <Skills />
      <Education />
      <ParallaxSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
