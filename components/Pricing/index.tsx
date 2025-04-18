"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "tax-planning",
    name: "Tax Planning",
    monthlyPrice: 79,
    yearlyPrice: 750,
    description: "Plan ahead and minimize your tax liability with expert guidance.",
    features: [
      "Detailed tax analysis",
      "Customized tax strategy",
      "Annual review",
    ],
  },
  {
    id: "tax-filing",
    name: "Tax Filing",
    monthlyPrice: 99,
    yearlyPrice: 950,
    description: "Streamline your tax filing process with our comprehensive service.",
    features: [
      "Complete tax return preparation",
      "E-filing support",
      "Tax document management",
    ],
    isPopular: true,
  },
  {
    id: "tax-consultation",
    name: "Tax Consultation",
    monthlyPrice: 129,
    yearlyPrice: 1250,
    description: "Get personalized advice from our seasoned tax professionals.",
    features: [
      "One-on-one consultation",
      "Tax savings strategies",
      "Ongoing support",
    ],
  },
  {
    id: "corporate-tax",
    name: "Corporate Tax",
    monthlyPrice: 199,
    yearlyPrice: 1900,
    description: "Tailored solutions for corporate tax planning and compliance.",
    features: [
      "Multinational tax strategy",
      "Compliance management",
      "Risk assessment",
      "Audit support",
    ],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const handleToggle = () => {
    setBillingCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <section className="relative overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 font-boldnose">
      {/* Background Dotted Shape */}
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          src="./images/shape/shape-dotted-light.svg"
          alt="Dotted"
          className="dark:hidden object-cover"
        />
        <Image
          fill
          src="./images/shape/shape-dotted-dark.svg"
          alt="Dotted Dark"
          className="hidden dark:block object-cover"
        />
      </div>

      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Header / Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-black dark:text-white md:text-4xl">
            Flexible Pricing Plans
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-300">
            Choose a plan that fits your needs. Our transparent pricing ensures
            you only pay for what you actually use.
          </p>
        </motion.div>

        {/* Toggle for Monthly / Yearly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex items-center justify-center"
        >
          <span className="mr-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Monthly
          </span>
          <label
            className="relative inline-flex cursor-pointer items-center"
            aria-label="Toggle billing cycle"
          >
            <input
              type="checkbox"
              checked={billingCycle === "yearly"}
              onChange={handleToggle}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-300 transition-all duration-300 peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
            <div className="peer absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-all duration-300 peer-checked:translate-x-5" />
          </label>
          <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Yearly
          </span>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="relative mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4 xl:mt-20 xl:px-0"
      >
        {plans.map((plan, index) => {
          const price =
            billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
          const cycleText = billingCycle === "monthly" ? "month" : "year";

          return (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              transition={{ delay: index * 0.15 }}
              className={cn(
                "group relative transform overflow-hidden rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-[1.02] dark:bg-blacksection dark:shadow-solid-5",
                plan.isPopular
                  ? "border border-blue-500 shadow-solid-5"
                  : "border border-gray-200 dark:border-white/10"
              )}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  Popular
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-black group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-4 border-t border-gray-200 pt-4 dark:border-white/10">
                <span className="text-5xl font-extrabold text-black dark:text-white">
                  ${price}
                </span>
                <span className="ml-2 text-lg font-medium text-gray-400 dark:text-gray-300">
                  /{cycleText}
                </span>
              </div>

              <div className="mb-4">
                <p className="mt-2 text-gray-400 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <a
                  href="#"
                  className={cn(
                    "block w-full rounded-md border px-6 py-3 text-center font-medium transition-all",
                    plan.isPopular
                      ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
                      : "border-blue-600 text-black hover:bg-blue-600 hover:text-white dark:text-white dark:hover:bg-blue-500 dark:hover:text-black"
                  )}
                >
                  Book Now
                </a>
              </div>

              <ul className="mb-4 space-y-3 border-t border-gray-200 py-4 text-gray-600 dark:border-white/10 dark:text-gray-300">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg
                      className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="block border-t border-gray-200 px-6 py-3 text-center text-sm font-medium text-gray-700 transition-all hover:text-blue-600 dark:border-white/10 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Show More
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
