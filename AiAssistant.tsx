import React, { useState } from 'react';
import { Loader2, RefreshCcw, Zap } from 'lucide-react';
import { generateSavingsAnalysis } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [billAmount, setBillAmount] = useState<string>('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);
  
  const handleSimulate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!billAmount) return;

    setIsLoadingAnalysis(true);
    const result = await generateSavingsAnalysis(parseFloat(billAmount));
    setAnalysis(result);
    setIsLoadingAnalysis(false);
  };

  // Helper to render bold text
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id="simulator" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-axs-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-axs-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 p-6 flex items-center justify-center">
                    <div className="flex items-center text-axs-secondary font-bold text-xl">
                        <Zap className="w-6 h-6 mr-2 fill-current" />
                        Simulador de Economia Online
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    {!analysis ? (
                        <>
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Quanto você gasta de luz?</h3>
                                <p className="text-lg text-gray-600 max-w-lg mx-auto">
                                    Informe o valor médio da sua conta e descubra quanto você pode economizar por ano com a AXS Energia.
                                </p>
                            </div>

                            <form onSubmit={handleSimulate} className="max-w-md mx-auto space-y-6">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="text-gray-500 text-lg font-medium">R$</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={billAmount}
                                        onChange={(e) => setBillAmount(e.target.value)}
                                        className="block w-full pl-12 pr-4 py-5 text-xl border-gray-300 rounded-xl focus:ring-axs-secondary focus:border-axs-secondary border-2 transition-colors shadow-sm"
                                        placeholder="0,00"
                                        required
                                        min="0"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoadingAnalysis}
                                    className="w-full flex justify-center items-center py-5 px-6 border border-transparent rounded-xl shadow-md text-xl font-bold text-white bg-axs-secondary hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-axs-secondary disabled:opacity-50 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {isLoadingAnalysis ? (
                                        <>
                                            <Loader2 className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" />
                                            Calculando Economia...
                                        </>
                                    ) : (
                                        'Simular Agora'
                                    )}
                                </button>
                                <p className="text-center text-sm text-gray-400">
                                    Sem compromisso. Sem instalação de placas.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 shadow-sm mb-8">
                                <div className="prose prose-lg prose-green max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
                                    {renderFormattedText(analysis)}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="https://wa.me/5541991346780" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center py-4 px-6 rounded-xl text-lg font-bold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-md"
                                >
                                    Falar com Renata no WhatsApp
                                </a>
                                <button 
                                    onClick={() => setAnalysis(null)}
                                    className="flex-1 flex items-center justify-center py-4 px-6 border-2 border-gray-200 rounded-xl text-lg font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all"
                                >
                                    <RefreshCcw className="w-5 h-5 mr-2" />
                                    Nova Simulação
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default AiAssistant;