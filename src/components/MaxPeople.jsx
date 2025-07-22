import React, { useState } from "react";

const MaxPeople = () => {
  const [peopleCount, setPeopleCount] = useState(0);

  const handleMinus = () => {
    if (peopleCount > 0) setPeopleCount(peopleCount - 1);
  };

  const handlePlus = () => {
    setPeopleCount(peopleCount + 1);
  };

  return (
    <div className="max-people">
      <p className="max">Max people count</p>
      <div className="min" onClick={handleMinus}>-</div>
      <input className="inp4" type="number" value={peopleCount} readOnly />
      <div className="max2" onClick={handlePlus}>+</div>
    </div>
  );
};

export default MaxPeople;
