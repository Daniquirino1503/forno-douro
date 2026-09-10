import React from 'react';
import { ArrowRight, Clock, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import heroCakeImg from '../assets/images/hero_cake_pt_1788897008810.jpg';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 bg-white overflow-hidden" id="inicio">
      {/* Subtle Apple-style radial atmospheric warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-50/50 via-neutral-50/20 to-transparent pointer-events-none -z-10" />

      <div className="safe-zone-container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Eyebrow / Tagline pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 mb-6 text-xs sm:text-sm font-semibold text-[#1A1A1A] shadow-2xs">
            <span className="text-base">🚀</span>
            <span className="tracking-tight uppercase text-[11px] sm:text-xs">
              FORNO D'OURO: O SISTEMA DE PASTELARIA SAUDÁVEL DE TAÇA ÚNICA PARA CRIAR BOLOS ULTRA-HÚMIDOS EM 5 MINUTOS
            </span>
          </div>

          {/* Main Headline - Bold with mandatory -30 tracking (-0.035em) */}
          <h1 className="headline-heavy text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] text-[#1A1A1A] mb-6">
            Pare de comer bolos saudáveis secos que parecem cartão ou de sujar a batedeira e a cozinha inteira.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed font-normal max-w-3xl mb-8 sm:mb-10">
            Descubra a Sinergia Humectante Alveolar (SHA) e aprenda a criar 50 tipos de bolos fofinhos, sem glúten, sem laticínios e sem açúcar adicionado, misturando tudo com uma simples vara de arames.
          </p>

          {/* Primary CTA Button 1 - Vibrant Green #28A745, iOS rounded corners */}
          <div className="w-full sm:w-auto flex flex-col items-center gap-3 mb-12 sm:mb-16">
            <button
              onClick={onCtaClick}
              id="cta-hero-primary"
              className="btn-cta-green w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-4.5 rounded-2xl cursor-pointer"
            >
              <span className="uppercase tracking-tight">QUERO BOLOS SAUDÁVEIS E FOFINHOS</span>
              <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2.5]" />
            </button>

            {/* Microcopy & Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-500 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Entrega imediata no telemóvel
              </span>
              <span className="hidden sm:inline text-neutral-300">&bull;</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                Garantia incondicional de 15 dias
              </span>
              <span className="hidden sm:inline text-neutral-300">&bull;</span>
              <span>MB WAY & Multibanco</span>
            </div>
          </div>

          {/* Visual Showcase Card: Apple-like Frame with Real Crumb Texture */}
          <div className="w-full relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-neutral-100 to-neutral-200/60 border border-neutral-200/90 shadow-xl">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-neutral-100">
              <img
                src={heroCakeImg}
                alt="Fatia ultra-húmida de bolo saudável de laranja e amêndoa feito com método SHA Forno d'Ouro"
                className="w-full h-64 sm:h-96 md:h-[480px] object-cover object-center"
                loading="eager"
              />

              {/* Floating feature pills on top of image */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-neutral-200/70 text-xs font-bold text-[#1A1A1A]">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>5 Minutos de Mistura</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-neutral-200/70 text-xs font-bold text-[#1A1A1A]">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>1 Vara de Arames • 1 Taça</span>
                </div>
              </div>

              {/* Bottom tag bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-left">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white">
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">Sem Glúten</span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">Sem Laticínios</span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">Sem Açúcar Adicionado</span>
                  <span className="bg-amber-400/90 text-neutral-950 px-2.5 py-1 rounded-lg font-bold">Húmido por até 5 dias</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
