// Sidebar.js
import React from 'react';
import { FaCog, FaSignOutAlt } from 'react-icons/fa';
import { BiSolidDashboard } from "react-icons/bi";
import { MdLeaderboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, activeItem, handleItemClick }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    handleItemClick(item); // Update the active item
    navigate(`/dashboard-layout/${item}`); // Navigate to the selected item
  };
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={`bg-[#f5f7f9] text-primary-2 flex flex-col justify-between min-h-screen transition-width duration-300 ${isOpen ? 'w-64' : 'w-16'} sticky top-0 left-0`}>
      <div className='flex flex-col'>
        <div className="flex items-center p-4 mb-5">
          <img
            src="https://via.placeholder.com/40x40"
            alt="Logo"
            className="rounded-full w-10 h-10 bg-white"
            loading='lazy'
          />
          {isOpen && <span className="ml-4 text-lg font-bold">Logo</span>}
        </div>

        <ul className="flex flex-col p-4">
          <li
            onClick={() => handleClick('dashboard')}
            className={`flex items-center mb-2 p-2 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer ${activeItem === 'dashboard' ? 'bg-white text-black' : ''}`}
          >
            <BiSolidDashboard className="text-xl" />
            {isOpen && <span className="ml-4">Dashboard</span>}
          </li>
          <li
            onClick={() => handleClick('leads')}
            className={`flex items-center mb-2 p-2 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer ${activeItem === 'leads' ? 'bg-white text-black' : ''}`}
          >
            <MdLeaderboard className="text-xl" />
            {isOpen && <span className="ml-4">Leads</span>}
          </li>
          <li 
            onClick={() => handleClick('settings')}
            className={`flex items-center mb-2 p-2 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer ${activeItem === 'settings' ? 'bg-white text-black' : ''}`}
          >
            <FaCog className="text-xl" />
            {isOpen && <span className="ml-4">Settings</span>}
          </li>
        </ul>
      </div>
      <div className='flex items-center p-4 mb-2 w-full'>
        <button onClick={handleLogout} className='flex w-full items-center mb-2 p-2 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out duration-300'>
          <FaSignOutAlt className="text-xl" />
          {isOpen && <span className="ml-4">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
