import React from 'react';
import { ArrowRight, Clock, Sparkles, AlertTriangle } from 'lucide-react';

import cakeOrangeImg from '../assets/images/hero_cake_pt_1788897008810.jpg';
import cakeChocImg from '../assets/images/cake_chocolate_pt_1788897036106.jpg';
import cakeCarrotImg from '../assets/images/cake_carrot_pt_1788897047874.jpg';
import cakeLemonImg from '../assets/images/cake_lemon_pt_1788897074827.jpg';
import cakeAppleImg from '../assets/images/cake_apple_pt_1788897087075.jpg';

interface RecipeShowcaseProps {
  onCtaClick: () => void;
}

export const RecipeShowcase: React.FC<RecipeShowcaseProps> = ({ onCtaClick }) => {
  const recipes = [
    {
      id: 'laranja-amendoa',
      emoji: '🍊',
      title: 'Bolo de Laranja e Amêndoa',
      description: 'Massa húmida e aromática que derrete na boca, perfeita para acompanhar um café quente.',
      image: cakeOrangeImg,
      badge: 'O Mais Pedido',
      prep: '5 min de preparo',
    },
    {
      id: 'cacau-intenso',
      emoji: '🍫',
      title: 'Bolo de Cacau Intenso e Cobertura de Fudge',
      description: 'A textura densa e escura do chocolate sem açúcar e sem laticínios que parece pecado, mas é saúde.',
      image: cakeChocImg,
      badge: 'Zero Açúcar & Sem Leite',
      prep: '5 min de preparo',
    },
    {
      id: 'cenoura-calda',
      emoji: '🥕',
      title: 'Bolo de Cenoura com Calda de Cacau Estaladiça',
      description: 'O clássico da infância recriado com farinhas funcionais de baixo índice glicémico que cresce como o tradicional.',
      image: cakeCarrotImg,
      badge: 'Baixo Índice Glicémico',
      prep: '5 min de preparo',
    },
    {
      id: 'limao-papoila',
      emoji: '🍋',
      title: 'Bolo de Limão e Sementes de Papoila',
      description: 'Um bolo fresco, leve e cítrico que se mantém fofinho e perfumado durante 5 dias no frigorífico.',
      image: cakeLemonImg,
      badge: '5 Dias no Frigorífico',
      prep: '5 min de preparo',
    },
    {
      id: 'maca-canela',
      emoji: '🍎',
      title: 'Bolo Rústico de Maçã e Canela com Crosta Crocante',
      description: 'Pedaços de fruta sumarenta envolvidos numa massa de especiarias que aquece a alma e acalma o intestino.',
      image: cakeAppleImg,
      badge: 'Intestino Saudável',
      prep: '5 min de preparo',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="receitas">
      <div className="safe-zone-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-700 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full inline-block mb-3">
            Vitrine Gastronómica
          </span>
          <h2 className="headline-heavy text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
            🍰 AS CRIAÇÕES DE ELITE QUE VAI DOMINAR EM MINUTOS:
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Todas criadas com ingredientes naturais que encontra facilmente em qualquer supermercado português.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              id={`recipe-card-${recipe.id}`}
              className="group bg-[#FCFCFA] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Recipe Image with overlay */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-neutral-100">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-neutral-800 shadow-sm border border-neutral-200/60">
                    {recipe.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-neutral-900/85 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{recipe.prep}</span>
                  </div>
                </div>

                {/* Recipe Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{recipe.emoji}</span>
                    <h3 className="headline-apple text-base sm:text-lg text-[#1A1A1A] leading-snug">
                      {recipe.title}
                    </h3>
                  </div>

                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {recipe.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <div className="pt-3 border-t border-neutral-200/70 flex items-center justify-between text-xs text-neutral-500 font-medium">
                  <span>Sem glúten &bull; Sem leite</span>
                  <span className="text-emerald-700 font-semibold">1 Taça Única</span>
                </div>
              </div>
            </div>
          ))}

          {/* "E MUITO MAIS" 6th Card */}
          <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                💡
              </div>
              <h3 className="headline-apple text-xl sm:text-2xl text-white mb-3">
                💡 E MUITO MAIS
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                Novas massas, coberturas e combinações de sabores adicionadas constantemente na sua área de membros!
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Receitas de Época: Natal, Páscoa e Frutas da Estação</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Banner: Técnica da Taça Única */}
        <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-7 rounded-2xl bg-amber-50 border border-amber-200/90 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-amber-900 block mb-1">
                ⚠️ A Vantagem Prática da Taça Única:
              </span>
              <p className="headline-apple text-sm sm:text-base md:text-lg text-neutral-900 leading-relaxed font-semibold">
                Além disso, você vai aprender a técnica da Taça Única: misture tudo com uma vara de arames em 5 minutos, leve ao forno e pronto. Sem batedeiras barulhentas e sem sujidade na cozinha.
              </p>
            </div>
          </div>
        </div>

        {/* CTA 4 Button */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            id="cta-recipe-showcase"
            className="btn-cta-green w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 rounded-2xl cursor-pointer"
          >
            <span className="uppercase tracking-tight">QUERO ADOTAR O PROTOCOLO FORNO D'OURO</span>
            <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2.5]" />
          </button>
          <p className="text-xs text-neutral-500 mt-2.5 font-medium">
            Acesso vitalício imediato a todas as 50 receitas completas.
          </p>
        </div>

      </div>
    </section>
  );
};
