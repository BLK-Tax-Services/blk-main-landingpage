import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
// import Integrations from "@/components/Integrations";


const logoUrl =
  process.env.NEXT_PUBLIC_LOGO_URL ||
  "https://blktaxfilestorage.nyc3.cdn.digitaloceanspaces.com/logo/logo-light.svg";

export const metadata: Metadata = {
  title: "BLK Tax Services | Virtual Tax Preparation Services",
  description:
    "BLK Tax Services offers expert virtual tax preparation services designed to make your tax filing simple, fast, stress-free, and reliable.",
  keywords: [
    "tax preparation",
    "virtual tax services",
    "online tax filing",
    "tax filing",
    "tax services",
    "BLK Tax Services",
    "tax experts",
    "affordable tax filing",
  ],
  openGraph: {
    title: "BLK Tax Services | Virtual Tax Preparation Services",
    description:
      "Experience expert virtual tax preparation services with BLK Tax Services. File your taxes with ease and confidence.",
    url: "https://www.blktaxservices.com",
    siteName: "BLK Tax Services",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "BLK Tax Services Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLK Tax Services | Virtual Tax Preparation Services",
    description:
      "Experience expert virtual tax preparation services with BLK Tax Services. File your taxes with ease and confidence.",
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.blktaxservices.com/",
  },
};



export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:pt-28">
        <div className="flex justify-center">
          <a
            href="/survey"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
          >
            Start Survey
          </a>
        </div>
      </section>
      <Hero />
      <About />
      <FunFact />
      {/* <Integrations /> */}
      <Pricing />
      <Contact />
      <CTA />
      <FAQ />
    </main>
  );
}
