
import React from 'react';
import { ShieldCheckIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-brand-primary">
          A-Team Anonymous Reporting
        </h1>
        <div className="flex items-center space-x-2 text-green-600">
          <ShieldCheckIcon className="h-6 w-6" />
          <span className="font-semibold hidden sm:inline">100% Anonymous & Secure</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
