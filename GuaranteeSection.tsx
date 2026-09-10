import React from 'react';
import { Shield, Lock, Award, CheckCircle2 } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FCFCFA] border-y border-neutral-200/70" id="garantia">
      <div className="safe-zone-container">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10">
            
            {/* Guarantee Seal Badge */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-1.5 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-neutral-900 border-2 border-amber-300/80 flex flex-col items-center justify-center text-center p-2 text-white">
                  <Award className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="headline-heavy text-2xl sm:text-3xl text-amber-300 leading-none">
                    15
                  </span>
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-neutral-200">
                    DIAS DE TESTE
                  </span>
                  <span className="text-[9px] text-amber-400/90 font-medium">
                    Risco Zero
                  </span>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Lock className="w-3 h-3" />
                <span>COMPRA 100% SEGURA</span>
              </div>
            </div>

            {/* Copy Block */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                Inversão Total de Risco
              </div>

              <h2 className="headline-heavy text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] mb-4 leading-tight">
                ✅ GARANTIA "BOLO FOFINHO OU O SEU DINHEIRO DE VOLTA"
              </h2>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-4">
                Eu confio tanto na nossa física de cozedura que lhe dou 15 dias de teste.
              </p>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-5">
                Se fizer as receitas do método SHA na sua cozinha e o seu bolo não crescer fofinho, húmido e delicioso, eu devolvo-lhe cada cêntimo do investimento.
              </p>

              <div className="headline-heavy text-base sm:text-lg text-emerald-700 font-bold mb-4">
                O risco é todo meu.
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Sem perguntas
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Sem burocracia
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Reembolso direto no seu banco
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
