"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = () => {
  return (
    <section className="bg-gray-50 py-20 dark:bg-black lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Stay updated with the latest insights and news in the world of tax and finance.`,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BlogData.slice(0, 3).map((blog) => (
              <BlogItem blog={blog} key={blog._id} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-block rounded-md bg-primary px-8 py-3 text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 dark:text-black"
            >
              View All Posts
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;