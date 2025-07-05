import React from "react";

import CountUp from "react-countup";
import { counterItems } from "../constants";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="px-5 xl:mt-28 mt-32">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-primary rounded-lg p-10 flex flex-col justify-center rounded-md"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white-50 text-lg ">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
