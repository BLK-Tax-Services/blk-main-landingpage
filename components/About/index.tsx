"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectionsData = [
  {
    tag: "Services",
    title: "Personal Tax Preparation",
    description:
      "Whatever tax needs you have, our professionals will get the job done at the highest quality. Get expert help to maximize your deductions, minimize your stress, and ensure your taxes are done right.",
    listItems: [
      { title: "Initial Consultation", description: "Book this service to start your tax preparation process." },
      { title: "Standard Tax Return", description: "For filers with W-2, capital gains, interest, and/or dividend income." },
      { title: "Itemized Tax Return", description: "For filers not taking the standard deduction." },
      { title: "Single-Member LLC Tax Return", description: "For filers who operate their own business." },
    ],
    image: null,
    learnMoreLink: "#",
  },
  {
    tag: "About Us",
    title: "How We Help with Your Tax Preparation",
    description:
      "Filing taxes can be overwhelming, but we're here to make it simple and stress-free. Whether it's maximizing deductions or ensuring every detail is correct, we walk with you every step of the way.",
    listItems: [
        { title: "Fill Our Survey", description: "A short survey helps us understand your needs and send you a quote." },
        { title: "Receive a Quote", description: "Receive a personalized quote within 24 hours via email." },
        { title: "Upload Your Documents", description: "Securely upload your tax documents through your client portal." },
        { title: "Relax, We've Got It Covered", description: "Our experts handle the rest, ensuring accurate and timely filing." },
    ],
    image: "/images/about/about-light-01.svg",
    learnMoreLink: "#",
  },
];

// Simplified ListItem - no animation logic here
const ListItem = ({ index, title, description }) => (
  <div className="relative flex items-start gap-6 pl-12">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white z-10">
      {String(index + 1).padStart(2, '0')}
    </div>
    {/* The connecting line is now part of the parent for the animation */}
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="overflow-hidden bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl space-y-24 px-4 py-20 md:px-8 lg:space-y-32 lg:py-28">
        {sectionsData.map((section, index) => (
          <div
            key={section.tag}
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
              index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className={index % 2 !== 0 ? "lg:col-start-2" : ""}
            >
              <span className="mb-4 inline-block rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
                {section.tag}
              </span>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {section.description}
              </p>
              <Link
                href={section.learnMoreLink}
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
              >
                Learn More
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className={`relative ${index % 2 !== 0 ? "lg:col-start-1" : ""}`}
            >
              {section.image ? (
                <Image
                  src={section.image}
                  alt={`${section.title} illustration`}
                  width={588}
                  height={526}
                  className="w-full"
                />
              ) : (
                <div className="relative">
                  {/* The single animated orb and its track are now here */}
                  <div className="absolute left-5 top-10 h-full border-l-2 border-dashed border-blue-600/30"></div>
                  <motion.div
                    animate={{ y: [20, 116, 212, 308, 20] }} // Array of y-coordinates for each step
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      times: [0, 0.25, 0.5, 0.75, 1], // Controls timing of each step
                    }}
                    className="absolute left-[15px] top-0 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_3px_rgba(59,130,246,0.5)]"
                  />
                  <div className="space-y-12">
                    {section.listItems.map((item, i) => (
                      <ListItem key={i} index={i} title={item.title} description={item.description} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;