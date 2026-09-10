import React from 'react';
import { ArrowRight, BookOpen, Layers, Smartphone, RefreshCw } from 'lucide-react';

interface DeliveryGridProps {
  onCtaClick: () => void;
}

export const DeliveryGrid: React.FC<DeliveryGridProps> = ({ onCtaClick }) => {
  const deliverables = [
    {
      id: 'sha-guia',
      iconEmoji: '✅',
      iconComponent: BookOpen,
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      title: 'O GUIA MESTRE DA SINERGIA HUMECTANTE (SHA)',
      description:
        'A ciência prática para estruturar massas saudáveis sem glúten nem açúcar que crescem e retêm a humidade por até 5 dias.',
      badge: 'Ciência & Método',
    },
    {
      id: 'acervo-bolos',
      iconEmoji: '📦',
      iconComponent: Layers,
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200/60',
      title: 'O ACERVO DOS 50 BOLOS DE OUTRO',
      description:
        'A maior biblioteca de Portugal de pastelaria de taça única: 25 sabores de massa fofinha e 5 coberturas cremosas e brilhantes de fazer crescer água na boca.',
      badge: '50 Receitas Prontas',
    },
    {
      id: 'acesso-telemovel',
      iconEmoji: '📲',
      iconComponent: Smartphone,
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200/60',
      title: 'ACESSO COMPLETO NO TELEMÓVEL',
      description:
        'Consulte as suas receitas diretamente no telemóvel ou tablet na bancada da sua cozinha, de forma limpa e prática, para sempre.',
      badge: 'iOS & Android',
    },
    {
      id: 'vitalicio-atualizacoes',
      iconEmoji: '♾️',
      iconComponent: RefreshCw,
      iconBg: 'bg-purple-50 text-purple-700 border-purple-200/60',
      title: 'ACESSO VITALÍCIO + ATUALIZAÇÕES',
      description:
        'Paga uma única vez e recebe novas receitas de época (bolos de Natal, Páscoa e frutas da estação) todos os meses na sua área de membros, sem pagar mais nem 1 cêntimo.',
      badge: 'Sem Mensalidades',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FCFCFA] border-y border-neutral-200/70" id="o-que-recebe">
      <div className="safe-zone-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-500 mb-2 block">
            Conteúdo Programático Exclusivo
          </span>
          <h2 className="headline-heavy text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
            O QUE IRÁ RECEBER (ENTREGA IMEDIATA):
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Symmetrical Apple-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {deliverables.map((item) => (
            <div
              key={item.id}
              id={`card-deliverable-${item.id}`}
              className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border text-xl ${item.iconBg}`}>
                    <span>{item.iconEmoji}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="headline-apple text-lg sm:text-xl text-[#1A1A1A] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Body */}
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Instant Delivery Indicator */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-medium">
                <span>Disponível imediatamente</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  ✓ Desbloqueado na adesão
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 2 Button */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            id="cta-delivery-grid"
            className="btn-cta-green w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 rounded-2xl cursor-pointer"
          >
            <span className="uppercase tracking-tight">LIBERAR O MEU ACESSO AGORA</span>
            <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2.5]" />
          </button>
          <p className="text-xs text-neutral-500 mt-2.5 font-medium">
            Acesso enviado por e-mail nos primeiros 60 segundos após a confirmação.
          </p>
        </div>

      </div>
    </section>
  );
};
