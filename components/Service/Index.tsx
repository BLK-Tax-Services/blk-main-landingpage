"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import serviceTabData from "@/components/Service/serviceTabData";
import ServiceTabItem from "@/components/Service/ServiceTabItem";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the LottieAnimation, disabling SSR:
const LottieAnimation = dynamic(() => import("@/app/(site)/services/taxLottie"), {
  ssr: false,
});

const ServiceTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      <section className="overflow-hidden bg-gray-50 py-20 md:py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            {/* Left Text Column */}
            <div className="md:w-1/3.5">
              <span className="mb-4 mr-4 inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                Services
              </span>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-6xl">
                Elevate Your Business{" "}
                <span className="relative inline-block text-blue-600 dark:text-blue-400 before:absolute before:bottom-2.5 before:left-0 before:-z-10 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  With Our Services
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Streamline your operations, boost efficiency, and drive growth
                with our comprehensive business solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <Link
                  href="/contactus"
                  aria-label="get started button"
                  className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-blue-500/30"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Animation Column (Lottie) */}
            <div className="animate_right hidden md:w-1/2 lg:block mt-10">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative aspect-[700/444] w-full -mt-10">
                  {/* Our dynamically imported Lottie */}
                  <LottieAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 pt-18.5 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
          </div>

          {/* Tab Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  01
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-xl font-medium text-black dark:text-white xl:text-regular">
                  Personal Tax Preparation
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  02
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Tax Planning & Analysis
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  03
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Business Tax Services
                </button>
              </div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {serviceTabData.map((service, key) => (
              <div
                className={service.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <ServiceTabItem serviceTab={service} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceTab;
