import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      {/* Barra di navigazione */}
      <nav className="bg-[#339999]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Link alla pagina Home */}
              <div className='text-white'>
                <Link href="/LandingPage">Home</Link>
              </div>
              {/* Link alla pagina Open days */}
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <Link href="/OpenDayPage">Open days</Link>
              </div>
              {/* Link alla pagina Quadriennali */}
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <Link href="/QuadriennaliPage">Quadriennali</Link>
              </div>
              {/* Link alla pagina Licei */}
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <Link href="/LiceiPage">Licei</Link>
              </div>
              {/* Link alla pagina I.F.P. */}
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <Link href="/FormazionePage">I.F.P.</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;