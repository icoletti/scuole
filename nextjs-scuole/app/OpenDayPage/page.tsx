"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
const DynamicOpenDay = dynamic(() => import('../components/OpenDay'), { ssr: false });
const OpenDayPage = () => {
    return(
      <div>
        <Navbar />
        <DynamicOpenDay />
      </div>
      
    ) 
  };

export default OpenDayPage;