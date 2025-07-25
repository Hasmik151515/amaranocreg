import React, { useEffect, useState } from 'react';

function HeaderMenu() {
  const [headerMenu, setHeaderMenu] = useState([]);

  useEffect(() => {
    fetch('https://amaranoc4-default-rtdb.firebaseio.com/headerMenu.json')
      .then((res) => res.json())
      .then((data) => {
        setHeaderMenu(data);  // data արդեն զանգված է
      })
      .catch((error) => {
        console.error('Error fetching headerMenu:', error);
      });
  }, []);

  return (
    <>
      {headerMenu.map((item, index) => (
        <div
          key={index}
          className={`grid justify-center items-center ${item.className}`}
        >
          {item.label}
        </div>
      ))}
    </>
  );
}

export default HeaderMenu;
