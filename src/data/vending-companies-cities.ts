import { vendingServicesCities } from '@/data/vending-services-cities'

// Reuse vending-services city coverage for vending-companies pages
export const vendingCompaniesCities = vendingServicesCities

export function getCityInfo(slug: string) {
  return vendingCompaniesCities[slug as keyof typeof vendingCompaniesCities]
}

export function getAllVendingCompaniesSlugs() {
  return Object.keys(vendingCompaniesCities)
}
