import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "blk",
  description: "This is Home for blk",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <FunFact />
      <Testimonial />
      <Pricing />
      <Blog />
      <Contact />
      <CTA />
      <FAQ />
    </main>
  );
}
