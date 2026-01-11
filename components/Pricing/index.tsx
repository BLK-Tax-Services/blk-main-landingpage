"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Tax Planning",
        price: 79,
        description: "Plan ahead and minimize your tax liability with expert guidance.",
        features: ["Detailed tax analysis", "Customized tax strategy", "Annual review"],
    },
    {
        name: "Tax Filing",
        price: 99,
        description: "Streamline your tax filing process with our comprehensive service.",
        features: ["Complete tax return preparation", "E-filing support", "Tax document management"],
        isPopular: true,
    },
    {
        name: "Tax Consultation",
        price: 129,
        description: "Get personalized advice from our seasoned tax professionals.",
        features: ["One-on-one consultation", "Tax savings strategies", "Ongoing support"],
    },
    {
        name: "Corporate Tax",
        price: 199,
        description: "Tailored solutions for corporate tax planning and compliance.",
        features: ["Multinational tax strategy", "Compliance management", "Risk assessment", "Audit support"],
    },
];

const PricingCard = ({ plan }) => {
    return (
        <div
            className={cn(
                "relative flex h-full flex-col rounded-2xl border p-8",
                plan.isPopular
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            )}
        >
            {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{plan.description}</p>
            
            <div className="mt-6">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Starting at</p>
                <div className="mt-1 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">${plan.price}</span>
                </div>
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
                href="/contactus"
                className={cn(
                    "mt-8 block w-full rounded-md px-4 py-3 text-center font-semibold transition-colors",
                    plan.isPopular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                )}
            >
                Book Now
            </Link>
        </div>
    );
};

export default function Pricing() {
    return (
        <section className="bg-gray-50 py-20 dark:bg-black sm:py-24">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Flexible Pricing Plans
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
                        Choose a plan that fits your needs. Our transparent pricing ensures you only pay for what you actually use.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {plans.map((plan) => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}