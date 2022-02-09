import React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';
import Main from '../Main/Main';
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <AppNavbar />
      <Main />
    </div>
  );
}

export default Homepage;
