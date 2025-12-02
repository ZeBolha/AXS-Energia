import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar (Sticky) */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800 tracking-tight">
                <span className="text-axs-secondary">AXS</span> ENERGIA
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="https://wa.me/5541991346780" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-axs-secondary font-medium transition-colors">Contato</a>
            </div>
            <div className="md:hidden">
              {/* Mobile menu button placeholder - simple version */}
              <a 
                href="https://wa.me/5541991346780" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-bold text-axs-primary"
              >
                FALE CONOSCO
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <Stats />
        <Benefits />
        <HowItWorks />
      </main>

      <Contact />
    </div>
  );
};

export default App;