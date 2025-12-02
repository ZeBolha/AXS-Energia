import React from 'react';
import { Phone, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-axs-dark flex items-center">
              <span className="text-axs-secondary mr-2">AXS</span> ENERGIA
            </h3>
            <p className="text-gray-500">
              Liberdade para escolher sua fonte de energia. Economia limpa, barata e sustentável.
            </p>
            <div className="flex items-center space-x-2 text-axs-primary font-bold">
               <Instagram className="w-5 h-5" />
               <a href="https://instagram.com/axsenergia" target="_blank" rel="noopener noreferrer" className="hover:underline">@axsenergia</a>
            </div>
          </div>

          {/* Contact Person */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Fale com um Consultor</h4>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">Renata</p>
                <a 
                  href="https://wa.me/5541991346780" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium block mt-1 hover:underline"
                >
                  WhatsApp: (41) 99134-6780
                </a>
                <p className="text-sm text-gray-500 mt-2">Atendimento personalizado</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AXS Energia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;