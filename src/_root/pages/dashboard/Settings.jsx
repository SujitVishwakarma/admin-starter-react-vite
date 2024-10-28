// Settings.js
import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
const Settings = () => {
    const navigate = useNavigate();
  const { toggleSidebar, isOpen } = useOutletContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };
  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded bg-blue-500 text-white flex items-center"
          >
            <HiOutlineMenuAlt1 className="text-xl" />
          </button>
          <h1 className="text-xl">Settings</h1>
        </div>
        {/* user part is here  */}
        <div className="flex items-center gap-3  rounded-3xl px-4 ">
          <div className="lg:flex relative hidden">
            <span className="text-2xl ">
              <IoMdNotifications />
            </span>
            <span className="bg-red-500 w-2 h-2 rounded-full absolute right-1 top-[2px]"></span>
          </div>
          <span className="opacity-40 lg:block hidden">|</span>
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40x40"
              alt="user-image"
              className="rounded-full cursor-pointer w-10 h-10 bg-white"
              onClick={handleDropdownToggle}
            />
            {dropdownOpen && (
              <div className="absolute bg-white border border-gray-300 shadow-lg mt-2 right-2 top-14 max-w-[160px] w-full rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <span>
                      <CgProfile />
                    </span>
                    <span>Profile</span>
                  </li>
                  <li className=" px-4 py-2 hover:bg-gray-100 cursor-pointer flex lg:hidden items-center gap-2">
                    <span>
                      <IoMdNotifications />
                    </span>
                    <span>Notification</span>
                  </li>
                  <li onClick={handleLogout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <span>
                      <FaSignOutAlt />
                    </span>
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="lg:flex flex-col max-w-[90px] overflow-hidden hidden">
            <h4 className="font-primary text-sm font-normal">User Name</h4>
            <p className="font-primary text-primary-2 text-xs font-normal">
              user@gmail.com
            </p>
          </div>
        </div>
      </header>
      {/* Content for Settings goes here */}
    </div>
  );
};

export default Settings;
