"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Tax Planning",
        monthlyPrice: 79,
        yearlyPrice: 750,
        description: "Plan ahead and minimize your tax liability with expert guidance.",
        features: ["Detailed tax analysis", "Customized tax strategy", "Annual review"],
    },
    {
        name: "Tax Filing",
        monthlyPrice: 99,
        yearlyPrice: 950,
        description: "Streamline your tax filing process with our comprehensive service.",
        features: ["Complete tax return preparation", "E-filing support", "Tax document management"],
        isPopular: true,
    },
    {
        name: "Tax Consultation",
        monthlyPrice: 129,
        yearlyPrice: 1250,
        description: "Get personalized advice from our seasoned tax professionals.",
        features: ["One-on-one consultation", "Tax savings strategies", "Ongoing support"],
    },
    {
        name: "Corporate Tax",
        monthlyPrice: 199,
        yearlyPrice: 1900,
        description: "Tailored solutions for corporate tax planning and compliance.",
        features: ["Multinational tax strategy", "Compliance management", "Risk assessment", "Audit support"],
    },
];

const PricingCard = ({ plan, billingCycle }) => {
    const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
    const cycleText = billingCycle === "monthly" ? "/month" : "/year";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={cn(
                "relative flex h-full flex-col rounded-2xl border p-8 shadow-lg",
                plan.isPopular
                    ? "border-blue-500 bg-blue-500/5 dark:bg-blue-500/10"
                    : "border-gray-200 bg-white dark:border-gray-800 dark:bg-blacksection"
            )}
        >
            {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{plan.description}</p>
            <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">${price}</span>
                <span className="text-gray-500 dark:text-gray-400">{cycleText}</span>
            </div>
            <ul className="mt-8 flex-1 space-y-3 text-gray-600 dark:text-gray-300">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-x-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-blue-500" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Link
                href="/survey"
                className={cn(
                    "mt-10 block w-full rounded-md px-4 py-3 text-center font-semibold transition-colors",
                    plan.isPopular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                )}
            >
                Book Now
            </Link>
        </motion.div>
    );
};

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    return (
        <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-black sm:py-24">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Flexible Pricing Plans
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
                        Choose a plan that fits your needs. Our transparent pricing ensures you only pay for what you actually use.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-10 flex items-center justify-center"
                >
                    <div className="relative flex w-full max-w-xs rounded-full bg-gray-200 p-1 dark:bg-gray-800">
                        <motion.div
                            animate={{ x: billingCycle === "yearly" ? "100%" : "0%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute h-full w-1/2 rounded-full bg-white shadow-md dark:bg-blue-600"
                        />
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={cn(
                                "relative w-1/2 rounded-full py-2 text-sm font-semibold transition-colors",
                                billingCycle === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-300"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={cn(
                                "relative w-1/2 rounded-full py-2 text-sm font-semibold transition-colors",
                                billingCycle === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-300"
                            )}
                        >
                            Yearly
                        </button>
                    </div>
                </motion.div>

                <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-4">
                    {plans.map((plan) => (
                        <PricingCard key={plan.name} plan={plan} billingCycle={billingCycle} />
                    ))}
                </div>
            </div>
        </section>
    );
}