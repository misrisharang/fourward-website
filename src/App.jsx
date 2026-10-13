import { useCallback, useEffect, useRef, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { SiteContext } from "@/context/site";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Signature } from "@/components/Signature";
import { Lanes } from "@/components/Lanes";
import { Why } from "@/components/Why";
import { Metrics } from "@/components/Metrics";
import { CaseStudies } from "@/components/CaseStudies";
import { Reel } from "@/components/Reel";
import { Process } from "@/components/Process";
import { Dashboard } from "@/components/Dashboard";
import { Ways } from "@/components/Ways";
import { About } from "@/components/About";
import { Proof } from "@/components/Proof";
import { Insights } from "@/components/Insights";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";
import Admin from "@/pages/Admin";

const Home = () => (
  <main>
    <Nav />
    <Hero />
    <Marquee />
    <Signature />
    <Lanes />
    <Why />
    <Metrics />
    <CaseStudies />
    <Reel />
    <Process />
    <Dashboard />
    <Ways />
    <About />
    <Proof />
    <Insights />
    <FinalCTA />
    <Footer />
  </main>
);

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ duration: 1.15 });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((target) => {
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(target, { duration: 1.4 });
    else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <SiteContext.Provider value={{ contactOpen, openContact, closeContact, scrollTo, lenisRef }}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="grain-overlay pointer-events-none fixed inset-0 z-[5] opacity-[0.05]" aria-hidden="true" />
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <ContactModal />
      </BrowserRouter>
    </SiteContext.Provider>
  );
}
