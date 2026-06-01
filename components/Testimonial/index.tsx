"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialData = [
  {
    id: 1,
    name: "Sarah L.",
    designation: "Small Business Owner",
    image: "https://placehold.co/96x96/6366f1/ffffff?text=SL",
    content: "Working with them was a game-changer for my business. They handled everything with such professionalism and expertise. My tax season was completely stress-free for the first time ever!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael B.",
    designation: "Freelance Designer",
    image: "https://placehold.co/96x96/ec4899/ffffff?text=MB",
    content: "As a freelancer, my finances can get complicated. Their team simplified the entire process and helped me find deductions I didn't even know existed. I couldn't be happier with the results.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica P.",
    designation: "Real Estate Agent",
    image: "https://placehold.co/96x96/8b5cf6/ffffff?text=JP",
    content: "The attention to detail is just incredible. They are always responsive, thorough, and genuinely care about getting the best outcome for their clients. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "David T.",
    designation: "Consultant",
    image: "https://placehold.co/96x96/f59e0b/ffffff?text=DT",
    content: "I've been a client for over three years, and the service is consistently excellent. They make a complex subject easy to understand and are always ahead of the curve.",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const SingleTestimonial = ({ review }: { review: typeof testimonialData[0] }) => {
  const { name, designation, image, content, rating } = review;
  return (
    <div className="relative flex h-full flex-col justify-between rounded-2xl bg-gray-50 p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/70">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={image} alt={name} className="h-14 w-14 rounded-full object-cover" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{designation}</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <StarRating rating={rating} />
          </div>
        </div>
        <p className="mt-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="absolute left-8 top-24 -z-10 text-8xl font-extrabold text-gray-200/50 dark:text-white/10">
            "
          </span>
          {content}
        </p>
      </div>
      <div className="mt-4 sm:hidden">
        <StarRating rating={rating} />
      </div>
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
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 dark:bg-blue-900/30">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-300">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            See why our clients love using BLK for their tax filing needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
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
