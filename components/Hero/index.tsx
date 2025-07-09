"use client";
import Image from "next/image";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import TextRotate from "@/fancy/components/text/text-rotate";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-16 pt-24 md:pb-20 md:pt-32 xl:pb-28 xl:pt-44 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col-reverse items-center gap-y-10 lg:flex-row lg:gap-x-16 xl:gap-x-32">
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-6 font-sans font-extrabold leading-tight text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
              Manage Your Taxes With
              <br className="block lg:hidden" />
              <span className="relative inline-block text-blue-600 before:absolute before:-bottom-1 before:left-0 before:h-2 before:w-full before:bg-primary/20">
                BLK Tax Services
              </span>
            </h1>

            {/* Responsive Rotating Text */}
            <LayoutGroup>
              <motion.div
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-2 text-base sm:text-lg font-light text-gray-800 dark:text-white"
              >
                <span className="whitespace-normal md:whitespace-nowrap">
                  Virtual tax preparation services to make your tax filing
                </span>
                <span className="relative inline-flex w-[80px] sm:w-[100px] h-10 bg-blue-500 text-white px-2 py-1 overflow-hidden items-center justify-center">
                  <TextRotate
                    texts={["simple", "fast", "stress-free", "reliable", "convenient"]}
                    mainClassName="inline-block"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
              </motion.div>
            </LayoutGroup>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/survey"
                aria-label="get started button"
                className="inline-block rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark dark:text-black"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <div className="relative aspect-[700/444] w-full">
                <Image
                  src="/images/hero/hero-light.svg"
                  alt="Hero illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
