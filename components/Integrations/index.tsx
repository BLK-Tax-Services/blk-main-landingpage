"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  {
    name: "QuickBooks",
    logo: "/images/integrations/quickbooks.svg",
    description: "Seamless accounting data import",
  },
  {
    name: "Shopify",
    logo: "/images/integrations/shopify.svg",
    description: "E-commerce sales tracking",
  },
  {
    name: "Venmo",
    logo: "/images/integrations/venmo.svg",
    description: "Payment history integration",
  },
  {
    name: "Cash App",
    logo: "/images/integrations/cashapp.svg",
    description: "Transaction data support",
  },
  {
    name: "Apple Pay",
    logo: "/images/integrations/applepay.svg",
    description: "Digital wallet compatibility",
  },
];

const Integrations = () => {
  return (
    <section className="bg-gray-50 py-20 dark:bg-blacksection">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="mb-4 inline-block rounded-md bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-600">
            Integrations
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            We Work With Your Favorite Platforms
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Import your financial data seamlessly from the platforms you already use. 
            We support all major payment apps and accounting software.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:bg-black dark:border dark:border-gray-800"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                {integration.name}
              </h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
