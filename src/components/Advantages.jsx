import React, { useEffect, useState } from "react";

function Advantages() {
  const [advantages, setAdvantages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://amaranoc4-default-rtdb.firebaseio.com/advantages.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const advantagesArray = Array.isArray(data) ? data : Object.values(data);
        setAdvantages(advantagesArray);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading advantages...</p>;
  if (error) return <p>Error loading advantages: {error}</p>;

  return (
    <div className="absolute left-[120px] top-[1400px]">
      <p className="text-base font-medium">Advantages</p>
      <div className="relative h-[250px] w-[200px] overflow-y-scroll text-[#585e6d] font-normal grid grid-rows-[repeat(16,30px)]">
        {advantages.map((adv, idx) => (
          <label key={idx}>
            <input type="checkbox" /> {adv.name} <br />
          </label>
        ))}
      </div>
    </div>
  );
}

export default Advantages;
