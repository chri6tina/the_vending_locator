type CityCategory =
  | 'vending-leads'
  | 'vending-services'
  | 'tax-services'
  | 'bookkeeping-kpis'
  | 'vending-machines'
  | 'how-to-start'

interface CityVariantInput {
  category: CityCategory
  slug: string
  city: string
  state: string
}

const pickVariant = (slug: string, options: string[], offset = 0) => {
  const seed = slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
  return options[(seed + offset) % options.length]
}

const interpolate = (template: string, city: string, state: string) =>
  template.replace(/\{city\}/g, city).replace(/\{state\}/g, state)

export const getCityVariantCopy = ({ category, slug, city, state }: CityVariantInput) => {
  const data: Record<CityCategory, { hero: string[]; benefit: string[] }> = {
    'vending-leads': {
      hero: [
        'Operators in {city} see the best response when outreach is tailored to local business hours.',
        'In {city}, we focus on decision-makers who can approve placements quickly.',
        '{city} routes perform best when leads are organized by location type and timing.'
      ],
      benefit: [
        'Lead lists tuned to {city} business hours and foot traffic patterns.',
        'Location-level notes to help prioritize {city} outreach.',
        'Clear next steps based on {state} market norms.'
      ]
    },
    'vending-services': {
      hero: [
        'Service partners in {city} keep routes consistent and reduce downtime.',
        'In {city}, reliable restock cadence is key to stable revenue.',
        '{city} sites benefit from proactive maintenance and fast response times.'
      ],
      benefit: [
        'Service options matched to {city} route density.',
        'Maintenance planning built around {state} compliance needs.',
        'Operator support focused on uptime in {city}.'
      ]
    },
    'tax-services': {
      hero: [
        '{city} owners stay ahead by tracking sales tax and cost of goods monthly.',
        'Clean books in {city} make quarterly filings and year-end prep easier.',
        '{state} compliance is simpler when books are reconciled every month.'
      ],
      benefit: [
        'Monthly bookkeeping that keeps {city} routes tax-ready.',
        '{state} filing support with vending-specific guidance.',
        'Clear reporting so {city} operators see true profit.'
      ]
    },
    'bookkeeping-kpis': {
      hero: [
        '{city} operators gain clarity when performance is tracked by route and location.',
        'Monthly KPI reporting helps {city} owners see margin shifts early.',
        '{state} growth plans are easier with steady financial visibility.'
      ],
      benefit: [
        'KPI snapshots that highlight top {city} locations.',
        'Route profitability insights built for {state} markets.',
        'Monthly reporting that keeps {city} operations on track.'
      ]
    },
    'vending-machines': {
      hero: [
        '{city} launches move faster with the right equipment mix and setup plan.',
        'Operators in {city} benefit from machine selection tied to location type.',
        '{state} rollouts are smoother with clear delivery and setup guidance.'
      ],
      benefit: [
        'Equipment planning aligned to {city} location profiles.',
        'Setup guidance tailored to {state} timelines.',
        'Product mix suggestions for {city} demand patterns.'
      ]
    },
    'how-to-start': {
      hero: [
        '{city} entrepreneurs often start with 1-2 locations and scale once routes stabilize.',
        'In {city}, clear compliance steps and route planning prevent early setbacks.',
        '{state} requirements are easier to manage with a simple launch checklist.'
      ],
      benefit: [
        'Launch steps tuned to {city} market pace.',
        'Checklist guidance aligned to {state} requirements.',
        'A clear path to first placements in {city}.'
      ]
    }
  }

  const heroTemplate = pickVariant(slug, data[category].hero)
  const benefitTemplate = pickVariant(slug, data[category].benefit, 1)

  return {
    heroSuffix: interpolate(heroTemplate, city, state),
    benefit: interpolate(benefitTemplate, city, state)
  }
}
