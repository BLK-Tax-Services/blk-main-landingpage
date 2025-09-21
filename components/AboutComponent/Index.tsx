"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

// --- Custom Timeline Component ---
// I've built a new, styled timeline component directly in this file
// to replace the imported one and ensure perfect styling.

const timelineData = [
    {
        year: "2024",
        title: "Global Expansion",
        description: "Officially launched BLK Tax Services internationally, expanding our reach to help more businesses and individuals worldwide.",
        images: [
            "https://assets.aceternity.com/templates/startup-1.webp",
            "https://assets.aceternity.com/templates/startup-2.webp",
        ],
    },
    {
        year: "Early 2023",
        title: "Virtual Solutions & 24/7 Support",
        description: "Introduced virtual tax filing solutions that simplified compliance for thousands of clients and expanded our expert team to offer 24/7 support.",
        images: [
            "https://assets.aceternity.com/pro/hero-sections.png",
            "https://assets.aceternity.com/features-section.png",
        ],
    },
    {
        year: "Changelog",
        title: "Continuous Innovation",
        description: "Recently added more advanced tax planning features and launched specialized corporate consulting packages.",
        features: [
            "Dedicated compliance tracker",
            "Enhanced e-filing integrations",
            "Live chat with certified tax professionals",
        ],
        images: [
            "https://assets.aceternity.com/pro/bento-grids.png",
            "https://assets.aceternity.com/cards.png",
        ],
    },
];

const TimelineItem = ({ item, isLast }) => (
    <div className="relative flex items-start">
        {/* The Dot and Line */}
        <div className="flex-shrink-0">
            <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white dark:bg-black"
            >
                <div className="h-3 w-3 rounded-full bg-primary" />
            </motion.div>
            {!isLast && <div className="ml-4 mt-1 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />}
        </div>

        {/* The Content */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="ml-8 flex-1"
        >
            <p className="mb-2 font-semibold text-primary">{item.year}</p>
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">{item.description}</p>
            
            {item.features && (
                <div className="mb-6 space-y-2">
                    {item.features.map(feature => (
                        <div key={feature} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-2 gap-4">
                {item.images.map(src => (
                    <Image key={src} src={src} alt={item.title} width={500} height={500} className="rounded-lg object-cover shadow-md" />
                ))}
            </div>
        </motion.div>
    </div>
);


export default function AboutComponents() {
  return (
    <>
      <section className="overflow-hidden bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-screen-xl px-4 text-center md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              BLK Tax Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
          >
            We empower individuals and businesses to take control of their financial destiny by simplifying the complex world of taxes.
          </motion.p>
        </div>
      </section>

      <section className="overflow-hidden bg-gray-50 py-20 dark:bg-blacksection sm:py-24">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Take a look at how we've grown, evolving our services and expanding our reach to serve you better.
            </p>
          </div>
          
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} item={item} isLast={index === timelineData.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}