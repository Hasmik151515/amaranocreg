import React from "react";
import PageItem from "./PageItem";

const Pagination = ({ pages }) => {
  return (
    <div className="pagination">
      <div className="slaq">
        <i className="fa-solid fa-arrow-left"></i>
      </div>

      {pages.map((page, index) => (
        <PageItem key={index} label={page.label} className={page.className} />
      ))}

      <div className="right">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
