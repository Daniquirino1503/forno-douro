import React, { useState } from 'react';
import { ArrowRight, HelpCircle, MessageCircle, Sparkles, Check, Coffee } from 'lucide-react';

interface ObjectionSectionProps {
  onCtaClick: () => void;
}

export const ObjectionSection: React.FC<ObjectionSectionProps> = ({ onCtaClick }) => {
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white" id="faq-suporte">
      <div className="safe-zone-container">
        
        {/* Objection Breaker Box */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-neutral-900 text-white shadow-xl mb-16 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 mx-auto mb-6">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h2 className="headline-heavy text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            ❓ AINDA COM DÚVIDA?
          </h2>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto mb-8">
            <p className="headline-apple text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed">
              O valor deste guia é menor do que uma fatia de bolo saudável de qualidade média numa pastelaria gourmet em Lisboa. Se fizer apenas UM bolo em casa, o seu investimento já se pagou por completo.
            </p>
          </div>

          {/* Value comparison pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8 text-xs font-semibold">
            <div className="w-full sm:w-1/2 p-3.5 rounded-xl bg-white/10 text-neutral-300 border border-white/10">
              <span className="block text-red-300 font-bold mb-1">1 Fatia em Lisboa</span>
              <span>~5,80€ (1 único lanche)</span>
            </div>
            <div className="w-full sm:w-1/2 p-3.5 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
              <span className="block text-emerald-400 font-bold mb-1">Forno d'Ouro Vitalício</span>
              <span>50 bolos para a vida toda</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onCtaClick}
              id="cta-final-duvidas"
              className="btn-cta-green w-full sm:w-auto text-base sm:text-lg px-10 py-4.5 rounded-2xl cursor-pointer"
            >
              <span className="uppercase tracking-tight font-bold">QUERO COMEÇAR AGORA</span>
              <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2.5]" />
            </button>

            {/* WhatsApp Support Button */}
            <a
              href="https://wa.me/553192979780?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Forno%20d%27Ouro"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // In iframe, open simulated friendly WhatsApp modal if blocked
                e.preventDefault();
                setWhatsappModalOpen(true);
              }}
              id="btn-whatsapp-suporte"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm transition-colors cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>SUPORTE WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* WhatsApp Modal Dialog */}
        {whatsappModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-left border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h4 className="headline-apple text-base font-bold text-[#1A1A1A]">
                      Suporte Oficial Forno d'Ouro
                    </h4>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Disponível em Portugal
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setWhatsappModalOpen(false)}
                  className="text-neutral-400 hover:text-neutral-700 text-lg p-1"
                >
                  &times;
                </button>
              </div>

              <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
                Tem alguma dúvida sobre os ingredientes, formas ou pagamento via <strong>MB WAY</strong> e <strong>Multibanco</strong>? A nossa equipa de apoio em Portugal responde em minutos.
              </p>

              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 mb-6 text-xs text-neutral-700 space-y-1.5">
                <div className="font-semibold text-neutral-900">Perguntas frequentes rápidas:</div>
                <div className="flex items-center gap-1.5 text-neutral-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>"Posso pagar por MB WAY?" Sim, na hora pelo telemóvel.</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>"Os ingredientes são comuns em Portugal?" Sim, no Pingo Doce e Continente.</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href="https://wa.me/553192979780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Conversar no WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setWhatsappModalOpen(false);
                    onCtaClick();
                  }}
                  className="w-full py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs text-center"
                >
                  Continuar para os Planos
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="pt-10 border-t border-neutral-200 text-center text-xs text-neutral-500 font-medium">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="headline-heavy text-sm text-[#1A1A1A] tracking-tight">
                FORNO D'OURO
              </span>
              <span>&bull;</span>
              <span>Pastelaria Saudável de Taça Única</span>
              <span>&bull;</span>
              <span>Portugal 🇵🇹</span>
            </div>

            <p className="text-neutral-400 max-w-xl text-[11px] leading-relaxed">
              Este produto não substitui o aconselhamento médico ou nutricional individualizado. As receitas utilizam ingredientes funcionais naturais livres de glúten e laticínios.
            </p>

            <div className="headline-apple text-xs text-neutral-600 font-semibold tracking-tight">
              © FORNO D'OURO Todos os Direitos Reservados
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};
