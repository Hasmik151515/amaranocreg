import React from 'react';
import { headerMenu } from '../data/headerMenu';

function HeaderMenu() {
  return (
    <>
      {headerMenu.map((item, index) => (
        <div
          key={index}
          className={`grid justify-center items-center  ${item.className}`}
        >
          {item.label}
        </div>
      ))}
    </>
  );
}

export default HeaderMenu;
