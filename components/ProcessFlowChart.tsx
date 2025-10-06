
import React from 'react';

const ProcessFlowChart: React.FC = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl font-bold mb-8">Flujo del Proceso</h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <img 
                    src="https://i.ibb.co/3cY1j9b/image.png" 
                    alt="Flujo del Proceso de Registro de Ticket" 
                    className="w-full h-auto rounded-md"
                    aria-label="Diagrama de flujo que detalla el proceso de registro de un ticket de CRM, comenzando desde la recepción de la solicitud por correo electrónico hasta el cierre del ticket."
                />
            </div>
        </section>
    );
};

export default ProcessFlowChart;
