import React from 'react';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from "react-router-dom";
function Header() {
   const navigate = useNavigate();

    const handleClick = () => {
    navigate('/login');
  };
  return (
    
    <div className="grid grid-cols-[310px_240px_100px_100px_100px_349px_70px_270px] h-[93.2px] ">
      <div className="flex justify-center items-center ">
        <img className="h-11 w-40 " src="https://amaranoc.am/images/logo.svg" alt="logo" />
      </div>

      <HeaderMenu />

      <div className="flex justify-end items-center">
        <i className="fa-solid fa-globe text-black"></i>
      </div>

      <div className="flex justify-center items-center">
        <a href="http://localhost:3000/login
"><i className="fa-regular fa-user text-black" ></i></a>
      </div>

      <div className="flex justify-start items-center relative">
        <input
          className="h-[34px] w-[200px] rounded-full text-[#101623] border border-[#101623] px-2 text-[15px]"
          type="text"
          placeholder="Search"
        />
        <i className="fa-solid fa-magnifying-glass absolute left-[1440px] text-[#101623] text-[13px]"></i>
      </div>
    </div>
  );
}

export default Header;
