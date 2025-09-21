"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? 0 : id);
  };

  return (
    <section className="bg-white py-20 dark:bg-black sm:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gray-900 px-8 py-12 md:px-12"
        >
            <div className="absolute inset-0 -z-10">
                <Image 
                    src="/images/shape/shape-dotted-dark.svg" 
                    alt="background" 
                    fill 
                    className="object-cover" 
                />
            </div>
            <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Join Us Today & Increase Your Productivity
                </h2>
                <Link
                    href="/survey"
                    className="inline-block flex-shrink-0 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                >
                    Start Survey
                </Link>
            </div>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              OUR FAQS
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Can't find the answer you're looking for? Feel free to contact us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg bg-white dark:bg-blacksection">
              {faqData.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;