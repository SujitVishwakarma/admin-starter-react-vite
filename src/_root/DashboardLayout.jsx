import React, { useState, lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNavbar } from '../components/sidebar/BottomNavbar';
const Sidebar = lazy(() => import('../components/sidebar/sidebar'));
const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const handleItemClick = (item) => {
    setActiveItem(item); 
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <div className='hidden lg:block'>
          <Suspense fallback={<div>Loading Sidebar...</div>}>
            <Sidebar 
              isOpen={isOpen} 
              activeItem={activeItem} 
              handleItemClick={handleItemClick} 
            />
          </Suspense>
        </div>
        <div className="flex-grow px-2">
          {/* Pass toggle function to Outlet */}
          <Outlet context={{ toggleSidebar, isOpen }} />
          <BottomNavbar handleItemClick={handleItemClick}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
