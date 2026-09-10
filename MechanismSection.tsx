import React from 'react';
import { Microscope, CheckCircle, XCircle, Flame, Droplet, Sparkles } from 'lucide-react';
import shaCrumbImg from '../assets/images/sha_crumb_pt_1788897022631.jpg';

export const MechanismSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FCFCFA] border-y border-neutral-200/70" id="mecanismo-sha">
      <div className="safe-zone-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Microscope className="w-3.5 h-3.5 text-amber-700" />
            A Ciência da Física Culinária
          </div>
          <h2 className="headline-heavy text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#1A1A1A] leading-tight">
            🧁 O MECANISMO ÚNICO: A SINERGIA HUMECTANTE ALVEOLAR (SHA)
          </h2>
          <p className="headline-apple text-lg sm:text-xl text-neutral-800 mt-4 leading-relaxed font-semibold">
            O segredo de um bolo saudável perfeito não está na batedeira, está na Sinergia Humectante Alveolar (SHA).
          </p>
        </div>

        {/* Narrative & Scientific Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-12">
          
          {/* Scientific Crumb Image with Moisture Tags */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl p-2.5 bg-white border border-neutral-200/90 shadow-md">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={shaCrumbImg}
                  alt="Estrutura alveolar microscópica com retenção de humidade do método SHA"
                  className="w-full h-72 sm:h-84 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs font-bold tracking-wider text-amber-300 uppercase mb-1 flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-amber-300" />
                    Câmara Alveolar Hidratada
                  </span>
                  <p className="text-xs text-neutral-200">
                    Micro-gotículas de água encapsuladas no núcleo esponjoso da massa.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Scientific Badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-neutral-900 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl border border-neutral-700 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Retenção hídrica ativa por até 5 dias</span>
            </div>
          </div>

          {/* Copy Explanation */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-2xs">
              <h3 className="headline-apple text-base sm:text-lg text-[#1A1A1A] mb-2 flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-500 shrink-0" />
                <span>Porque os bolos saudáveis comuns falham:</span>
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Quando mistura farinhas saudáveis de forma comum, o calor do forno seca a massa e deixa o bolo duro.
              </p>
            </div>

            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-200/80 shadow-2xs">
              <h3 className="headline-apple text-base sm:text-lg text-emerald-950 mb-2 flex items-center gap-2">
                <Droplet className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>A Solução Termodinâmica SHA:</span>
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                O nosso método ensina a emulsificar os ingredientes na ordem termodinâmica exata, prendendo as partículas de água no núcleo do bolo.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-2xs">
              <p className="headline-apple text-sm sm:text-base text-[#1A1A1A] leading-relaxed">
                É a permissão física para comer um bolo incrivelmente fofinho ao lanche ou ao pequeno-almoço, que não inflama o seu intestino e regula a sua saúde.
              </p>
            </div>
          </div>

        </div>

        {/* Side-by-Side Comparison Box */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-neutral-100/70 border border-neutral-200/80">
            <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-3">
              <XCircle className="w-5 h-5 text-red-500" />
              <span>Bolos Saudáveis Convencionais</span>
            </div>
            <ul className="text-xs sm:text-sm text-neutral-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&times;</span>
                <span>Farinhas absorvem toda a água e desidratam no forno.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&times;</span>
                <span>Textura de cartão seco, que se esfarela toda ao cortar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">&times;</span>
                <span>Exigem batedeiras pesadas e sujam a bancada toda.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Protocolo Sinergia SHA Forno d'Ouro</span>
            </div>
            <ul className="text-xs sm:text-sm text-neutral-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Ordem de mistura termodinâmica que blinda a humidade.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Massa aerada e esponjosa com textura idêntica à pastelaria tradicional.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>1 vara de arames, 1 taça e 5 minutos de relógio.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
