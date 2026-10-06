import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursorGlow from '@/components/CustomCursorGlow';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Salesforce from '@/components/Salesforce';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07080c] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Subtle Desktop Ambient Cursor Follower */}
      <CustomCursorGlow />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Salesforce />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
