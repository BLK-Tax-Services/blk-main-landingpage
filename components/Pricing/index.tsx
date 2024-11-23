"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group transform rounded bg-white p-6 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-105 hover:bg-blue-600 lg:scale-95">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-black group-hover:text-white">
                  Tax Planning & Analysis
                </h3>
              </div>
              <div className="border-t border-gray-300 py-4">
                <span className="text-5xl font-extrabold text-black group-hover:text-white">
                  $75
                </span>
                <span className="text-xl font-medium text-gray-400 group-hover:text-white">
                  per Hour
                </span>
              </div>
              <div className="mb-4">
                <p className="mt-4 text-gray-400 group-hover:text-white">
                  Get started with our basic features.
                </p>
              </div>
              <div className="mb-4">
                <a
                  href="#"
                  className="block w-full rounded-md border border-blue-600 px-6 py-3 text-center font-medium text-black hover:border-white group-hover:text-white"
                >
                  Book Now
                </a>
              </div>
              <ul className="mb-4 space-y-4 border-t border-gray-300 py-4 text-gray-400">
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>1 user account</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>10 transactions per month</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Basic support</span>
                </li>
              </ul>
              <a
                href="#"
                className="block border-t border-gray-300 px-6 py-3 text-center font-medium text-black group-hover:text-white"
              >
                Show More
              </a>
            </div>

            <div className="group transform rounded bg-white p-6 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-105 hover:bg-blue-600 lg:scale-95">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white hover:bg-green-500">
                popular
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-black group-hover:text-white">
                  Personal
                </h3>
              </div>
              <div className="border-t border-gray-300 py-4">
                <span className="text-5xl font-extrabold text-black group-hover:text-white">
                  $149
                </span>
                <span className="text-xl font-medium text-gray-400 group-hover:text-white">
                  Per Hour
                </span>
              </div>
              <div className="mb-4">
                <p className="mt-4 text-gray-400 group-hover:text-white">
                  Get started with our basic features.
                </p>
              </div>
              <div className="mb-4">
                <a
                  href="#"
                  className="block w-full rounded-md border border-blue-600 px-6 py-3 text-center font-medium text-black hover:border-white group-hover:text-white"
                >
                  Book Now
                </a>
              </div>
              <ul className="mb-4 space-y-4 border-t border-gray-300 py-4 text-gray-400">
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>5 user accounts</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>100 transactions per month</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Standard support</span>
                </li>
              </ul>
              <a
                href="#"
                className="block border-t border-gray-300 px-6 py-3 text-center font-medium text-black group-hover:text-white"
              >
                Show More
              </a>
            </div>

            <div className="group transform rounded bg-white p-6 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-105 hover:bg-blue-600 lg:scale-95">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-black group-hover:text-white">
                  Business
                </h3>
              </div>
              <div className="border-t border-gray-300 py-4">
                <span className="text-5xl font-extrabold text-black group-hover:text-white">
                  $75
                </span>
                <span className="text-xl font-medium text-gray-400 group-hover:text-white">
                  Per Hour
                </span>
              </div>
              <div className="mb-4">
                <p className="mt-4 text-gray-400 group-hover:text-white">
                  Get started with our basic features.
                </p>
              </div>
              <div className="mb-4">
                <a
                  href="#"
                  className="block w-full rounded-md border border-blue-600 px-6 py-3 text-center font-medium text-black hover:border-white group-hover:text-white"
                >
                  Book Now
                </a>
              </div>
              <ul className="mb-4 space-y-4 border-t border-gray-300 py-4 text-gray-400">
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Unlimited user accounts</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Unlimited transactions</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <a
                href="#"
                className="block border-t border-gray-300 px-6 py-3 text-center font-medium text-black group-hover:text-white"
              >
                Show More
              </a>
            </div>

            <div className="group transform rounded bg-white p-6 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-105 hover:bg-blue-600 lg:scale-95">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-black group-hover:text-white">
                  Financial Planning & Analysis
                </h3>
              </div>
              <div className="border-t border-gray-300 py-4">
                <span className="text-5xl font-extrabold text-black group-hover:text-white">
                  $10
                </span>
                <span className="text-xl font-medium text-gray-400 group-hover:text-white">
                  Per Hour
                </span>
              </div>
              <div className="mb-4">
                <p className="mt-4 text-gray-400 group-hover:text-white">
                  Get started with our basic features.
                </p>
              </div>
              <div className="mb-4">
                <a
                  href="#"
                  className="block w-full rounded-md border border-blue-600 px-6 py-3 text-center font-medium text-black hover:border-white group-hover:text-white"
                >
                  Book Now
                </a>
              </div>
              <ul className="mb-4 space-y-4 border-t border-gray-300 py-4 text-gray-400">
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Dedicated infrastructure</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-center group-hover:text-white">
                  <svg
                    className="mr-2 h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Premium SLAs</span>
                </li>
              </ul>
              <a
                href="#"
                className="block border-t border-gray-300 px-6 py-3 text-center font-medium text-black group-hover:text-white"
              >
                Show More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
