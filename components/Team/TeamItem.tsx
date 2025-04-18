"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

function TeamItem({ team }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="group w-full max-w-sm overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow bg-white dark:bg-blue-600"
    >
      {/* Top Image Section (Increased height) */}
      <div className="relative h-80 w-full overflow-hidden">
        <img
          src={team.mainImage}
          alt={`Picture of ${team.name}`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bottom Content Section */}
      <div className="bg-blue-50 dark:bg-[#1C2136] px-6 py-6 text-center relative">
        <h2 className="mb-1 text-2xl font-extrabold text-black dark:text-white">
          {team.name}
        </h2>
        <p className="mb-2 text-base text-gray-800 dark:text-gray-300">
          {team.position}
        </p>
        <p className="mx-auto mb-4 max-w-xs text-sm text-gray-600 dark:text-gray-400">
          {team.description}
        </p>
        <div className="mt-4 flex items-center justify-center gap-5">
          {team.socials?.github && (
            <Link
              href={team.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </Link>
          )}
          {team.socials?.twitter && (
            <Link
              href={team.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Twitter className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </Link>
          )}
          {team.socials?.instagram && (
            <Link
              href={team.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Instagram className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default TeamItem;
