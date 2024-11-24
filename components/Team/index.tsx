import React from "react";
import SectionHeader from "../Common/SectionHeader";
import TeamItem from "./TeamItem";
import TeamData from "./teamData";

export default function Team() {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: "OUR TEAM",
              subtitle: "Meet Our Experts",
              description:
                "Our team consists of experienced professionals dedicated to providing exceptional service and innovative solutions.",
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-7xl px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="flex flex-wrap justify-between">
          {TeamData.map((team) => (
            <TeamItem team={team} key={team._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
