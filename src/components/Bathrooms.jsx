import React, { useEffect, useState } from "react";

const Bathrooms = () => {
  const [bathrooms, setBathrooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://amaranoc4-default-rtdb.firebaseio.com/bathrooms.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data) {
          const bathsArray = Array.isArray(data) ? data : Object.values(data);
          setBathrooms(bathsArray);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading bathrooms...</p>;
  if (error) return <p>Error loading bathrooms: {error}</p>;

  return (
    <div className="absolute top-[1000px] left-[120px]">
      <p className="text-base font-medium">Bathrooms count</p>
      {bathrooms.map((bath, idx) => (
        <div key={idx} className={bath.className}>
          {bath.label}
        </div>
      ))}
    </div>
  );
};

export default Bathrooms;
