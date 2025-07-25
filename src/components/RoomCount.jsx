import React, { useEffect, useState } from "react";

const RoomCount = () => {
  const [roomCounts, setRoomCounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://amaranoc4-default-rtdb.firebaseio.com/roomCounts.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data) {
          const roomCountsArray = Array.isArray(data) ? data : Object.values(data);
          setRoomCounts(roomCountsArray);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading room counts...</p>;
  if (error) return <p>Error loading room counts: {error}</p>;

  return (
    <div className="absolute top-[770px] left-[120px]">
      <p className="text-base font-medium">Room count</p>
      {roomCounts.map((option, index) => (
        <div key={index} className={option.className}>
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default RoomCount;
