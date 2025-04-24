"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Contact = () => {
  // All hooks are called unconditionally.
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Send Message", formData);
    alert("Message sent!");
  };

  const handleAISalesBot = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AI_APP_URL}/outbound`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }
      const result = await response.json();
      console.log("AI Sales Bot response:", result);
      alert("Your info was sent to our AI Sales Bot!");
    } catch (error) {
      console.error("Error sending to AI Sales Bot:", error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Render UI only after mounting */}
      {hasMounted && (
        <>
          {/* ===== Contact Start ===== */}
          <section id="support" className="px-4 md:px-8 2xl:px-0 font-boldnose">
            <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
              <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
              <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
                <Image
                  src="./images/shape/shape-dotted-light.svg"
                  alt="Dotted"
                  className="dark:hidden"
                  fill
                />
                <Image
                  src="./images/shape/shape-dotted-dark.svg"
                  alt="Dotted"
                  className="hidden dark:block"
                  fill
                />
              </div>

              <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
                {/* Form Section */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
                >
                  <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                    Send a message
                  </h2>

                  <form onSubmit={handleSendMessage}>
                    <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                      <input
                        type="text"
                        placeholder="Full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                        required
                      />
                    </div>

                    <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                      />
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                      />
                    </div>

                    <div className="mb-11.5 flex">
                      <textarea
                        placeholder="Message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                        required
                      ></textarea>
                    </div>

                    <div className="flex flex-wrap gap-4 xl:justify-between">
                      <div className="mb-4 flex md:mb-0">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          className="peer sr-only"
                        />
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="submit"
                          aria-label="send message"
                          className="inline-flex items-center gap-2.5 rounded-full bg-meta px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                        >
                          Send Message
                          <svg
                            className="fill-white"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={handleAISalesBot}
                          aria-label="Talk to our AI Sales Bot"
                          className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                          Talk to our AI Sales Bot
                        </button>
                      </div>
                    </div>
                  </form>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 2, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
                >
                  <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                    Find us here
                  </h2>

                  <div className="mb-7">
                    <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                      Our Location
                    </h3>
                    <p>654 Sycamore Avenue, Meadowville, WA 76543</p>
                  </div>
                  <div className="mb-7">
                    <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                      Email Address
                    </h3>
                    <p>
                      <a href="#">info@blktaxservices.com</a>
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                      Phone Number
                    </h4>
                    <p>
                      <a href="#">+009 42334 6343 843</a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/* ===== Contact End ===== */}
        </>
      )}
    </>
  );
};

export default Contact;
