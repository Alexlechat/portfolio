import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Parcours from "@/components/Parcours";
import Projets from "@/components/Projets";
import Competences from "@/components/Competences";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <Parcours />
      <Projets />
      <Competences />
      <Contact />
      <Footer />
    </main>
  );
}
