// lib/gtag.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-TCQNB9DXNC';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const pageview = (url: string) => {
  if (!window || !GA_MEASUREMENT_ID) return;
  window.gtag?.('event', 'page_view', { page_path: url });
};

export const event = ({ action, category, label, value }: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (!window || !GA_MEASUREMENT_ID) return;
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
