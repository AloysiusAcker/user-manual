
import React from 'react';
import { 
    HomeIcon, DocumentIcon, ChevronRightIcon,
    IngresoIcon, SalidaIcon, GpsUpdateIcon, PlacadoIcon,
    GlosarioIcon, GestorIcon, TablaIcon, GpsIcon, PersonalIcon, ReporteIcon
} from './icons';


const HacdataIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 4V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasSubItems?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, hasSubItems }) => {
  const activeClasses = isActive ? 'bg-gray-200/70' : 'hover:bg-gray-200/60';
  return (
    <div className={`flex items-center p-2 rounded-md cursor-pointer text-sm font-medium text-gray-700 ${activeClasses}`}>
      {hasSubItems && <ChevronRightIcon className="h-4 w-4 mr-2 text-gray-500" />}
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </div>
  );
};


const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col p-3">
        <div className="flex items-center mb-6 px-2 py-1">
            <HacdataIcon className="h-7 w-7 text-black" />
            <span className="ml-2 text-xl font-bold text-gray-800">Hacdata</span>
        </div>

      <nav className="flex-1 space-y-1">
        <div className="space-y-1">
            <NavItem icon={<HomeIcon className="h-5 w-5 text-gray-600" />} label="Operaciones" />
            <div className='pl-4 space-y-1'>
                <NavItem icon={<IngresoIcon className="h-5 w-5 text-gray-600" />} label="Ingresos" isActive />
                <NavItem icon={<SalidaIcon className="h-5 w-5 text-gray-600" />} label="Salidas" />
                <NavItem icon={<DocumentIcon className="h-5 w-5 text-gray-600" />} label="Generación de Guías" hasSubItems />
                <NavItem icon={<GpsUpdateIcon className="h-5 w-5 text-gray-600" />} label="Actualización GPS" hasSubItems />
                <NavItem icon={<PlacadoIcon className="h-5 w-5 text-gray-600" />} label="Placado" hasSubItems />
            </div>
        </div>
        
        <div className="pt-4 space-y-1">
            <span className="px-2 text-xs font-semibold text-gray-500 uppercase">Anexos</span>
            <div className='pl-4 mt-2 space-y-1'>
                <NavItem icon={<GlosarioIcon className="h-5 w-5 text-gray-600" />} label="GLOSARIO" hasSubItems />
                <NavItem icon={<GestorIcon className="h-5 w-5 text-gray-600" />} label="GESTOR" hasSubItems />
                <NavItem icon={<TablaIcon className="h-5 w-5 text-gray-600" />} label="TABLAS" hasSubItems />
            </div>
        </div>

        <div className="pt-4 space-y-1">
             <NavItem icon={<GpsIcon className="h-5 w-5 text-gray-600" />} label="GPS" />
             <NavItem icon={<PersonalIcon className="h-5 w-5 text-gray-600" />} label="Procesos Personal" hasSubItems />
             <NavItem icon={<ReporteIcon className="h-5 w-5 text-gray-600" />} label="Reportes" hasSubItems />
        </div>

      </nav>
    </div>
  );
};

export default Sidebar;