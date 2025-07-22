import React from "react";
import { houseTypes } from "../data/houseTypes";

const HouseTypes = () => (
  <div className="tner">
    {houseTypes.map((type, idx) => (
      <div key={idx} className="tun">
        <img className={type.className} src={type.image} alt={type.label} />
        <p className="hau2">{type.label}</p>
      </div>
    ))}
  </div>
);

export default HouseTypes;
