import { useReveal } from "@/hooks/use-reveal";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Philosophy from "@/components/site/Philosophy";
import Menu from "@/components/site/Menu";
import Gallery from "@/components/site/Gallery";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import Booking from "@/components/site/Booking";
import Footer from "@/components/site/Footer";

const Index = () => {
  useReveal();
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Philosophy />
      <Menu />
      <Gallery />
      <About />
      <Testimonials />
      <Booking />
      <Footer />
      <div className="grain-overlay" aria-hidden />
    </main>
  );
};

export default Index;
