"use client";
import React from "react";
import { motion } from "framer-motion";

const Brands = () => {
  const text =
    "EMPOWERING YOUR FINANCIAL FUTURE WITH INNOVATIVE DIGITAL TAX SOLUTIONS. ";

  return (
    <section className="overflow-hidden bg-alabaster dark:bg-black py-11">
      <motion.div
        className="whitespace-nowrap text-7xl font-bold text-gray-400 dark:text-gray-500 boldonse-regular"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Repeat the text to create a continuous marquee */}
        {text.repeat(10)}
      </motion.div>
    </section>
  );
};

export default Brands;
