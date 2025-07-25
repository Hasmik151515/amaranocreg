import React, { useEffect, useState } from "react";
import PageItem from "./PageItem";

const Pagination = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://amaranoc4-default-rtdb.firebaseio.com/pages.json")  
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setPages(data); 
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading pages...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="absolute left-[500px] top-[2700px]">
      <div className="flex justify-center items-center relative top-[80px] left-[300px] h-[40px] w-[40px] rounded-full text-[#585e6d]">
        <i className="fa-solid fa-arrow-left"></i>
      </div>

      {pages.map((page, index) => (
        <PageItem key={index} label={page.label} className={page.className} />
      ))}

      <div className="flex justify-center items-center relative top-[-160px] left-[620px] h-[40px] w-[40px] rounded-full text-[#585e6d]">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
