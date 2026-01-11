"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FunFact() {
  return (
    <section className="bg-transparent py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* Heading & Subheading */}
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Trusted by our Clients and Business Partners
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
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
            <div className="text-5xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
              25
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Businesses Served</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="group rounded-lg border border-gray-200 bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/10"
          >
            <div className="text-5xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
              15+ Yrs
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Experience in Tax Industry</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="group rounded-lg border border-gray-200 bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/10"
          >
            <div className="text-5xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
              $5M+
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Refunded to our Clients</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
