import React from "react";
import { poolOptions } from "../data/poolData"; 
import PoolItem from "./PoolItem";

const PoolOptions = () => (
  <div className="pool-options">
    <p className="pool">Pool</p>
    {poolOptions.map((option, index) => (
      <PoolItem key={index} option={option} />
    ))}
  </div>
);

export default PoolOptions;
