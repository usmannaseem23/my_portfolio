// app/page.tsx
"use client"
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "../components/Footer";



export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Contact />
      <Footer />
     
    </div>
  );
}
