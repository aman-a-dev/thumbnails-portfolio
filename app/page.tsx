import Hero from "@/components/blocks/hero";
import About from "@/components/blocks/about";
import Thumbnail from "@/components/blocks/thumbnail";
import Contact from "@/components/blocks/contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Thumbnail />
      <About />
      <Contact />
    </main>
  );
}
