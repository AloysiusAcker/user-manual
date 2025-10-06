
import React from 'react';

const HacdataIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 4V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ThreeDotsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01" />
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white z-10">
      <div className="flex items-center">
        <span className="text-lg font-semibold text-gray-800">Ingreso de Bienes</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Usuario</span>
        <button className="text-gray-500 hover:text-gray-800">
          <ThreeDotsIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;