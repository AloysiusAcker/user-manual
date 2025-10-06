import React from 'react';
import { CheckCircleIcon, BoxIcon, GeneratedIcon, ChevronRightIcon } from './icons';
import ProcessFlowChart from './ProcessFlowChart';

const InfoRow: React.FC<{ label: string; value: React.ReactNode, isFirst?: boolean, isLast?: boolean }> = ({ label, value, isFirst, isLast }) => (
  <div className={`flex items-center ${isFirst ? 'pt-0' : 'pt-4'} ${isLast ? 'pb-0' : 'pb-4'}`}>
    <span className="w-32 text-sm text-gray-500">{label}</span>
    <div className="h-5 w-px bg-gray-200 mx-6"></div>
    <div className="text-sm font-medium text-gray-800">{value}</div>
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
        <p className="text-gray-600 leading-relaxed text-sm">{items.join(', ')}.</p>
    </div>
);

const KpiCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-gray-50 rounded-xl p-8 text-center flex-1">
    <p className="text-5xl font-bold text-blue-500">{value}</p>
    <p className="text-gray-500 mt-2">{label}</p>
  </div>
);

const HighLevelFlow: React.FC = () => {
    const stepsData = [
      {
        title: 'DISPARADOR',
        subtitle: 'Ingreso de Solicitud del Cliente',
        action: '',
      },
      {
        title: 'GENERACIÓN DE TICKET',
        action: 'Toda solicitud de ingreso se formaliza creando un ticket en CRM > Registrar Tickets en GESTOR.',
      },
      {
        title: 'RECEPCIÓN FÍSICA',
        action: 'Se coordina la fecha y se reciben físicamente los bienes junto con su documentación de respaldo (Acta de Baja, Guía de Remisión, etc.).',
      },
      {
        title: 'VALIDACIÓN',
        action: 'Se verifica que los bienes recibidos coincidan con la documentación y se realiza una inspección de su estado general.',
      },
      {
        title: 'REGISTRO IMAGEN',
        action: 'Se toman fotografías de los bienes y de los documentos firmados como evidencia.',
      },
      {
        title: 'GENERA INGRESO',
        action: 'Se ingresan los datos de los bienes al sistema, ya sea de forma manual, por escaneo o mediante carga masiva.',
      },
      {
        title: 'ALMACENAMIENTO',
        action: 'Se asigna una ubicación en GESTOR y, posteriormente, el operador mueve físicamente el bien a dicho lugar.',
      },
      {
        title: 'CARGA DOCUMENTAL',
        action: 'Se adjuntan todas las evidencias digitales (fotos, documentos escaneados) al ticket correspondiente.',
      },
      {
        title: 'ACTUALIZACIÓN GPS',
        action: 'Actualización de movimientos en GPS',
      },
      {
        title: 'CIERRE',
        action: 'Se cierra el ticket en GESTOR, lo que generalmente dispara una notificación automática al usuario solicitante.',
      },
    ];

    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-[1400px] p-1">
                {/* Headers */}
                <div className="flex justify-between items-start pb-4">
                    {stepsData.map((step, index) => (
                        <React.Fragment key={step.title}>
                            <div className="text-center flex-1">
                                <h4 className="font-bold text-gray-700 uppercase text-xs tracking-wider whitespace-nowrap">{step.title}</h4>
                                {step.subtitle && <p className="text-red-500 text-xs font-semibold mt-1">{step.subtitle}</p>}
                            </div>
                            {index < stepsData.length - 1 && <div className="flex-shrink-0 text-gray-400 text-2xl px-4 self-center font-light">&raquo;</div>}
                        </React.Fragment>
                    ))}
                </div>

                <hr className="border-t border-gray-200" />

                {/* Actions */}
                <div className="flex pt-4">
                    <div className="w-20 flex-shrink-0">
                        <h5 className="font-bold text-gray-500 text-sm">ACCIÓN</h5>
                    </div>
                    <div className="grid grid-cols-10 flex-1 gap-2">
                        {stepsData.map((step, index) => (
                            <div key={index} className="px-2">
                                <p className="text-gray-600 text-sm">{step.action}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


const MainContent: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="bg-gray-50 rounded-2xl p-6 mb-12">
        <div className="divide-y divide-gray-200">
          <InfoRow 
            label="Operación" 
            value={
              <span className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-md">Ingreso</span>
            }
            isFirst
          />
          <InfoRow label="Servicio" value="Bienes en Desuso y Apoyo Logístico BBVA" />
          <InfoRow label="Sub - Proceso" value="Recepción de Bienes - Retiro/Recojo de Bienes" />
          <InfoRow 
            label="Procesos" 
            value={
              <div className="flex space-x-2">
                <button className="bg-green-400 text-green-900 font-bold px-5 py-1.5 rounded-lg">Baja</button>
                <button className="bg-gray-200 text-gray-700 font-bold px-5 py-1.5 rounded-lg">Proyectos Especiales</button>
              </div>
            } 
            isLast
          />
        </div>
      </section>

      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Ingreso de Bienes</h1>
        <div className="flex space-x-4 text-blue-500 mb-6 font-medium">
          <span>#recepcion</span>
          <span>#almacen</span>
          <span>#rotación</span>
        </div>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl">
          El proceso de Ingreso consiste en la admisión, validación y registro formal de cualquier bien físico en el inventario gestionado por HAC DATA a través del software GESTOR. Esta operación es el punto de partida para la trazabilidad de un activo dentro del almacén, ya sea que ingrese como un bien nuevo, de baja, de uso rotativo, o un activo para almacenamiento temporal.
        </p>
        <div className="flex space-x-12">
          <ProcessStep label="Setting up research meeting" />
          <ProcessStep label="Make the logo bigger" />
          <ProcessStep label="Check to-do's" isComplete />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Objetivo</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Garantizar la correcta admisión, verificación y registro de todos los bienes que ingresan físicamente a un almacén o ubicación gestionada, asegurando que su información digital en el sistema GESTOR sea precisa y esté actualizada desde el primer momento. Este registro ha de tener plena correspondencia con los registros definidos en la plataforma de Gestión del BBVA (GPS).
        </p>
      </section>

       <section className="my-16">
            <h2 className="text-2xl font-bold mb-8">Flujo del Proceso</h2>
            <HighLevelFlow />
            <ProcessFlowChart />
       </section>


      <section className="my-16">
        <h2 className="text-2xl font-bold mb-6">Documentación Gestionada</h2>
        <div className="flex gap-8">
            <DocumentationCard 
                icon={<BoxIcon className="h-8 w-8 text-red-500" />}
                title="Documentos de Entrada"
                items={['Guía de Remisión (del proveedor o del centro de costo)', 'Acta de Baja', 'Acta de Donación', 'Ordenes de Compra', 'Boletas', 'Facturas']}
            />
            <DocumentationCard 
                icon={<GeneratedIcon className="h-8 w-8 text-cyan-500" />}
                title="Documentos Generados"
                items={['Ticket GESTOR', 'Registro Fotográfico', 'Acta de Conformidad de Recepción']}
            />
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-2xl font-bold mb-6">Procesos Relacionados</h2>
        <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Bienes en Desuso</h3>
            <div className="grid grid-cols-2 gap-12">
                <div>
                    <h4 className="font-semibold text-gray-500 text-xs mb-2 uppercase">Contexto</h4>
                    <p className="text-gray-600 text-sm mb-1">Se aplica cuando un activo operativo o nuevo ingresa al almacén para un uso futuro o almacenamiento estratégico.</p>
                    <a href="#" className="text-blue-500 text-sm font-medium">hacdata.io</a>

                    <h4 className="font-semibold text-gray-500 text-xs mb-3 mt-8 uppercase">Sub Procesos Involucrados</h4>
                     <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                            <img src="https://i.pravatar.cc/32?u=user1" className="rounded-full mr-3" alt="user avatar" />
                            <div>
                                <p className="font-semibold text-sm">Recepción de Bienes</p>
                                <p className="text-xs text-gray-500">Directamente recibido en el Almacen</p>
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                            <img src="https://i.pravatar.cc/32?u=user2" className="rounded-full mr-3" alt="user avatar" />
                            <div>
                                <p className="font-semibold text-sm">Retiro / Recojo de Bienes</p>
                                <p className="text-xs text-gray-500">Apersonamiento en determinada Ubicación para ser retirado y luego ingresado al almacén</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-500 text-xs mb-3 uppercase">Particularidades</h4>
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
        <h2 className="text-2xl font-bold mb-6">KPIS</h2>
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