"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="overflow-hidden px-4 py-20 md:px-8 md:py-24 2xl:px-0">
      <div className="mx-auto max-w-c-1390 rounded-2xl bg-gradient-to-tr from-[#EEF4FF] to-[#DEE7FF] px-8 py-12 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-800 md:px-12 xl:px-16 xl:py-14">
        <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-[70%] lg:w-1/2"
          >
            <h2 className="mb-4 w-11/12 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Complete the first survey so we can prepare your quote quickly.</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:w-[45%]"
          >
            <div className="flex items-center justify-start md:justify-end xl:justify-between">
              <Image
                width={290}
                height={299}
                src="/images/shape/shape-09.png"
                alt="Saly"
                className="hidden xl:block"
              />
              <a
                href="/survey"
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-blue-500/30"
              >
                Start Survey
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
