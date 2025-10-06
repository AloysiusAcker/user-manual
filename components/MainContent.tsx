
import React from 'react';
import { CheckCircleIcon, BoxIcon, GeneratedIcon } from './icons';
import ProcessFlowChart from './ProcessFlowChart';

const InfoRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="flex items-center py-4">
    <span className="w-40 text-md text-gray-600">{label}</span>
    <div className="text-md font-semibold text-gray-900">{value}</div>
  </div>
);

const ProcessStep: React.FC<{ label: string; isComplete?: boolean }> = ({ label, isComplete }) => (
  <div className="flex items-center space-x-3">
    {isComplete ? (
      <CheckCircleIcon className="h-6 w-6 text-blue-500" />
    ) : (
      <div className="h-6 w-6 border-2 border-gray-300 rounded-full"></div>
    )}
    <span className="text-gray-700">{label}</span>
  </div>
);

const DocumentationCard: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ icon, title, items }) => (
    <div className="bg-gray-50 rounded-xl p-6 flex-1">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-lg font-semibold ml-3">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{items.join(', ')}.</p>
    </div>
);

const KpiCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-gray-50 rounded-xl p-8 text-center flex-1">
    <p className="text-5xl font-bold text-blue-500">{value}</p>
    <p className="text-gray-500 mt-2">{label}</p>
  </div>
);


const MainContent: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="bg-gray-50 rounded-2xl p-8 mb-12">
        <div className="divide-y divide-gray-200">
          <InfoRow 
            label="Operación" 
            value={
              <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-lg">Ingreso</span>
            }
          />
          <InfoRow label="Servicio" value="Bienes en Desuso y Apoyo Logístico BBVA" />
          <InfoRow label="Sub - Proceso" value="Recepción de Bienes - Retiro/Recojo de Bienes" />
          <InfoRow 
            label="Procesos" 
            value={
              <div className="flex space-x-2">
                <button className="bg-green-400 text-green-900 font-bold px-6 py-2 rounded-lg text-sm">Baja</button>
                <button className="bg-gray-200 text-gray-700 font-bold px-6 py-2 rounded-lg text-sm">Proyectos Especiales</button>
              </div>
            } 
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-3">Ingreso de Bienes</h2>
        <div className="flex space-x-4 text-blue-500 mb-6">
          <span>#recepcion</span>
          <span>#almacen</span>
          <span>#rotación</span>
        </div>
        <p className="text-gray-600 leading-relaxed mb-8">
          El proceso de Ingreso consiste en la admisión, validación y registro formal de cualquier bien físico en el inventario gestionado por HAC DATA a través del software GESTOR. Esta operación es el punto de partida para la trazabilidad de un activo dentro del almacén, ya sea que ingrese como un bien nuevo, de baja, de uso rotativo, o un activo para almacenamiento temporal.
        </p>
        <div className="flex space-x-12">
          <ProcessStep label="Setting up research meeting" isComplete />
          <ProcessStep label="Make the logo bigger" />
          <ProcessStep label="Check to-do's" isComplete />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Objetivo</h2>
        <p className="text-gray-600 leading-relaxed">
          Garantizar la correcta admisión, verificación y registro de todos los bienes que ingresan físicamente a un almacén o ubicación gestionada, asegurando que su información digital en el sistema GESTOR sea precisa y esté actualizada desde el primer momento. Este registro ha de tener plena correspondencia con los registros definidos en la plataforma de Gestión del BBVA (GPS).
        </p>
      </section>

      <ProcessFlowChart />

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6">Documentación Gestionada</h2>
        <div className="flex gap-8">
            <DocumentationCard 
                icon={<BoxIcon className="h-8 w-8 text-red-500" />}
                title="Documentos de Entrada"
                items={['Guía de Remisión (del proveedor o del centro de costo)', 'Acta de Baja', 'Acta de Donación', 'Ordenes de Compra', 'Boletas', 'Facturas']}
            />
            <DocumentationCard 
                icon={<GeneratedIcon className="h-8 w-8 text-red-500" />}
                title="Documentos Generados"
                items={['Ticket GESTOR', 'Registro Fotográfico', 'Acta de Conformidad de Recepción']}
            />
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6">Procesos Relacionados</h2>
        <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Bienes en Desuso</h3>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h4 className="font-semibold text-gray-500 text-sm mb-2">CONTEXTO</h4>
                    <p className="text-gray-600 text-sm">Se aplica cuando un activo operativo o nuevo ingresa al almacén para un uso futuro o almacenamiento estratégico.</p>
                    <a href="#" className="text-blue-500 text-sm">hacdata.io</a>

                    <h4 className="font-semibold text-gray-500 text-sm mb-2 mt-6">Sub Procesos Involucrados</h4>
                     <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                            <img src="https://picsum.photos/seed/user1/32/32" className="rounded-full mr-3" alt="user avatar" />
                            <div>
                                <p className="font-semibold">Recepción de Bienes</p>
                                <p className="text-xs text-gray-500">Directamente recibido en el Almacen</p>
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                            <img src="https://picsum.photos/seed/user2/32/32" className="rounded-full mr-3" alt="user avatar" />
                            <div>
                                <p className="font-semibold">Retiro / Recojo de Bienes</p>
                                <p className="text-xs text-gray-500">Apersonamiento en determinada Ubicación para ser retirado y luego ingresado al almacén</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-500 text-sm mb-2">PARTICULARIDADES</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                        <li>La documentación de respaldo principal es el Acta de Baja.</li>
                        <li>Los bienes ingresan al "Almacén de Baja" (Ej: ARENALES).</li>
                        <li>El estado del bien se registra como INOPERATIVO y su condición como USADO.</li>
                        <li>La finalidad del ingreso es su posterior Venta, Donación o Reciclaje.</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6 text-center">KPIS</h2>
        <div className="flex gap-8">
            <KpiCard value="1M+" label="community members" />
            <KpiCard value="150+" label="community groups" />
            <KpiCard value="50+" label="countries represented" />
        </div>
      </section>

    </div>
  );
};

export default MainContent;
