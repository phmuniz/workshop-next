import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Servicos from "@/components/Servicos";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home" className="w-100">
      
      <Navbar />

      <Hero />

      <Servicos />

      <footer className="h-[200px] bg-purple-600 mt-20">

      </footer>
    </div>
  );
}
