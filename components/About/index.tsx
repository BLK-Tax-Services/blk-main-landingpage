"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectionsData = [
  {
    tag: "Services",
    title: "Professional Tax Preparation",
    description:
      "File your taxes quickly and securely with a simple, step-by-step process. Get upfront pricing, upload your documents safely, and have your return prepared by certified professionals without needing to leave home.",
    listItems: [
      { title: "Client Questionnaire", description: "Answer a set of simple questions to safely start your tax preparation." },
      { title: "Upfront, Transparent Pricing", description: "Receive a clear, upfront quote based on your answers with no hidden fees." },
      { title: "Secure Document Upload", description: "Quickly upload your tax documents through our encrypted, secure portal." },
      { title: "Fast Tax Preparation", description: "Your return will be ready for review and filing within a week of your final document submission." },
    ],
    image: null,
    learnMoreLink: "/services",
  },
];

const ListItem = ({ index, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
      {String(index + 1).padStart(2, '0')}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-8 lg:py-20">
        {sectionsData.map((section, index) => (
          <div
            key={section.tag}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <span className="mb-4 inline-block rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
                {section.tag}
              </span>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {section.description}
              </p>
              <Link
                href={section.learnMoreLink}
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="space-y-8">
              {section.listItems.map((item, i) => (
                <ListItem key={i} index={i} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;