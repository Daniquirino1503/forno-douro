import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, CreditCard, ShieldCheck, Zap } from 'lucide-react';

interface PricingComparisonProps {
  onSelectPlan: (plan: 'essencial' | 'elite') => void;
}

export const PricingComparison: React.FC<PricingComparisonProps> = ({ onSelectPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'elite'>('elite');

  const plans = [
    {
      id: 'essencial' as const,
      name: 'PLANO ESSENCIAL',
      badge: null,
      price: '7,90€',
      priceSubtitle: 'Pagamento Único • Acesso Vitalício',
      description: 'Ideal para quem deseja iniciar na pastelaria saudável com as 50 receitas base.',
      features: [
        { text: "Forno d'Ouro Completo", included: true },
        { text: '50 Receitas SHA Prontas', included: true },
        { text: 'Acesso Vitalício', included: true },
        { text: 'Bónus 1: Guia de Compras PT', included: false },
        { text: 'Bónus 2: Manual das Coberturas', included: false },
        { text: 'Bónus 3: Calculadora de Dosagens', included: false },
        { text: 'Bónus 4: Roteiro "Chá da Tarde"', included: false },
        { text: 'Atualizações Mensais Gratuitas', included: false },
      ],
      buttonLabel: 'ESCOLHER ESSENCIAL (7,90€)',
      isRecommended: false,
    },
    {
      id: 'elite' as const,
      name: 'PLANO CONFEITARIA DE ELITE',
      badge: 'RECOMENDADO (94% DAS ALUNAS)',
      price: '14,90€',
      priceSubtitle: 'Pagamento Único • Acesso Imediato',
      description: 'A experiência completa com todos os 4 bónus de aceleração e atualizações mensais de receitas.',
      features: [
        { text: 'TUDO do Plano Essencial', included: true, isHighlight: true },
        { text: 'Bónus 1: Guia de Compras PT', included: true },
        { text: 'Bónus 2: Manual das Coberturas', included: true },
        { text: 'Bónus 3: Calculadora de Dosagens', included: true },
        { text: 'Bónus 4: Roteiro "Chá da Tarde"', included: true },
        { text: 'Atualizações Mensais Gratuitas', included: true },
      ],
      buttonLabel: 'GARANTIR MINHA VAGA AGORA →',
      isRecommended: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="precos">
      <div className="safe-zone-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Condições Especiais de Lançamento
          </div>
          <h2 className="headline-heavy text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight">
            💎 Oferta Especial: Escolha o seu Plano
          </h2>
          <p className="headline-apple text-lg sm:text-xl text-neutral-600 mt-3 font-semibold">
            Acesso Vitalício Liberado
          </p>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10 items-stretch">

          {/* Plano Confeitaria de Elite (Recomendado) */}
          <div
            onClick={() => setSelectedPlan('elite')}
            id="card-plano-elite"
            className="relative rounded-3xl p-7 sm:p-9 bg-white border-2 border-emerald-500 shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer ring-4 ring-emerald-500/10"
          >
            {/* Top Apple-style Recommended Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold tracking-wide uppercase shadow-sm flex items-center gap-1.5 whitespace-nowrap max-w-[92%] justify-center">
              <Zap className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="sm:hidden">RECOMENDADO</span>
              <span className="hidden sm:inline">PLANO CONFEITARIA DE ELITE (RECOMENDADO)</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  Melhor Custo-Benefício
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md">
                  94% das Alunas Escolhem
                </span>
              </div>

              <h3 className="headline-heavy text-xl sm:text-2xl text-[#1A1A1A] mb-2">
                PLANO CONFEITARIA DE ELITE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                O programa definitivo com todo o acervo, os 4 bónus de valor e suporte contínuo.
              </p>

              {/* Price Box */}
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase font-semibold text-emerald-900">
                    POR APENAS:
                  </div>
                  <span className="text-xs text-neutral-400 line-through">
                    De 47,00€ por
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="headline-heavy text-4xl sm:text-5xl text-emerald-700">
                    14,90€
                  </span>
                  <span className="text-xs text-neutral-600 font-bold">
                    / pagamento único
                  </span>
                </div>
                <div className="text-[11px] text-emerald-800 font-semibold mt-1">
                  ⚡ Acesso Vitalício + Todos os 4 Bónus Inclusos
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Tudo o que está incluído no seu acesso:
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-[#1A1A1A] bg-neutral-100/80 p-2 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ TUDO do Plano Essencial</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A] font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ Bónus 1: Guia de Compras PT</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A] font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ Bónus 2: Manual das Coberturas</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A] font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ Bónus 3: Calculadora de Dosagens</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A] font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ Bónus 4: Roteiro "Chá da Tarde"</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A] font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ Atualizações Mensais Gratuitas</span>
                </div>
              </div>
            </div>

            {/* CTA FINAL Button */}
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPlan('elite');
                }}
                id="cta-select-elite-final"
                className="btn-cta-green w-full text-base sm:text-lg py-4 px-6 rounded-2xl cursor-pointer shadow-lg"
              >
                <span className="uppercase tracking-tight">GARANTIR MINHA VAGA AGORA →</span>
              </button>
            </div>
          </div>

          {/* Plano Essencial */}
          <div
            onClick={() => setSelectedPlan('essencial')}
            id="card-plano-essencial"
            className={`rounded-3xl p-7 sm:p-9 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              selectedPlan === 'essencial'
                ? 'bg-white border-neutral-900 shadow-lg ring-2 ring-neutral-900/10'
                : 'bg-[#FCFCFA] border-neutral-200/90 shadow-2xs hover:border-neutral-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Opção Básica
                </span>
                <span className="text-xs font-medium text-neutral-400">
                  Taça Única
                </span>
              </div>

              <h3 className="headline-heavy text-xl sm:text-2xl text-[#1A1A1A] mb-2">
                PLANO ESSENCIAL
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                Acesso às fundações da pastelaria de taça única e 50 receitas.
              </p>

              {/* Price */}
              <div className="mb-6 p-4 rounded-2xl bg-neutral-100/60 border border-neutral-200/60">
                <div className="text-xs uppercase font-semibold text-neutral-500">
                  POR APENAS:
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="headline-heavy text-3xl sm:text-4xl text-[#1A1A1A]">
                    7,90€
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    / pagamento único
                  </span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Sem mensalidades &bull; Acesso para sempre
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  O que está incluído:
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A] font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ Forno d'Ouro Completo</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A] font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ 50 Receitas SHA Prontas</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A] font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>✅ Acesso Vitalício</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-400">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center text-xs font-bold shrink-0">
                    &times;
                  </span>
                  <span className="line-through">Bónus 1: Guia de Compras PT</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-400">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center text-xs font-bold shrink-0">
                    &times;
                  </span>
                  <span className="line-through">Bónus 2: Manual das Coberturas</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-400">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center text-xs font-bold shrink-0">
                    &times;
                  </span>
                  <span className="line-through">Bónus 3: Calculadora de Dosagens</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-400">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center text-xs font-bold shrink-0">
                    &times;
                  </span>
                  <span className="line-through">Bónus 4: Roteiro "Chá da Tarde"</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-400">
                  <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center text-xs font-bold shrink-0">
                    &times;
                  </span>
                  <span className="line-through">Atualizações Mensais Gratuitas</span>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectPlan('essencial');
              }}
              id="cta-select-essencial"
              className="w-full py-3.5 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm tracking-tight transition-colors cursor-pointer"
            >
              ESCOLHER ESSENCIAL (7,90€)
            </button>
          </div>

        </div>

        {/* Portuguese Local Payment Signals & Trust Badges */}
        <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl bg-[#FCFCFA] border border-neutral-200/80 shadow-2xs">
          <div className="headline-heavy text-sm sm:text-base text-[#1A1A1A] tracking-tight mb-3">
            Multibanco · MB WAY · Cartão
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-xs font-extrabold text-neutral-800 shadow-2xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Multibanco (SIBS)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-xs font-extrabold text-neutral-800 shadow-2xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              MB WAY
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-xs font-extrabold text-neutral-800 shadow-2xs flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-neutral-700" />
              Cartão Visa / Mastercard
            </span>
          </div>

          <div className="text-xs sm:text-sm text-neutral-600 font-semibold flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Pagamento Único · Acesso Imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};
