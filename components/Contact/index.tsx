"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";
import SectionHeader from "../Common/SectionHeader";

const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <div className="text-gray-600 dark:text-gray-400">{children}</div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending Message:", formData);
    toast.success("Message sent successfully!");
    setFormData({ fullName: "", email: "", subject: "", phone: "", message: "" });
  };

  const handleAISalesBot = async (e: React.FormEvent) => {
    e.preventDefault();
    const botPromise = fetch(`${process.env.NEXT_PUBLIC_AI_APP_URL}/outbound`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    toast.promise(botPromise, {
      loading: 'Contacting our AI Sales Bot...',
      success: 'Your info was sent to our AI!',
      error: 'Oops! Something went wrong.',
    });

    try {
      const response = await botPromise;
      if (!response.ok) throw new Error("API responded with an error");
      const result = await response.json();
      console.log("AI Sales Bot response:", result);
    } catch (error) {
      console.error("Error sending to AI Sales Bot:", error);
    }
  };

  return (
    <section id="support" className="relative bg-white py-20 dark:bg-black sm:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionHeader
          headerInfo={{
            title: "GET IN TOUCH",
            subtitle: "Contact Us",
            description: "Have a question or need a consultation? We'd love to hear from you.",
          }}
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactInfoItem icon={MapPin} title="Our Location">
              654 Sycamore Avenue, Meadowville, WA 76543
            </ContactInfoItem>
            <ContactInfoItem icon={Mail} title="Email Address">
              <a href="mailto:info@blktaxservices.com" className="hover:text-primary">
                info@blktaxservices.com
              </a>
            </ContactInfoItem>
            <ContactInfoItem icon={Phone} title="Phone Number">
              <a href="tel:+009423346343843" className="hover:text-primary">
                +009 42334 6343 843
              </a>
            </ContactInfoItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg bg-gray-50 p-8 shadow-lg dark:bg-blacksection"
          >
            <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
              Send a Message
            </h2>
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <textarea
                placeholder="Message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                required
              />
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  Send Message <Send className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleAISalesBot}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600/10 px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600/20 dark:bg-blue-600/20 dark:text-blue-400 dark:hover:bg-blue-600/30 sm:w-auto"
                >
                  Talk to AI Bot
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;