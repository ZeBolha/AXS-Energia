import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "R$ 7 mi", label: "já economizados", subLabel: "pelos clientes" },
  { value: "50 mil", label: "clientes", subLabel: "atendidos" },
  { value: "55 mil", label: "toneladas", subLabel: "de CO2 poupadas" },
  { value: "113", label: "usinas", subLabel: "em desenvolvimento" },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-axs-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 leading-tight">
                {stat.label}
              </div>
              {stat.subLabel && (
                <div className="text-sm text-gray-500 mt-1">
                  {stat.subLabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;