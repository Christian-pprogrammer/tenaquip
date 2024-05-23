import React from 'react'

const NavbarMobile = () => {
  return (
    <div>
      <div className="header flex">
        <button id="navbar-toggle" className="text-white focus:outline-none">
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default NavbarMobile