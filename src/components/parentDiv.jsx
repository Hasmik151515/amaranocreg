import React from "react";
import RegionFilter from "./RegionFilter";
import PriceFilter from "./PriceFilter";
import MaxPeople from "./MaxPeople";
import Overnight from "./Overnight";
import RoomCount from "./RoomCount";
import Bathrooms from "./Bathrooms";
import PoolOptions from "./PoolOptions";
import Advantages from "./Advantages";
import { regions } from "../data/regions";

const ParentDiv = () => (
  <div className="arajin">
    <RegionFilter regions={regions} />
    <PriceFilter />
     <MaxPeople />
   <Overnight />
    {/* <RoomCount /> */}
    {/* <Bathrooms /> */}
    {/* <PoolOptions /> */}
    {/* <Advantages /> */}
  </div>
);

export default ParentDiv;
