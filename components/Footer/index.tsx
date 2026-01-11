"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Updated lucide-react imports
import { Instagram, Linkedin, ShieldCheckIcon, BadgeCheckIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-gray-200 py-16 dark:border-gray-800 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4"
          >
            <Link href="/" className="mb-6 inline-block">
              <Image
                width={180}
                height={40}
                src="/images/logo/logo-light.svg"
                alt="Logo"
                className="dark:hidden"
              />
              <Image
                width={180}
                height={40}
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                className="hidden dark:block"
              />
            </Link>
            <p className="max-w-xs text-gray-600 dark:text-gray-400">
              Maximize your returns from the comfort of your office or couch!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-2"
          >
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400">Home</Link></li>
              <li><Link href="/services" className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400">Services</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-2"
          >
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/contactus" className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400">Privacy Policy</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4"
          >
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Stay Connected</h4>
            <p className="mb-4 text-gray-600 dark:text-gray-400">Subscribe to receive future updates.</p>
            <form action="#">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 bg-white px-5 py-3 pr-12 text-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                <button
                  aria-label="subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-primary p-2 dark:bg-white dark:text-black text-white transition-colors hover:bg-primary/90"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.1175 1.17318L18.5025 9.63484C18.7182 9.74284 18.7182 10.2572 18.5025 10.3652L3.1175 18.8268C2.90933 18.9398 2.6425 18.7744 2.68583 18.5385L4.16667 10.8333H8.33333V9.16667H4.16667L2.68583 1.46151C2.6425 1.22562 2.90933 1.06021 3.1175 1.17318Z" fill="currentColor"/></svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col-reverse items-center justify-between gap-y-4 py-8 md:flex-row">
          <div className="flex items-center gap-x-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} BLK. All rights reserved
            </p>
            <div className="flex items-center gap-x-3">
              <ShieldCheckIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                256-Bit SSL Secured
              </span>
            </div>
             <div className="flex items-center gap-x-3">
              <BadgeCheckIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                IRS Authorized E-File Provider
              </span>
            </div>
            <div className="flex items-center gap-x-3">
                <Image src="https://js.stripe.com/v3/fingerprinted/img/visa-729c2183c5ce752675685a9b83f3e132.svg" width="30" height="30" alt="Stripe" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Secure Payments by Stripe
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Updated Instagram Link and Icon */}
            <a
              href="https://www.instagram.com/blktax/?hl=en"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-primary"
            >
              <Instagram />
            </a>
            {/* Updated LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/blk-tax"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-primary"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;