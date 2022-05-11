import React from 'react';
import HomeModel from '../../components/homeModel';
import './style.css';

const HomePage = () => {
  return (
    <>
      <div className='canvas-back'>
        <HomeModel />
      </div>
      <div className='logo'>
        <img src='img/logo.png' alt='logo' width={100} height={100} />
      </div>
    </>
  )
};

export default HomePage;