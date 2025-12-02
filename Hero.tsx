import React from 'react';
import { Sun } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-axs-dark text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Painéis de Energia Solar" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-axs-dark via-axs-dark/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center space-x-2 bg-axs-secondary/20 text-axs-secondary px-3 py-1 rounded-full mb-6">
            <Sun className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Energia Solar por Assinatura</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Liberdade para escolher <br />
            <span className="text-axs-primary">sua fonte de energia</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Energia solar para residências, comércios e indústrias. 
            <span className="text-white font-semibold"> Sem instalação de placas, sem burocracia e sem investimento.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;