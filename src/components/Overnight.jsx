import React, { useEffect, useState } from "react";

const Overnight = () => {
  const [overnightOptions, setOvernightOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://amaranoc4-default-rtdb.firebaseio.com/overnightOptions.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data) {
          const optionsArray = Array.isArray(data) ? data : Object.values(data);
          setOvernightOptions(optionsArray);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading overnight options...</p>;
  if (error) return <p>Error loading overnight options: {error}</p>;

  return (
    <div className="absolute top-[650px] left-[140px]">
      <p className="text-base font-medium">Overnight availability</p>
      {overnightOptions.map((option, index) => (
        <div key={index} className={option.className}>
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Overnight;
