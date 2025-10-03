"use client";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Clock } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(68,76,231,0.15),transparent_80%)]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 text-center sm:pt-32 sm:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
          >
            Your Trusted Partner in Tax Excellence
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-tight tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            Taxes, Simplified.
            <br />
            <span className="relative inline-block text-blue-600 dark:text-blue-500">
             Returns, Maximized.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl"
          >
            BLK Tax Services delivers expert virtual tax preparation with a personal touch. We handle the complexities so you can enjoy a stress-free tax season with the best possible outcome.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href="/survey"
              className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-4"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="relative rounded-2xl border border-blue-200/30 bg-white/50 p-2 shadow-2xl shadow-blue-500/10 backdrop-blur-lg dark:border-blue-900/30 dark:bg-black/30"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="A person reviewing financial documents on a laptop, indicating tax preparation services" 
              className="h-full w-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Feature Highlights Section */}
      <div id="features" className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
         <motion.div 
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <FeatureCard
              icon={TrendingUp}
              title="Maximize Your Refund"
              description="Our experts find every credit and deduction you deserve, ensuring you get the biggest refund possible."
            />
            <FeatureCard
              icon={Clock}
              title="Save Time & Effort"
              description="Our streamlined virtual process makes filing fast and easy. Upload your documents, and we handle the rest."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="File with Confidence"
              description="Get peace of mind with our accuracy guarantee and year-round support from certified tax professionals."
            />
         </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div variants={cardVariants} className="flex flex-col items-center p-6 text-center">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
      <Icon className="h-7 w-7" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </motion.div>
);

