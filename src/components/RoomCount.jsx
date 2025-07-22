import React from "react";
import { roomCounts } from "../data/roomData";
import RoomItem from "./RoomItem";

const RoomCount = () => (
  <div className="room-count">
    <p className="room">Room count</p>
    {roomCounts.map((option, index) => (
      <RoomItem key={index} option={option} />
    ))}
  </div>
);

export default RoomCount;
