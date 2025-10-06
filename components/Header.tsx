
import React from 'react';
import { NotionIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2 border-b border-gray-200">
      <div className="flex items-center">
        <NotionIcon className="h-7 w-7 text-black" />
        <span className="ml-2 text-xl font-bold text-gray-800">Hacdata</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Share</button>
        <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Updates</button>
        <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Invite Members</button>
        <div className="flex -space-x-2">
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1027/48/48" alt="User 1" />
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1011/48/48" alt="User 2" />
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1005/48/48" alt="User 3" />
        </div>
        <button className="text-gray-500 hover:text-gray-800">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
