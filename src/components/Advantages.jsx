import React from "react";
import { advantages } from "../data/advantages";
import AdvantageItem from "./AdvantageItem";

const Advantages = () => {

  return (
    <div className="advantages">
      <p className="adv">Advantages</p>
      <div className="adv2">
        {advantages.map((adv, idx) => (
          <AdvantageItem key={idx} name={adv.name} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
