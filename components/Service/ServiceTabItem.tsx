"use client";
import React from "react";
import { motion } from "framer-motion";

interface CardItem {
  id: string;
  title: string;
  description: string;
  price: string;
}

interface ServiceTabType {
  id: string;
  title: string;
  items: CardItem[];
}

const ServiceTabItem = ({ serviceTab }: { serviceTab: ServiceTabType }) => {
  // The creative gradient style
  const creativeGradient = {
    background: "linear-gradient(125deg, #0a74da 0%, #000000 60%, #ffffff 100%)",
  };

  return (
    <div
      id="cards-container"
      className="grid grid-cols-1 gap-10 py-10 text-center sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
    >
      {serviceTab.items.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white bg-opacity-90 shadow-2xl backdrop-blur-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:bg-blacksection dark:border-white/10"
        >
          {/* Skewed Gradient Header */}
          <div
            className="relative z-10 flex items-center justify-center px-5 py-6 transform -skew-y-3"
            style={creativeGradient}
          >
            <h3 className="text-xl font-boldnose font-extrabold text-white uppercase tracking-wider">
              {card.title}
            </h3>
          </div>

          {/* Decorative Divider */}
          <div className="mx-auto -mt-1 mb-3 h-1 w-2/3 rounded-full bg-primary/80 dark:bg-primary/60" />

          {/* Creative Overlay for Depth */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white/70 to-transparent dark:from-black/70 dark:to-transparent" />

          {/* Card Content */}
          <div className="relative z-20 px-6 py-6">
            <p className="mb-4 text-base text-gray-800 dark:text-gray-200">
              {card.description}
            </p>
            <div className="mb-6 text-lg font-boldnose text-gray-600 dark:text-gray-400">
              {card.price}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-md px-6 py-3 text-base font-semibold text-white transition-colors duration-300 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 dark:from-blue-500 dark:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800"
            >
              Fill Survey
            </motion.button>
          </div>

          {/* Animated Decorative Border on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-0 rounded-3xl border-4 border-transparent"
            style={creativeGradient}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceTabItem;
