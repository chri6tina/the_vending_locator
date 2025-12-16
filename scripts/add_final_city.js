// Add 1 final city to reach exactly 1000
const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
const statesPath = path.join(__dirname, '../src/data/states.ts');

// Read states
const statesContent = fs.readFileSync(statesPath, 'utf8');
const citySlugMatches = statesContent.matchAll(/{ name: '[^']+', slug: '([^']+)' }/g);
const allCitySlugs = Array.from(citySlugMatches).map(m => m[1]);

// Read page
const pageContent = fs.readFileSync(pagePath, 'utf8');
const existingMatches = pageContent.matchAll(/^  '([^']+)': \{/gm);
const existingCitySlugs = new Set(Array.from(existingMatches).map(m => m[1]));

// Find missing cities
const missingCities = allCitySlugs.filter(slug => !existingCitySlugs.has(slug));

// Take 1 more
const cityToAdd = missingCities[0];

console.log(`Adding final city: ${cityToAdd}`);

// Get state
const state = cityToAdd.split('-').pop();
const cityDisplay = cityToAdd.split('-').slice(0, -1).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

const permitTemplates = {
  'virginia': 'Virginia requires a sales tax certificate from the Department of Taxation. Register your business and confirm city/county health requirements for food/beverage vending.'
};

const permitNote = permitTemplates[state] || 'Register your business and obtain necessary permits. Confirm state and local sales tax requirements, and verify city/county health department rules for food/beverage vending.';

const entry = `  '${cityToAdd}': {
    permitNotes:
      '${permitNote}',
    demandDrivers: [
      'Healthcare campuses and clinics',
      'Downtown offices and corporate buildings',
      'Industrial and logistics facilities',
      'Education institutions and student housing',
      'Retail corridors and shopping centers'
    ],
    neighborhoods: [
      'Downtown',
      'Medical District',
      'Industrial corridors',
      'University area',
      'Retail corridors'
    ],
    seasonalNote:
      'Plan service cadence based on local traffic patterns. Keep card readers active and monitor top SKUs for optimal restocking frequency.',
    extraFaqs: [
      {
        q: 'What are the best locations to start?',
        a: 'Begin with offices (50+ employees), medical clinics, schools, gyms, and logistics facilities in ${cityDisplay}. Validate sales, then expand to additional sites.'
      },
      {
        q: 'Do I need special permits?',
        a: 'Most jurisdictions require a general business license and sales tax permit. Food vending may need additional health approvals—confirm with your local health department.'
      }
    ]
  }`;

// Find insertion point (before closing brace of cityInfo)
const lines = pageContent.split('\n');
let insertIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '}' && i > 29000) {
    // Check if next is export
    for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
      if (lines[j].trim().startsWith('export async function generateMetadata')) {
        insertIndex = i;
        break;
      }
    }
    if (insertIndex !== -1) break;
  }
}

if (insertIndex === -1) {
  console.error('Could not find insertion point');
  process.exit(1);
}

// Insert
const newLines = [
  ...lines.slice(0, insertIndex),
  ',',
  ...entry.split('\n'),
  ...lines.slice(insertIndex)
];

fs.writeFileSync(pagePath, newLines.join('\n'), 'utf8');

// Verify
const finalContent = fs.readFileSync(pagePath, 'utf8');
const finalMatches = Array.from(finalContent.matchAll(/^  '([^']+)': \{/gm));
console.log(`✅ Added final city. Total entries: ${finalMatches.length}`);

