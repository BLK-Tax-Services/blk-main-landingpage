import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  const { title, description, price } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-blacksection"
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 min-h-[60px] text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{price}</span>
        <Link
          href="/contactus"
          className="inline-block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-blue-500/30"
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;