import React from 'react';
import NavItem from "./NavItem";

const NavItems = () => {
  return (
      <nav className={'fixed top-0 left-0 h-screen w-16 m-0 flex flex-col text-custom-100 shadow-lg justify-between z-50 bg-custom-900 transition'}>
        <div>
          <NavItem navText={'首頁'} url={'/'}/>
          <NavItem navText={'發布'} url={'/post'}/>
          <NavItem navText={'搜尋'} url={'/search'}/>
        </div>
        <div>
          <NavItem navText={'登入'} url={'/login'}/>
        </div>
      </nav>
  );
};

export default NavItems;
