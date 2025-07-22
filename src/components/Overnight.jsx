import React from "react";
import { overnightOptions } from "../data/overnightData";

const Overnight = () => (
  <div className="overnight">
    <p className="over">Overnight availability</p>
    {overnightOptions.map((option, index) => (
      <div key={index} className={option.className}>
        {option.label}
      </div>
    ))}
  </div>
);

export default Overnight;
