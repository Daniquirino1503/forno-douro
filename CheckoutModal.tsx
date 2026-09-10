import React, { useState } from 'react';
import { X, ShieldCheck, Lock, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: 'essencial' | 'elite';
}

const LINK_ESSENCIAL = 'https://pay.hotmart.com/M107541209H?off=ph3wvino&checkoutMode=10';
const LINK_ELITE = 'https://pay.hotmart.com/M107541209H?off=j0l1qcbf&checkoutMode=10';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'elite',
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'elite'>(initialPlan);

  if (!isOpen) return null;

  const currentPrice = selectedPlan === 'elite' ? '14,90€' : '7,90€';
  const checkoutLink = selectedPlan === 'elite' ? LINK_ELITE : LINK_ESSENCIAL;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 my-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div>
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Checkout Seguro &bull; Acesso Imediato</span>
            </div>
            <h3 className="headline-heavy text-xl sm:text-2xl text-[#1A1A1A]">
              Finalizar Inscrição Forno d'Ouro
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Acesso vitalício instantâneo no seu telemóvel e computador.
            </p>
          </div>

          {/* Plan Selector Toggle */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-100 rounded-2xl mb-6 text-xs font-bold">
            <button
              type="button"
              onClick={() => setSelectedPlan('essencial')}
              className={`py-2.5 px-3 rounded-xl transition-all ${
                selectedPlan === 'essencial'
                  ? 'bg-white text-[#1A1A1A] shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <div>Plano Essencial</div>
              <div className="text-neutral-700 text-xs font-extrabold">7,90€</div>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlan('elite')}
              className={`py-2.5 px-3 rounded-xl transition-all relative ${
                selectedPlan === 'elite'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <div>Confeitaria de Elite</div>
              <div className="text-white text-xs font-extrabold">14,90€ (4 Bónus)</div>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-4">
            Vai ser redirecionado para o pagamento seguro na Hotmart, com suporte a MB WAY, Multibanco e cartão.
          </p>

          {/* Guarantee assurance */}
          <div className="flex items-center gap-2 text-[11px] text-neutral-500 pt-1 mb-4">
            <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Encriptação SSL 256-bit &bull; Garantia de 15 dias Bolo Fofinho</span>
          </div>

          {/* Submit CTA */}
          <a
            href={checkoutLink}
            className="btn-cta-green w-full py-4 text-base rounded-2xl cursor-pointer flex items-center justify-center"
          >
            <span className="uppercase tracking-tight font-bold">
              PAGAR {currentPrice} & LIBERAR ACESSO
            </span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>
    </div>
  );
};
