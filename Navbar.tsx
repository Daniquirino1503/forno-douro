import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import logoIcon from '../assets/images/logo_icon.png';

interface NavbarProps {
  onOpenCheckout: (plan?: 'essencial' | 'elite') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCheckout('elite');
    }
  };

  return (
    <>
      {/* Portuguese Market Announcement Bar */}
      <div className="bg-[#1A1A1A] text-white py-2 px-4 text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2 tracking-tight">
        <span className="inline-flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-full text-[11px] font-semibold text-amber-300">
          <Sparkles className="w-3 h-3" />
          Edição Portugal 🇵🇹
        </span>
        <span className="hidden sm:inline text-neutral-300">
          Pastelaria de Taça Única sem Glúten &bull; MB WAY & Multibanco Disponíveis
        </span>
        <span className="sm:hidden text-neutral-300">
          Acesso Vitalício Imediato
        </span>
      </div>

      {/* Main Apple-style Clean Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="safe-zone-container">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group"
              id="brand-logo-header"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center overflow-hidden p-0.5">
                <img src={logoIcon} alt="Forno d'Ouro" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="headline-heavy text-lg sm:text-xl tracking-[-0.03em] leading-none text-[#1A1A1A]">
                  FORNO D'OURO
                </span>
                <span className="text-[10px] text-neutral-500 font-medium tracking-wide uppercase mt-0.5">
                  Pastelaria Saudável
                </span>
              </div>
            </a>

            {/* Quick Links / Navigation for Desktop */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 font-medium">
              <a href="#o-que-recebe" className="hover:text-[#1A1A1A] transition-colors">
                O que Inclui
              </a>
              <a href="#mecanismo-sha" className="hover:text-[#1A1A1A] transition-colors">
                Método SHA
              </a>
              <a href="#receitas" className="hover:text-[#1A1A1A] transition-colors">
                Receitas
              </a>
              <a href="#testemunhos" className="hover:text-[#1A1A1A] transition-colors">
                Alunas em Portugal
              </a>
              <a href="#precos" className="hover:text-[#1A1A1A] transition-colors">
                Planos
              </a>
            </nav>

            {/* Header Action Button */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-1 text-xs text-neutral-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>15 Dias Garantia</span>
              </div>

              <button
                onClick={scrollToPricing}
                id="header-cta-button"
                className="btn-cta-green text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Aderir Agora</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
