export function formatCurrency(amount: number, currency: string = 'AOA'): string {
  return new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatDate(date: Date, locale: string = 'pt-AO'): string {
  return date.toLocaleDateString(locale)
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}
