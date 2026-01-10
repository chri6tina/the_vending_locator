// State LLC filing fees (as of 2024 - update as needed)
// These are the base state government fees. Your service fee ($50) will be added to these.

export const stateFilingFees: Record<string, number> = {
  'alabama': 150,      // Alabama LLC filing fee
  'alaska': 250,       // Alaska LLC filing fee
  'arizona': 50,       // Arizona LLC filing fee
  'arkansas': 45,      // Arkansas LLC filing fee
  'california': 70,    // California LLC filing fee (plus $800 annual tax)
  'colorado': 50,      // Colorado LLC filing fee
  'connecticut': 120,  // Connecticut LLC filing fee
  'delaware': 90,      // Delaware LLC filing fee
  'florida': 125,      // Florida LLC filing fee
  'georgia': 100,      // Georgia LLC filing fee
  'hawaii': 50,        // Hawaii LLC filing fee
  'idaho': 100,        // Idaho LLC filing fee
  'illinois': 150,     // Illinois LLC filing fee
  'indiana': 95,       // Indiana LLC filing fee
  'iowa': 50,          // Iowa LLC filing fee
  'kansas': 165,       // Kansas LLC filing fee
  'kentucky': 40,      // Kentucky LLC filing fee
  'louisiana': 100,    // Louisiana LLC filing fee
  'maine': 175,        // Maine LLC filing fee
  'maryland': 100,     // Maryland LLC filing fee
  'massachusetts': 500, // Massachusetts LLC filing fee
  'michigan': 50,      // Michigan LLC filing fee
  'minnesota': 135,    // Minnesota LLC filing fee
  'mississippi': 50,   // Mississippi LLC filing fee
  'missouri': 50,      // Missouri LLC filing fee
  'montana': 70,       // Montana LLC filing fee
  'nebraska': 100,     // Nebraska LLC filing fee
  'nevada': 75,        // Nevada LLC filing fee
  'new-hampshire': 100, // New Hampshire LLC filing fee
  'new-jersey': 125,   // New Jersey LLC filing fee
  'new-mexico': 50,    // New Mexico LLC filing fee
  'new-york': 200,     // New York LLC filing fee (plus publication requirement ~$1000-1500)
  'north-carolina': 125, // North Carolina LLC filing fee
  'north-dakota': 135, // North Dakota LLC filing fee
  'ohio': 99,          // Ohio LLC filing fee
  'oklahoma': 100,     // Oklahoma LLC filing fee
  'oregon': 100,       // Oregon LLC filing fee
  'pennsylvania': 125, // Pennsylvania LLC filing fee
  'rhode-island': 150, // Rhode Island LLC filing fee
  'south-carolina': 110, // South Carolina LLC filing fee
  'south-dakota': 150, // South Dakota LLC filing fee
  'tennessee': 300,    // Tennessee LLC filing fee (varies by county, minimum $300)
  'texas': 300,        // Texas LLC filing fee
  'utah': 70,          // Utah LLC filing fee
  'vermont': 125,      // Vermont LLC filing fee
  'virginia': 100,     // Virginia LLC filing fee
  'washington': 200,   // Washington LLC filing fee
  'washington-dc': 220, // Washington DC LLC filing fee
  'west-virginia': 100, // West Virginia LLC filing fee
  'wisconsin': 130,    // Wisconsin LLC filing fee
  'wyoming': 60,       // Wyoming LLC filing fee
}

// Service fee (your profit)
export const SERVICE_FEE = 50

// Calculate total price: state fee + service fee
export function calculateTotalPrice(stateSlug: string): number {
  const stateFee = stateFilingFees[stateSlug.toLowerCase()] || 0
  return stateFee + SERVICE_FEE
}

// Get state fee only (for display purposes)
export function getStateFee(stateSlug: string): number {
  return stateFilingFees[stateSlug.toLowerCase()] || 0
}


