export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  duration: string;
  audioTimestamp: string;
  rating: number;
}

export interface RecipeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  tag: string;
  prepTime: string;
}

export interface BonusItem {
  id: string;
  number: number;
  title: string;
  description: string;
  originalPrice: string;
  isFreeToday: boolean;
  highlightTag: string;
}

export interface PricingPlan {
  id: 'essencial' | 'elite';
  name: string;
  badge?: string;
  price: string;
  recommended?: boolean;
  features: {
    included: boolean;
    text: string;
  }[];
}
