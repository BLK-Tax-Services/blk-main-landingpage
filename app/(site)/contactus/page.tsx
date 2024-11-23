import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact US Page BLK",
  description: "This is Contact Us page for BLK",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default ContactPage;
