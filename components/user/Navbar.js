import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import avatar from '../../data/avatar.jpg';
import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../../context/UserContext';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
        setActiveMenu(false);
    } else {
        setActiveMenu(true);
    }
    }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative text-stone-800">

      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => 
      !prevActiveMenu)}  icon={<AiOutlineMenu />} />
      <div className='flex'>
      </div>
    </div>
  );
};

export default Navbar;