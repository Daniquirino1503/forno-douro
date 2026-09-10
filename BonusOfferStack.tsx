import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Droplets, Calculator, Coffee, Check, Gift } from 'lucide-react';

interface BonusOfferStackProps {
  onCtaClick: () => void;
}

export const BonusOfferStack: React.FC<BonusOfferStackProps> = ({ onCtaClick }) => {
  // Interactive mini-preview for Bonus 3 (Calculadora de Dosagens)
  const [selectedPan, setSelectedPan] = useState<'redonda' | 'furo' | 'inglesa'>('redonda');
  const [panSize, setPanSize] = useState<number>(22);

  const bonuses = [
    {
      id: 'bonus-1',
      badge: 'BÓNUS 1',
      title: 'GUIA DE COMPRAS DE INGREDIENTES EM PORTUGAL',
      description:
        'O roteiro exato para comprar as farinhas e adoçantes naturais mais económicos no Continente, Pingo Doce ou celeiros locais.',
      originalPrice: '29,90€',
      icon: ShoppingBag,
      locationTag: 'Continente &bull; Pingo Doce &bull; Celeiro',
    },
    {
      id: 'bonus-2',
      badge: 'BÓNUS 2',
      title: 'MANUAL DAS COBERTURAS SEM LACTOSE',
      description:
        'Como criar caldas e coberturas de chocolate, caramelo e frutas brilhantes sem usar natas, leite condensado ou manteiga tradicional.',
      originalPrice: '24,90€',
      icon: Droplets,
      locationTag: 'Sem Natas &bull; Sem Manteiga &bull; 100% Vegetal',
    },
    {
      id: 'bonus-3',
      badge: 'BÓNUS 3',
      title: 'CALCULADORA DE DOSAGENS E PORÇÕES',
      description:
        'Ajuste as receitas automaticamente para formas de qualquer tamanho (redondas, inglesas ou com furo), sem errar no tempo de forno.',
      originalPrice: '19,90€',
      icon: Calculator,
      locationTag: 'Ajuste Automático de Formas',
      hasInteractiveDemo: true,
    },
    {
      id: 'bonus-4',
      badge: 'BÓNUS 4',
      title: 'ROTEIRO "CHÁ DA TARDE SAUDÁVEL"',
      description:
        'Aprenda a receber visitas e amigos em casa servindo fatias que ninguém vai acreditar que são saudáveis, sem glúten e sem açúcar.',
      originalPrice: '19,90€',
      icon: Coffee,
      locationTag: 'Menu de Anfitriã Elegante',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="bonus">
      <div className="safe-zone-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
            <span>🔥</span> Oferta Limitada para Novos Alunos
          </div>
          <h2 className="headline-heavy text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
            🔥 BÓNUS EXPLOSIVOS (SÓ HOJE):
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3">
            Receba o pacote completo de 4 manuais e ferramentas de aceleração sem pagar mais nada.
          </p>
        </div>

        {/* Stack Value Banner */}
        <div className="max-w-4xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Valor Total Somado dos Bónus
              </div>
              <div className="text-sm sm:text-base font-bold text-neutral-200">
                4 Ferramentas Práticas de Pastelaria
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg text-neutral-400 line-through font-semibold">94,60€</span>
            <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 bg-emerald-950/60 px-3.5 py-1.5 rounded-xl border border-emerald-500/40">
              HOJE: 0€ (GRÁTIS)
            </span>
          </div>
        </div>

        {/* Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {bonuses.map((bonus) => {
            const IconComp = bonus.icon;
            return (
              <div
                key={bonus.id}
                id={`card-${bonus.id}`}
                className="relative rounded-2xl p-6 sm:p-8 bg-[#FCFCFA] border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Price Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-extrabold tracking-wider bg-neutral-900 text-white px-2.5 py-1 rounded-md">
                      {bonus.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-400 line-through font-medium">
                        {bonus.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                        🔥 HOJE: GRÁTIS
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="headline-apple text-base sm:text-lg text-[#1A1A1A] leading-snug">
                      {bonus.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {bonus.description}
                  </p>

                  {/* Interactive Micro-demo for Bonus 3 */}
                  {bonus.hasInteractiveDemo && (
                    <div className="mt-4 p-3.5 bg-white rounded-xl border border-neutral-200/80 shadow-2xs text-xs">
                      <div className="font-bold text-[#1A1A1A] mb-2 flex items-center justify-between">
                        <span>🧪 Teste a Calculadora de Formas:</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                          Interativo
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                        <button
                          type="button"
                          onClick={() => setSelectedPan('redonda')}
                          className={`py-1.5 px-2 rounded-lg text-center font-medium transition-all ${
                            selectedPan === 'redonda'
                              ? 'bg-neutral-900 text-white shadow-xs'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          Redonda
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPan('furo')}
                          className={`py-1.5 px-2 rounded-lg text-center font-medium transition-all ${
                            selectedPan === 'furo'
                              ? 'bg-neutral-900 text-white shadow-xs'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          Com Furo
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPan('inglesa')}
                          className={`py-1.5 px-2 rounded-lg text-center font-medium transition-all ${
                            selectedPan === 'inglesa'
                              ? 'bg-neutral-900 text-white shadow-xs'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          Inglesa
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-neutral-600 pt-1 border-t border-neutral-100">
                        <span>Diâmetro: <strong>{panSize} cm</strong></span>
                        <span className="text-emerald-700 font-bold">
                          Fator de Conversão: {selectedPan === 'furo' ? 'x 1.25 (38 min)' : selectedPan === 'inglesa' ? 'x 0.85 (32 min)' : 'x 1.0 (35 min)'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Tag */}
                <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span dangerouslySetInnerHTML={{ __html: bonus.locationTag }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA 3 Button */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            id="cta-bonus-stack"
            className="btn-cta-green w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 rounded-2xl cursor-pointer"
          >
            <span className="uppercase tracking-tight">QUERO TODOS OS BÓNUS GRATUITOS</span>
            <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2.5]" />
          </button>
          <p className="text-xs text-neutral-500 mt-2.5 font-medium">
            Os 4 bónus serão adicionados automaticamente à sua conta sem custos adicionais.
          </p>
        </div>

      </div>
    </section>
  );
};
