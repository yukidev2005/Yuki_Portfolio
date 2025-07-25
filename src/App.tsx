import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Introducation from "./components/Introducation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Motivation from "./components/Motivation";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <Introducation />

        {/* About Section */}
        <AboutMe />

        {/* Skills Section */}
        <Skills />

        {/* Timeline Section */}
        <Timeline />

        {/* Projects Section */}
        <Projects />

        {/* Motivation Section */}
        <Motivation />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
