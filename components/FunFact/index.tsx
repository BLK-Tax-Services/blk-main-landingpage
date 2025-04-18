"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FunFact() {
  return (
    <section className="bg-transparent py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* Heading & Subheading */}
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-bold text-black dark:text-white lg:text-5xl">
            Trusted by Business Partners
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            At BLK Tax Services, we empower businesses with streamlined, digital tax
            solutions designed to simplify compliance and boost financial efficiency. Our
            innovative approach and expert team have transformed the way companies handle taxes—
            enabling growth and success in a competitive landscape.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="group rounded-lg border border-gray-200 bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/10"
          >
            <div className="text-5xl font-bold text-black transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
              500
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Business Partners</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="group rounded-lg border border-gray-200 bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/10"
          >
            <div className="text-5xl font-bold text-black transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
              890
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Cases Solved</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="group rounded-lg border border-gray-200 bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/10"
          >
            <div className="text-5xl font-bold text-black transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
              5
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Years Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
