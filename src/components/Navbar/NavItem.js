import React from 'react';
import {Link} from "react-router-dom";

const NavItem = ({ navText, url }) => {
  return (
      <Link to={url}>
        <div className={'group p-4 flex items-center justify-center text-xl h-12 w-12 mt-2 mb-2 mx-auto bg-custom-700 shadow-lg hover:bg-custom-800 rounded-3xl transition-all cursor-pointer hover:rounded-xl'}>
            0
          <span className={'absolute w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-white bg-custom-800 text-base font-bold transition-all duration-100 origin-left transform scale-0 group-hover:scale-100'}>
          {navText}
        </span>
        </div>
      </Link>
  );
};

export default NavItem;
