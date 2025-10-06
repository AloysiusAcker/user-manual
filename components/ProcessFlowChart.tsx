import React from 'react';

const ProcessFlowChart: React.FC = () => {
    return (
        <div className="mt-8 bg-white p-4 rounded-lg">
            <img 
                src="https://cdn.jsdelivr.net/gh/AloysiusAcker/user-manual@main/flujo%20ingreso.png" 
                alt="Flujo del Proceso de Ingreso" 
                className="w-full h-auto rounded-md"
                aria-label="Diagrama de flujo que detalla el proceso de ingreso de bienes."
            />
        </div>
    );
};

export default ProcessFlowChart;
