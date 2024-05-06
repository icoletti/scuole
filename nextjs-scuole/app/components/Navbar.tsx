import React,{useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
      <div>
    <nav className="bg-[#339999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className='text-white'>
            <Link href="/LandingPage">Home</Link>
            </div>
            <div className="ml-10 flex items-baseline space-x-4 text-white">
              <Link href="/SchoolsPage">Schools</Link>
            </div>
            <div className="ml-10 flex items-baseline space-x-4 text-white">
              <Link href="/OpenDayPage">Open days</Link>
            </div>
            <div className="ml-10 flex items-baseline space-x-4 text-white">
              <Link href="/QuadriennaliPage">Quadriennali</Link>
            </div>
            </div>
        </div>
      </div>
    </nav>


      </div>

    
  );
};

export default Navbar;