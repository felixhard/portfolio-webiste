import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1E1E1E]">
        <Navbar/>
      <div classname="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <div></div>
      </div>
    </main>
  );
}