
import { Metadata } from "next";
import AboutComponents from "@/components/AboutComponent/Index";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Team from "../../../components/Team/index";

export const metadata: Metadata = {
  title: "About Us Page - BLK",
  description: "This is About Us page for BLK",
  // other metadata
};

const AboutPage = async () => {
  return (
    <>

     <AboutComponents/>
     <Team />
      <CTA />
      <FAQ/>
    </>
  );
};

export default AboutPage;
