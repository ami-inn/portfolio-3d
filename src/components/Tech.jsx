import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import TitleHeader from "./TitleHeader";

const Tech = () => {
  return (
    <>
      <TitleHeader
        title="My Technical Skills"
        sub="💼 What I Bring to the Table "
      />

      <div className="flex mt-8  flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={index}>
            <>
            <BallCanvas icon={technology.icon} />
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, " tech");
