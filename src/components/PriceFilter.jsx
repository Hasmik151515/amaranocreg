import React from "react";

const PriceFilter = () => (
  <div className="price-filter">
    <p className="absolute size-16 font-normal top-[400px] left-[140px]">Price</p>
    <div className=" absolute top-[395px] left-[200px] border border-1-blue rounded-full h-9 w-9 flex font-medium justify-center items-center">Դ</div>
    <div className="absolute top-[395px] left-[250px] border border-1-blue rounded-full h-9 w-9 flex justify-center items-center"><i className="fa-solid fa-dollar-sign"></i></div>
    <div className="absolute top-[395px] left-[300px] border border-1-blue rounded-full h-9 w-9 flex justify-center items-center"><i className="fa-solid fa-euro-sign"></i></div>
    <div className="absolute top-[395px] left-[350px] border border-1-blue rounded-full h-9 w-9 flex justify-center items-center"><i className="fa-solid fa-ruble-sign"></i></div>

    <input className="imp2" type="text" placeholder="From" />
    <p className="gic">-</p>
    <input className="imp3" type="text" placeholder="To" />
  </div>
);

export default PriceFilter;
