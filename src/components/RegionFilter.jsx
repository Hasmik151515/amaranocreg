import React, { useEffect, useState } from "react";

function RegionFilter() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://amaranoc4-default-rtdb.firebaseio.com/regions.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Տվյալները firebase-ից, հավանաբար, օբյեկտ են, կվերափոխենք զանգվածի
        if (data) {
          // Եթե data օբյեկտ է՝ վերափոխում ենք զանգվածի
          const regionsArray = Array.isArray(data) ? data : Object.values(data);
          setRegions(regionsArray);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading regions...</p>;
  if (error) return <p>Error loading regions: {error}</p>;

  return (
    <div className="w-[278px] h-[1750px] rounded-[15px] p-5 border border-gray-200 relative left-[100px]">
      <p className="relative left-2.5 top-2.5 font-medium">Region</p>
      <div
        className="h-[200px] w-[200px] overflow-y-scroll relative top-5 text-[#585e6d] font-normal
                  grid grid-rows-[repeat(16,30px)]"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#555 #f1f1f1",
        }}
      >
        {regions.map((region, idx) => (
          <label key={idx} className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>{region.name} {region.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RegionFilter;
