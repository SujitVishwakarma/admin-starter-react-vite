import React, { useState } from "react";
import { FaHome, FaCog } from 'react-icons/fa';
import { BiSolidDashboard } from "react-icons/bi";
import { MdLeaderboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const BottomNavbar = ({ handleItemClick }) => {
    const [activeItem, setActiveItem] = useState('dashboard'); 
    const navigate = useNavigate();

    const handleClick = (item) => {
        if (handleItemClick) {
            handleItemClick(item); 
        }
        setActiveItem(item); 
        navigate(`/dashboard-layout/${item}`);
    };
    return (
        <nav>
            <ul className="md:hidden fixed bottom-0 left-0 w-full h-16 flex justify-around bg-gray-200 text-white shadow-lg rounded-xl z-10 bg-opacity-100">
                <li 
                    className={`flex items-center justify-center w-full cursor-pointer ${activeItem === 'home' ? 'text-blue-800' : 'text-black'} hover:text-blue-800`}
                    onClick={() => handleClick('home')}
                >
                    <FaHome size="24" />
                </li>
                <li 
                    className={`flex items-center justify-center w-full cursor-pointer ${activeItem === 'dashboard' ? 'text-blue-800' : 'text-black'} hover:text-blue-800`}
                    onClick={() => handleClick('dashboard')}
                >
                    <BiSolidDashboard size="24" />
                </li>
                <li 
                    className={`flex items-center justify-center w-full cursor-pointer ${activeItem === 'leads' ? 'text-blue-800' : 'text-black'} hover:text-blue-800`}
                    onClick={() => handleClick('leads')}
                >
                    <MdLeaderboard size="24" />
                </li>
                <li 
                    className={`flex items-center justify-center w-full cursor-pointer ${activeItem === 'settings' ? 'text-blue-800' : 'text-black'} hover:text-blue-800`}
                    onClick={() => handleClick('settings')}
                >
                    <FaCog size="24" />
                </li>
            </ul>
        </nav>
    );
};
