import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesBento from "@/components/CapabilitiesBento";
import LabSandbox from "@/components/LabSandbox";
import Process from "@/components/Process";
import BlogsSection from "@/components/BlogsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <CapabilitiesBento />
      <LabSandbox />
      <Process />
      <BlogsSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
