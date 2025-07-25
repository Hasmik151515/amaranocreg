import React, { useEffect, useState } from "react";

const PoolOptions = () => {
  const [poolOptions, setPoolOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://amaranoc4-default-rtdb.firebaseio.com/poolOptions.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const optionsArray = Array.isArray(data) ? data : Object.values(data);
        setPoolOptions(optionsArray);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading pool options...</p>;
  if (error) return <p>Error loading pool options: {error}</p>;

  return (
    <div className="absolute top-[1180px] left-[120px]">
      <p className="text-base font-medium">Pool</p>
      {poolOptions.map((option, index) => (
        <div key={index} className={option.className}>
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default PoolOptions;
