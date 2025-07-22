import React from "react";
import { advantages } from "../data/advantages";
import AdvantageItem from "./AdvantageItem";

const Advantages = () => {

  return (
    <div className=" absolute left-[140px] top-[1400px]">
      <p className="text-base font-medium">Advantages</p>
      <div className="relative h-[250px] w-[200px] overflow-y-scroll text-[#585e6d] font-normal grid grid-rows-[repeat(16,30px)]">
        {advantages.map((adv, idx) => (
          <AdvantageItem key={idx} name={adv.name} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
