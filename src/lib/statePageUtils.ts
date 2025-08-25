// Utility functions for state page management and breadcrumb navigation

// List of all states that have dedicated state pages
export const STATES_WITH_PAGES = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
  'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
  'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
  'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
  'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
  'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
  'wisconsin', 'wyoming'
];

// Check if a state has a dedicated page
export function hasStatePage(stateName: string): boolean {
  const normalizedState = stateName.toLowerCase().replace(/\s+/g, '-');
  return STATES_WITH_PAGES.includes(normalizedState);
}

// Get the correct state page URL
export function getStatePageUrl(stateName: string): string | null {
  if (hasStatePage(stateName)) {
    const normalizedState = stateName.toLowerCase().replace(/\s+/g, '-');
    return `/vending-leads/${normalizedState}`;
  }
  return null;
}

// Generate breadcrumb items for a city page
export function generateCityBreadcrumbs(cityName: string, stateName: string) {
  const breadcrumbs = [
    { name: 'Home', href: '/', current: false },
    { name: 'Vending Leads', href: '/vending-leads', current: false }
  ];

  // Only add state breadcrumb if the state page exists
  if (hasStatePage(stateName)) {
    breadcrumbs.push({
      name: stateName,
      href: getStatePageUrl(stateName)!,
      current: false
    });
  }

  // Always add the current city
  breadcrumbs.push({
    name: cityName,
    href: '#',
    current: true
  });

  return breadcrumbs;
}

// Generate breadcrumb items for a state page
export function generateStateBreadcrumbs(stateName: string) {
  return [
    { name: 'Home', href: '/', current: false },
    { name: 'Vending Leads', href: '/vending-leads', current: false },
    { name: stateName, href: '#', current: true }
  ];
}
