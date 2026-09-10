import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import wpp1 from '../assets/images/wpp_depo_1.jpg';
import wpp2 from '../assets/images/wpp_depo_2.jpg';
import wpp3 from '../assets/images/wpp_depo_3.jpg';
import wpp4 from '../assets/images/wpp_depo_4.jpg';

const slides = [wpp1, wpp2, wpp3, wpp4];

export const WhatsappCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const go = (dir: number) => {
    setCurrent((c) => (c + dir + slides.length) % slides.length);
  };

  return (
    <section className="pb-16 sm:pb-20 bg-[#FCFCFA]">
      <div className="safe-zone-container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/25 text-[#128C7E] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            Mensagens Reais no WhatsApp
          </div>
          <h3 className="headline-heavy text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] leading-tight">
            O que nos escrevem depois de fazer o primeiro bolo:
          </h3>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
            <div className="relative w-full" style={{ aspectRatio: '700 / 844' }}>
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Depoimento no WhatsApp ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-contain bg-white transition-opacity duration-500"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}
            </div>

            <button
              onClick={() => go(-1)}
              aria-label="Depoimento anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-white shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Próximo depoimento"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-white shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === current ? 'w-6 bg-[#25D366]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
