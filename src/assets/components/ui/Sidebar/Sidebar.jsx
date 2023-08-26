import React, { useEffect, useState } from 'react';
import './Sidebar.css'
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-60 lg:block hidden bg-[#1b1b1b] text-white font-semibold transition-transform duration-300 transform ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className="p-10">
        <div className="logo my-5">Bakhtiyor</div>
        <li className="my-5">
          <a href="#skills" className='sidebarLinks'>Skills <span className='transition duration-500 text-[--primary-text] hidden'>#</span></a>
        </li>
        <li className="my-5">
          <a href="#about" className='sidebarLinks'>About Me <span className='transition duration-500 text-[--primary-text] hidden'>#</span></a>
        </li>
        <li className="my-5">
          <a href="#" className='sidebarLinks'>Portfolio <span className='transition duration-500 text-[--primary-text] hidden'>#</span></a>
        </li>
        <li className="my-5">
          <a href="#" className='sidebarLinks'>Contacts <span className='transition duration-500 text-[--primary-text] hidden'>#</span></a>
        </li>
        <li className="backButton">
          <a href="#">Back to top</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;