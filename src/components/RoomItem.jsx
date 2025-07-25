import React from "react";

const RoomItem = ({ option }) => (
  <div className={option.className}>
    {option.label}
  </div>
);

export default RoomItem;
