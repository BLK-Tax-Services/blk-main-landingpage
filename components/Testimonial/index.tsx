"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- TypeScript Declaration for Swiper ---
declare global {
  interface Window {
    Swiper: any;
  }
}

// --- Mock Data ---
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


// --- Helper Components ---
const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
);

const ArrowLeft = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SingleTestimonial = ({ review }) => {
  const { name, designation, image, content, rating } = review;
  return (
    <div className="relative flex h-full flex-col justify-between rounded-2xl bg-gray-50 p-8 shadow-lg transition-all hover:shadow-xl dark:bg-blacksection/50">
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
          <span className="absolute left-8 top-24 text-8xl font-extrabold text-gray-200/50 dark:text-white/10 -z-10">
            “
          </span>
          {content}
        </p>
      </div>
       <div className="sm:hidden mt-4">
          <StarRating rating={rating} />
       </div>
    </div>
  );
};

const SectionHeader = ({ headerInfo }) => {
  const { title, subtitle, description } = headerInfo;
  return (
    <div className="text-center">
      <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
        {title}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {subtitle}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};


const Testimonial = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/swiper@8/swiper-bundle.min.js";
    script.onload = () => {
      if (swiperRef.current && window.Swiper) {
        new window.Swiper(swiperRef.current, {
          modules: [window.Swiper.Autoplay, window.Swiper.Pagination, window.Swiper.Navigation],
          spaceBetween: 30,
          slidesPerView: 1,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: true,
          },
          pagination: {
            el: ".swiper-pagination-custom",
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          },
          breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
        if (script.parentNode) {
            document.body.removeChild(script);
        }
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://unpkg.com/swiper@8/swiper-bundle.min.css');
        .swiper-pagination-custom .swiper-pagination-bullet {
          background-color: #a8a29e !important;
          width: 10px !important;
          height: 10px !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: #3b82f6 !important;
          opacity: 1 !important;
        }
      `}</style>
      <section className="bg-white py-20 dark:bg-black sm:py-24">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `What Our Clients Say`,
                description: `See why our clients love using BLK for their tax filing needs`,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mx-auto mt-16 max-w-c-1235 px-4 sm:px-12"
          >
            <div className="swiper" ref={swiperRef}>
              <div className="swiper-wrapper pb-4">
                {testimonialData.map((review) => (
                  <div key={review.id} className="swiper-slide h-auto !flex !flex-col p-2">
                    <SingleTestimonial review={review} />
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-0 z-10 -translate-y-1/2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 dark:bg-blacksection dark:hover:bg-gray-800">
                <ArrowLeft className="h-6 w-6 text-gray-800 dark:text-white" />
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 right-0 z-10 -translate-y-1/2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 dark:bg-blacksection dark:hover:bg-gray-800">
                <ArrowRight className="h-6 w-6 text-gray-800 dark:text-white" />
            </div>

            {/* Custom Pagination Container */}
            <div className="swiper-pagination-custom !relative mt-8"></div>
            
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

