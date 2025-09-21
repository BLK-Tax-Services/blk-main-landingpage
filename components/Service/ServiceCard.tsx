import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  const { title, description, price } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-blacksection"
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="mt-6 flex items-baseline justify-between">
        {/* Removed the extra '$' sign here */}
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{price}</span>
        <Link
          href="/survey"
          className="rounded-md bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-600/20 dark:text-blue-400 dark:bg-blue-600/20 dark:hover:bg-blue-600/30"
        >
          Fill Survey
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;