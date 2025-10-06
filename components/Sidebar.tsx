
import React from 'react';
import { SearchIcon, UpdateIcon, TeamspaceIcon, SettingsIcon, ChevronRightIcon, HomeIcon, DocumentIcon, DirectoryIcon, CheckCircleIcon } from './icons';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasSubItems?: boolean;
  isSubItem?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, hasSubItems, isSubItem }) => {
  const activeClasses = isActive ? 'bg-gray-200/60' : 'hover:bg-gray-200/60';
  const paddingClass = isSubItem ? 'pl-12' : 'pl-4';
  return (
    <div className={`flex items-center p-1.5 ${paddingClass} rounded-md cursor-pointer text-sm font-medium text-gray-700 ${activeClasses}`}>
      {hasSubItems && <ChevronRightIcon className="h-4 w-4 mr-2 text-gray-500" />}
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col p-3">
      <div className="flex items-center mb-6 px-2">
        <div className="flex items-center space-x-1">
          <img src="https://picsum.photos/id/237/24/24" alt="Acme Inc. Logo" className="rounded-sm" />
          <span className="font-semibold text-sm">Acme Inc.</span>
        </div>
        <span className="ml-1 text-gray-400 text-xs">^</span>
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem icon={<SearchIcon className="h-4 w-4 text-gray-500" />} label="Search" />
        <NavItem icon={<UpdateIcon className="h-4 w-4 text-gray-500" />} label="Updates" />
        <NavItem icon={<TeamspaceIcon className="h-4 w-4 text-gray-500" />} label="All Teamspaces" />
        <NavItem icon={<SettingsIcon className="h-4 w-4 text-gray-500" />} label="Settings & Members" />

        <div className="pt-4">
            <span className="px-4 text-xs font-semibold text-gray-500">Teamspaces</span>
            <div className="mt-2 space-y-1">
                <NavItem icon={<HomeIcon className="h-4 w-4 text-gray-500" />} label="General" isSubItem />
                <NavItem icon={<HomeIcon className="h-4 w-4 text-gray-500" />} label="Acme home" isActive isSubItem />
                <NavItem icon={<DocumentIcon className="h-4 w-4 text-gray-500" />} label="Office Manual" hasSubItems isSubItem />
                <NavItem icon={<DirectoryIcon className="h-4 w-4 text-gray-500" />} label="Employee Directory" hasSubItems isSubItem />
                <NavItem icon={<CheckCircleIcon className="h-4 w-4 text-gray-500" />} label="Engineering" isSubItem />
                <NavItem icon={<DocumentIcon className="h-4 w-4 text-gray-500" />} label="iOS team" hasSubItems isSubItem/>
                <NavItem icon={<DocumentIcon className="h-4 w-4 text-gray-500" />} label="Android team" hasSubItems isSubItem />
                <NavItem icon={<DocumentIcon className="h-4 w-4 text-gray-500" />} label="Web team" hasSubItems isSubItem/>
                <NavItem icon={<DirectoryIcon className="h-4 w-4 text-gray-500" />} label="Managers" isSubItem />
                <NavItem icon={<DocumentIcon className="h-4 w-4 text-gray-500" />} label="Q4 OKRs" hasSubItems isSubItem />
            </div>
        </div>

      </nav>
    </div>
  );
};

export default Sidebar;
