// Dashboard.js
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsArrowUp } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
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
    <div className="flex flex-col  gap-3 w-full ">
      <header className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded bg-blue-500 text-white flex items-center"
          >
            <HiOutlineMenuAlt1 className="text-xl" />
          </button>
          <h1 className="text-xl">Dashboard</h1>
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
      {/* Content for the Dashboard goes here */}
      <div>
        <div className="p-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Total Estimate Card */}
          <div className="p-3 bg-white border rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Total Estimate</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <FiMoreHorizontal className="w-6 h-6" />
              </button>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 ">
              {/* Accepted */}
              <div>
                <p className="text-2xl font-semibold">$ 32.1k</p>
                <p className="text-green-500 text-sm">● Accepted</p>
              </div>

              {/* Pending */}
              <div>
                <p className="text-2xl font-semibold">$ 16.23k</p>
                <p className="text-orange-500 text-sm">● Pending</p>
              </div>

              {/* Canceled */}
              <div>
                <p className="text-2xl font-semibold">$ 2.58k</p>
                <p className="text-red-500 text-sm">● Canceled</p>
              </div>
              <div className="flex justify-between flex-col items-start text-left mt-6">
                <p className="text-gray-400 text-sm">08.52</p>
                <p className="text-gray-400 text-sm">21 September 2023</p>
              </div>
            </div>
          </div>
          {/* Total Customers Card */}
          <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="p-3 bg-white border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Total Customers</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiMoreHorizontal className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-4xl font-semibold">329</p>
                <p className="text-green-500 text-sm flex items-center">
                  <BsArrowUp className="w-4 h-4 mr-1" />
                  15%
                </p>
              </div>
            </div>
            <div className="p-3 bg-white border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Total Members</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiMoreHorizontal className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-4xl font-semibold">580</p>
                <p className="text-green-500 text-sm flex items-center ">
                  <BsArrowUp className="w-4 h-4 mr-1" />
                  25%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
