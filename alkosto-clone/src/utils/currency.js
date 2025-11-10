export const formatCurrency = (value, locale = 'es-CO', currency = 'COP') =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value || 0);
