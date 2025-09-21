"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextRotate from "@/fancy/components/text/text-rotate";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black pt-24 pb-16 md:pt-32 md:pb-20 xl:pt-44 xl:pb-28">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              Manage Your Taxes With{" "}
              <span className="relative inline-block text-blue-600 dark:text-blue-500">
                BLK Tax Services
                <span className="absolute -bottom-2 left-0 h-2 w-full bg-blue-500/20 dark:bg-blue-500/10" />
              </span>
            </h1>

            <motion.div
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg text-gray-700 lg:justify-start dark:text-gray-300"
            >
              <span>
                Virtual tax preparation to make your tax filing
              </span>
              <span className="relative inline-flex h-9 w-28 items-center justify-center overflow-hidden rounded-md bg-blue-600 px-2 py-1 text-white">
                <TextRotate
                  texts={["simple", "fast", "easy", "reliable"]}
                  rotationInterval={2500}
                />
              </span>
            </motion.div>

            <div className="mt-10">
              <Link
                href="/survey"
                aria-label="get started button"
                className="inline-block rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
              >
                Get Started Today
              </Link>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/hero/hero-light.svg"
                alt="Tax services illustration for light mode"
                width={700}
                height={444}
                className="w-full object-contain dark:hidden"
              />
              <Image
                src="/images/hero/hero-light.svg"
                alt="Tax services illustration for dark mode"
                width={700}
                height={444}
                className="hidden w-full object-contain dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}