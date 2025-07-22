import React from "react";

const RegionFilter = ({ regions }) => (
  <div className="w-[278px] h-[1750px] rounded-[15px] p-5 border border-gray-200 relative left-[100px]">
    <p className="relative left-2.5 top-2.5 font-medium">Region</p>
    <div
      className="h-[200px] w-[200px] overflow-y-scroll relative top-5 text-[#585e6d] font-normal
                 grid grid-rows-[30px_30px_30px_30px_30px_30px_30px_30px_30px_30px_30px_30px_30px_30px_30px_30px]"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#555 #f1f1f1',
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

export default RegionFilter;
