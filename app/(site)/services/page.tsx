"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import serviceTabData from "@/components/Service/serviceTabData";
import ServiceCard from "@/components/Service/ServiceCard";

const LottieAnimation = dynamic(() => import("./taxLottie"), {
  ssr: false,
});

const ServiceTab = () => {
  // Corrected initial state to match the first tab's ID from your data
  const [currentTab, setCurrentTab] = useState("personal");

  return (
    <>
      <section className="overflow-hidden bg-white pt-32 pb-16 dark:bg-black md:pt-40 md:pb-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="mb-4 inline-block rounded-md bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-600">
                Our Services
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                Elevate Your Business With Our Expert Solutions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Streamline your operations, boost efficiency, and drive growth with our comprehensive business services.
              </p>
              <div className="mt-10">
                <Link
                  href="/contactus"
                  className="inline-block rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <LottieAnimation />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-blacksection sm:py-24">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="flex justify-center">
            <div className="relative mb-12 flex w-full max-w-2xl justify-center border-b border-gray-200 dark:border-gray-800">
              {serviceTabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`relative w-1/3 py-4 text-center font-medium transition-colors ${
                    currentTab === tab.id
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 h-1 bg-blue-600"
                style={{
                  width: "33.33%",
                  left: serviceTabData.findIndex(tab => tab.id === currentTab) * 33.33 + "%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          <div>
            {serviceTabData.map((tab) => (
              <div
                key={tab.id}
                className={tab.id === currentTab ? "block" : "hidden"}
              >
                <motion.div
                  key={currentTab}
                  initial={{ opacity: 0.5, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {tab.items.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTab;