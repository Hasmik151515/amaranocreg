import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderMenu({ menuItems }) {
  const navigate = useNavigate();

  const handleMenuClick = (label) => {
    // Օրինակ, ուղի պատրաստել ըստ լեյբլի, օրինակ՝ Home -> /home
    const path = '/' + label.toLowerCase().replace(/\s+/g, '-');
    navigate(path);
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`grid justify-center items-center cursor-pointer ${item.className}`}
          onClick={() => handleMenuClick(item.label)}
        >
          {item.label}
        </div>
      ))}
    </>
  );
}

export default HeaderMenu;
