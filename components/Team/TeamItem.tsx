"use client";
import React from "react";
import { motion } from "framer-motion";
function TeamItem({ team }) {
  return (
    <div className="relative mb-32 mt-16 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <div className="overflow-hidden rounded bg-white shadow-md">
          <div className="absolute -mt-20 flex w-full justify-center">
            <div className="h-32 w-32">
              <img
                src={team.mainImage}
                alt={`Display Picture of ${team.name}`}
                role="img"
                className="h-full w-full rounded-full object-cover shadow-md"
              />
            </div>
          </div>
          <div className="mt-16 px-6">
            <h1 className="mb-1 text-center text-3xl font-bold">{team.name}</h1>
            <p className="text-center text-sm text-gray-800">{team.position}</p>
            <p className="pt-3 text-center text-base font-normal text-gray-600">
              {team.description}
            </p>
            <div className="flex w-full justify-center pb-5 pt-5">
              {team.socials?.github && (
                <a
                  href={team.socials.github}
                  className="mx-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div aria-label="Github" role="img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3" />
                      <path d="M14 22v-3.87a3.37 3.37 0 00-.94-2.61" />
                      <path d="M14 22v-3.87a3.37 3.37 0 00.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.78 5.07 5.07 0 00-.09-3.73s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1a5.07 5.07 0 00-.09 3.73A5.44 5.44 0 003.5 8.55c0 5.42 3.3 6.61 6.44 7" />
                    </svg>
                  </div>
                </a>
              )}
              {team.socials?.twitter && (
                <a
                  href={team.socials.twitter}
                  className="mx-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div aria-label="Twitter" role="img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53" />
                      <path d="M23 3a4.48 4.48 0 01-7.86 3" />
                      <path d="M20.57 8.57A10.66 10.66 0 013 4s-4 9 5 13" />
                      <path d="M14 22c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83" />
                      <path d="M23 3a7.72 7.72 0 01-1.43 2.09" />
                    </svg>
                  </div>
                </a>
              )}
              {team.socials?.instagram && (
                <a
                  href={team.socials.instagram}
                  className="mx-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div aria-label="Instagram" role="img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TeamItem;
