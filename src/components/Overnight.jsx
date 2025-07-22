import React from "react";
import { overnightOptions } from "../data/overnightData";

const Overnight = () => (
  <div className="absolute top-[650px] left-[140px]">
    <p className="text-base font-medium">Overnight availability</p>
    {overnightOptions.map((option, index) => (
      <div key={index} className={option.className}>
        {option.label}
      </div>
    ))}
  </div>
);

export default Overnight;
