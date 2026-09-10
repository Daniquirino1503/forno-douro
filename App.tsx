import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DeliveryGrid } from './components/DeliveryGrid';
import { BonusOfferStack } from './components/BonusOfferStack';
import { MechanismSection } from './components/MechanismSection';
import { RecipeShowcase } from './components/RecipeShowcase';
import { SocialProofSection } from './components/SocialProofSection';
import { WhatsappCarousel } from './components/WhatsappCarousel';
import { PricingComparison } from './components/PricingComparison';
import { GuaranteeSection } from './components/GuaranteeSection';
import { ObjectionSection } from './components/ObjectionSection';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'elite'>('elite');

  const handleOpenCheckout = (plan: 'essencial' | 'elite' = 'elite') => {
    setSelectedPlan(plan);
    setCheckoutModalOpen(true);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenCheckout('elite');
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] selection:bg-amber-100 selection:text-amber-900">
      {/* Apple-style Navigation Bar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* 1. Hero Section */}
      <HeroSection onCtaClick={scrollToPricing} />

      {/* 2. Grid de Entrega (Cards) */}
      <DeliveryGrid onCtaClick={scrollToPricing} />

      {/* 3. Bloco de Bónus (Offer Stack) */}
      <BonusOfferStack onCtaClick={scrollToPricing} />

      {/* 4. Seção do Mecanismo Único (SHA) */}
      <MechanismSection />

      {/* 5. Seção de Receitas (Vitrine) */}
      <RecipeShowcase onCtaClick={scrollToPricing} />

      {/* 6. Prova Social (Testemunhos PT) */}
      <SocialProofSection />

      {/* 6b. Carrossel de Prints do WhatsApp */}
      <WhatsappCarousel />

      {/* 7. Tabela Comparativa de Planos */}
      <PricingComparison onSelectPlan={handleOpenCheckout} />

      {/* 8. Garantia Incondicional 15 Dias */}
      <GuaranteeSection />

      {/* 9. Quebra de Dúvidas, Suporte WhatsApp & Footer */}
      <ObjectionSection onCtaClick={scrollToPricing} />

      {/* Interactive Checkout Modal (PT-PT) */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        initialPlan={selectedPlan}
      />
    </div>
  );
}
