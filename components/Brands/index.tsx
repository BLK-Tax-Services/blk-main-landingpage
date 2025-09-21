"use client";
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Zap, ShieldCheck } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, children }) => (
  <motion.div
    // Reduced the lift (y: -4) and scale (scale: 1.02) for a more subtle effect
    whileHover={{ y: -4, scale: 1.02 }} 
    transition={{ type: "spring", stiffness: 300 }}
    className="flex flex-col items-center text-center p-4"
  >
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{children}</p>
  </motion.div>
);

const Brands = () => {
  return (
    <section className="bg-white dark:bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            A Better Way to Manage Your Taxes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Innovative digital solutions for your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          <FeatureItem icon={DollarSign} title="Transparent Pricing">
            No hidden fees. Understand exactly what you're paying for with our clear and upfront pricing structure.
          </FeatureItem>
          <FeatureItem icon={Zap} title="Fast & Efficient">
            Our streamlined digital process saves you time and ensures your taxes are filed quickly and accurately.
          </FeatureItem>
          <FeatureItem icon={ShieldCheck} title="Secure & Reliable">
            Your financial data is protected with industry-leading security measures you can trust.
          </FeatureItem>
        </div>
      </div>
    </section>
  );
};

export default Brands;