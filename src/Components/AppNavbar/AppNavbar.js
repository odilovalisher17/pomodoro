import React from 'react';
import './AppNavbar.css'
import logo from './icon-white.png'
import navImg1 from './graph-white.png'
import navImg2 from './config-white.png'
import navImg3 from './user-white.png'

const AppNavbar = () => {
  return (
    <div className='appnavbar'>
      <div className="nav-logo">
          <h1>
              <a href="/">
                  <img src={logo} alt="" />
                  Pomofocus
              </a>
          </h1>
      </div>

      <div className="nav-nav">
          <button className='nav-btn'>
              <img src={navImg1} alt="" />
              <div className="nav-btn-text">Report</div>
          </button>
          <button className='nav-btn'>
              <img src={navImg2} alt="" />
              <div className="nav-btn-text"> Setting</div>
          </button>
          <button className='nav-btn'>
              <img src={navImg3} alt="" />
              <div className="nav-btn-text">Login</div>
          </button>
      </div>
    </div>
  );
}

export default AppNavbar;
