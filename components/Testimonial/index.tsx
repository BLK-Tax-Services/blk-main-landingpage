"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper"; // Corrected import path
import "swiper/css";
import "swiper/css/pagination";

import { testimonialData } from "./testimonialData"; 
import SectionHeader from "../Common/SectionHeader";

const SingleTestimonial = ({ review }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="relative h-full rounded-lg bg-gray-50 p-8 shadow-md transition-all hover:shadow-lg dark:bg-blacksection">
      <span className="absolute right-8 top-8 text-7xl font-extrabold text-gray-200/50 dark:text-white/10">
        “
      </span>
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{designation}</p>
        </div>
      </div>
      <p className="mt-6 text-base text-gray-700 dark:text-gray-300">
        {content}
      </p>
    </div>
  );
};


const Testimonial = () => {
  return (
    <section className="bg-white py-20 dark:bg-black sm:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionHeader
            headerInfo={{
              title: `TESTIMONIALS`,
              subtitle: `What Our Clients Say`,
              description: `Our clients send us a bunch of smiles with our services and we love them`,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-c-1235"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-16"
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review?.id} className="h-auto">
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;