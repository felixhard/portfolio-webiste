import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-900 pt-16">
      {" "}
      {/* Added pt-16 here */}
      <div className="bg-gradient-to-b from-slate-900 to-black">
        <Navbar />
        <div className="container mx-auto px-12 py-4">
          {" "}
          {/* Removed mt-24 */}
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
