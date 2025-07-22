import React from "react";
import { bathrooms } from "../data/bathrooms";
import BathroomItem from "./BathroomItem";

const Bathrooms = () => (
  <div className="bathrooms">
    <p className="bath">Bathrooms count</p>
    {bathrooms.map((bath, idx) => (
      <BathroomItem key={idx} label={bath.label} className={bath.className} />
    ))}
  </div>
);

export default Bathrooms;
