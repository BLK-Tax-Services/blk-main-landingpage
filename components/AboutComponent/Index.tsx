import Image from "next/image";
import FAQ from "@/components/FAQ";
import SectionHeader from "../Common/SectionHeader";


const AboutComponents = async () => {
  return (
    <>
      <section className=" overflow-hidden bg-gray-50 pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <span className="border-1 mb-4 mr-4 inline-flex rounded-full border border-meta px-4.5 py-1 text-metatitle  text-meta ">
                About Us
              </span>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Expert Tax Solution for {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Your <span className="text-meta">Financial Success</span>
                </span>
              </h1>
              <p>
                Offering virtual tax preparation services designed to make your
                tax filling simple,fast,and stress-free
              </p>

              <div className=" mt-10 flex flex-wrap gap-5">
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-meta px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Start Survey
                </button>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/about/chart.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" overflow-hidden bg-gray-50 pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/about/chart.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Our Mission
              </h1>
              <p>
                Our mission is to empower individuals and businesses by
                simplifying the tax process, ensuring compliance, and maximizing
                returns. We focus on building lasting relationships and
                delivering exceptional value.
              </p>

              <div className=" mt-10 flex flex-wrap gap-5">
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-meta px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Start Survey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default AboutComponents;
