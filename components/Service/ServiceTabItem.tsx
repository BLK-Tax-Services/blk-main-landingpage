import React from "react";
import { ServiceTab } from "@/types/serviceTab";
import Image from "next/image";
import ServiceTabData from "@/components/Service/serviceTabData";

const ServiceTabItem = ({ serviceTab }: { serviceTab: ServiceTab }) => {
  return (
    <>
      <div
        id="cards-container"
        className="grid grid-cols-1 items-center gap-6 py-10 text-center sm:grid-cols-2 lg:grid-cols-3"
      >
        {ServiceTabData.map((card) => (
          <div
            className="card max-w-xl transform overflow-hidden rounded-lg border border-gray-200 shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            data-category={card.category}
          >
            <div className="mb-4 flex justify-center">
              <div className="inner-content flex transform items-center justify-center rounded-full bg-blue-200 transition duration-300 hover:translate-y-1">
                <Image
                  width={299}
                  height={299}
                  src={card.imageUrl}
                  alt={card.title}
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="mb-2 text-xl font-semibold">{card.title}</h2>
            <p className="mb-4 text-gray-600">{card.description}</p>
            <button className="mb-2 text-sm text-blue-500 underline">
              Learn More
            </button>
            <div className="mb-4 text-sm text-gray-500">{card.price}</div>
            <button className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Fill Survey
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTabItem;
