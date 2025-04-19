"use client";
import Image from "next/image";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion"; // or "motion/react"
import TextRotate from "@/fancy/components/text/text-rotate";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-20 pt-28 md:pt-40 xl:pb-28 xl:pt-44 dark:bg-gray-900]">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          {/* Left Text Column */}
          <div className="md:w-1/2.2">
            <h1 className="mb-6 font-sans font-extrabold leading-tight text-black sm:text-4xl lg:text-9xl xl:text-6xl dark:text-white">
              Manage Your Taxes With{" "}
              <span className="relative font-sans inline-block text-meta before:absolute before:bottom-1.5 before:left-0 before:-z-10 before:h-3 before:w-full before:bg-primary/20 dark:text-blue-500">
                BLK Tax Services
              </span>
            </h1>

            {/* Responsive Rotating Text Section */}
            <LayoutGroup>
              <motion.div
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-1 text-base font-light text-gray-800 md:text-lg dark:text-white"
              >
                <span className="md:whitespace-nowrap">
                  Virtual tax preparation services to make your tax filing
                </span>
                <span className="relative inline-flex w-[100px] h-[2.5rem] bg-blue-500 text-white px-2 py-1 overflow-hidden items-center justify-center">
                  <TextRotate
                    texts={[
                      "simple",
                      "fast",
                      "stress-free",
                      "reliable",
                      "convenient",
                    ]}
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
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/survey"
                aria-label="get started button"
                className="inline-flex items-center rounded-md bg-meta px-7.5 py-3 font-semibold text-white duration-300 hover:bg-black"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Right Image/Graphic Column */}
          <div className="md:w-1/2">
            <div className="relative 2xl:-mr-7.5">
              <div className="relative aspect-[700/444] w-full">
                <Image
                  src="/images/hero/hero-light.svg"
                  alt="Hero"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
