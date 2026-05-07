
import data from './pricing-data.json';

export type PricingPlan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  button: string;
  popular: boolean;
};

export type PricingCategory = 'web' | 'automation' | 'design';

export const PricingData: Record<PricingCategory, PricingPlan[]> = data as any;
