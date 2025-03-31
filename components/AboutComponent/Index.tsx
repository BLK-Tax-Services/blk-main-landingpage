"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { BadgeCheck, Check } from "lucide-react";
// import your timeline data or define inline
// import { timelineData } from "./somewhere"; // if needed

export default function AboutComponents() {
  // Example timeline data from your snippet (you can adjust content/images)
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-xl font-normal mb-8">
            Officially launched BLK Tax Services internationally, expanding our
            reach to help more businesses and individuals.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="some milestone"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="some milestone"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Introduced virtual tax filing solutions that simplified compliance
            for thousands of clients.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Expanded our expert team to offer 24/7 support, ensuring round‐the‐clock
            assistance for time‐sensitive matters.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Recently added more advanced tax planning features and launched
            specialized corporate consulting packages.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <Check/> Dedicated compliance tracker
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <Check/> Enhanced e-filing integrations
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <Check/>  Live chat with certified tax professionals
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* === Hero-Style About Section === */}
      <section className="overflow-hidden bg-gray-50 dark:bg-[#151A21] font-boldnose py-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 text-center mt-40">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-black dark:text-white boldonse-regular"
          >
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            BLK Tax Services
          </span>{" "}
            and <span className="text-meta">Who We Are</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300"
          >
            We empower individuals and businesses to take control of their
            financial destiny by simplifying the complex world of taxes.
            Our expert team delivers innovative, stress-free solutions that
            maximize returns—so you can focus on what truly matters.
          </motion.p>
          {/*<motion.div*/}
          {/*  initial={{ opacity: 0 }}*/}
          {/*  animate={{ opacity: 1 }}*/}
          {/*  transition={{ duration: 0.8, delay: 0.5 }}*/}
          {/*>*/}
          {/*  <Link*/}
          {/*    href="/survey"*/}
          {/*    aria-label="get started button"*/}
          {/*    className="inline-block bg-meta rounded-md px-7.5 py-3 text-2xl font-semibold text-white duration-300 ease-in-out hover:bg-blackho dark:bg-blue-600 dark:hover:bg-blackho"*/}
          {/*  >*/}
          {/*    Start Survey*/}
          {/*  </Link>*/}
          {/*</motion.div>*/}
        </div>
      </section>

      {/* === Timeline Section === */}
      <section className="overflow-hidden bg-gray-50 py-20 dark:bg-[#151A21] font-boldnose dark:bg-gray-900">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h2 className="mb-8 text-3xl font-extrabold boldonse-regular text-black dark:text-white sm:text-4xl lg:text-5xl text-center">
            Our Journey
          </h2>
          <p className="mb-10 mx-auto max-w-2xl text-base text-gray-700 dark:text-gray-300 sm:text-lg text-center">
            Take a look at how we've grown over the years, evolving our services and expanding our reach to serve you better.
          </p>
          <Timeline data={data} />
        </div>
      </section>
    </>
  );
}
