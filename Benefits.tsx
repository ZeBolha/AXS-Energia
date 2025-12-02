import React from 'react';
import { Leaf, Ban, Factory, CalendarCheck, CreditCard, Users, Smartphone, LockOpen } from 'lucide-react';
import { BenefitItem } from '../types';

const benefitsList: BenefitItem[] = [
  { 
    title: "Economia limpa, barata e sustentável", 
    description: "Reduza sua pegada de carbono economizando.", 
    icon: <Leaf className="w-6 h-6" /> 
  },
  { 
    title: "Sem taxa de adesão", 
    description: "Zero custo para começar a economizar.", 
    icon: <Ban className="w-6 h-6" /> 
  },
  { 
    title: "Usinas próprias", 
    description: "Garantia de fornecimento e qualidade AXS.", 
    icon: <Factory className="w-6 h-6" /> 
  },
  { 
    title: "Mensalidade previsível", 
    description: "Controle seus gastos sem surpresas.", 
    icon: <CalendarCheck className="w-6 h-6" /> 
  },
  { 
    title: "Clube de Benefícios AXS", 
    description: "Vantagens exclusivas para clientes.", 
    icon: <CreditCard className="w-6 h-6" /> 
  },
  { 
    title: "Programa de Indicação", 
    description: "Desconto para você e seu indicado.", 
    icon: <Users className="w-6 h-6" /> 
  },
  { 
    title: "Sem fidelidade ou multa", 
    description: "Liberdade total para ir e vir.", 
    icon: <LockOpen className="w-6 h-6" /> 
  },
  { 
    title: "Controle de tudo via APP", 
    description: "Gerencie na palma da sua mão.", 
    icon: <Smartphone className="w-6 h-6" /> 
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-axs-secondary font-semibold tracking-wide uppercase">Por que escolher a AXS?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            8 MOTIVOS PARA VOCÊ ASSINAR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-axs-primary/10 rounded-lg text-axs-secondary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;