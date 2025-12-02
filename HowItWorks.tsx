import React from 'react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  {
    number: 1,
    title: "Contratação",
    description: "Cliente escolhe uma cota com base no consumo médio.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Signing contract
  },
  {
    number: 2,
    title: "Geração",
    description: "Energia gerada pelas usinas é injetada na rede.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Solar panels
  },
  {
    number: 3,
    title: "Distribuição",
    description: "Concessionária entrega essa energia na sua casa ou empresa.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Power lines
  },
  {
    number: 4,
    title: "Créditos e uso eficiente",
    description: "No caso de sobra de geração, você acumula créditos. Você repõe se houver menor produção.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Savings/Finance
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Simples, transparente e 100% digital.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 -z-10" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className={`w-full md:w-1/2 flex justify-center ${index % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-xl group">
                     <img 
                       src={step.image} 
                       alt={step.title} 
                       className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                     
                     {/* Number Badge Overlay */}
                     <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-axs-primary text-axs-dark flex items-center justify-center text-xl font-bold shadow-lg border-2 border-white z-10">
                        {step.number}
                     </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className={`w-full md:w-1/2 px-4 text-center ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`max-w-md mx-auto ${index % 2 !== 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;