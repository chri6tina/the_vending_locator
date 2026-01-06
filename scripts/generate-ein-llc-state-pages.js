const fs = require('fs');
const path = require('path');

// Read the Florida template files
const templatePagePath = path.join(process.cwd(), 'src', 'app', 'ein-llc', 'florida', 'page.tsx');
const templatePageClientPath = path.join(process.cwd(), 'src', 'app', 'ein-llc', 'florida', 'pageClient.tsx');

const templatePage = fs.readFileSync(templatePagePath, 'utf8');
const templatePageClient = fs.readFileSync(templatePageClientPath, 'utf8');

// State data - all 50 states + DC
const states = [
  { name: 'Alabama', slug: 'alabama' },
  { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' },
  { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' },
  { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' },
  { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' }, // Skip, already exists
  { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' },
  { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' },
  { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' },
  { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' },
  { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' },
  { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' },
  { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' },
  { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' },
  { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' },
  { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' },
  { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' },
  { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' },
  { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' },
  { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' },
  { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' },
  { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' },
  { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' },
  { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' },
  { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' },
  { name: 'Washington DC', slug: 'washington-dc' },
  { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' },
  { name: 'Wyoming', slug: 'wyoming' },
];

// State-specific government entity names
const stateGovernmentEntities = {
  'alabama': 'Alabama Secretary of State',
  'alaska': 'Alaska Division of Corporations',
  'arizona': 'Arizona Corporation Commission',
  'arkansas': 'Arkansas Secretary of State',
  'california': 'California Secretary of State',
  'colorado': 'Colorado Secretary of State',
  'connecticut': 'Connecticut Secretary of State',
  'delaware': 'Delaware Division of Corporations',
  'florida': 'Florida Division of Corporations',
  'georgia': 'Georgia Secretary of State',
  'hawaii': 'Hawaii Department of Commerce and Consumer Affairs',
  'idaho': 'Idaho Secretary of State',
  'illinois': 'Illinois Secretary of State',
  'indiana': 'Indiana Secretary of State',
  'iowa': 'Iowa Secretary of State',
  'kansas': 'Kansas Secretary of State',
  'kentucky': 'Kentucky Secretary of State',
  'louisiana': 'Louisiana Secretary of State',
  'maine': 'Maine Secretary of State',
  'maryland': 'Maryland Department of Assessments and Taxation',
  'massachusetts': 'Massachusetts Secretary of State',
  'michigan': 'Michigan Department of Licensing and Regulatory Affairs',
  'minnesota': 'Minnesota Secretary of State',
  'mississippi': 'Mississippi Secretary of State',
  'missouri': 'Missouri Secretary of State',
  'montana': 'Montana Secretary of State',
  'nebraska': 'Nebraska Secretary of State',
  'nevada': 'Nevada Secretary of State',
  'new-hampshire': 'New Hampshire Secretary of State',
  'new-jersey': 'New Jersey Division of Revenue',
  'new-mexico': 'New Mexico Secretary of State',
  'new-york': 'New York Department of State',
  'north-carolina': 'North Carolina Secretary of State',
  'north-dakota': 'North Dakota Secretary of State',
  'ohio': 'Ohio Secretary of State',
  'oklahoma': 'Oklahoma Secretary of State',
  'oregon': 'Oregon Secretary of State',
  'pennsylvania': 'Pennsylvania Department of State',
  'rhode-island': 'Rhode Island Secretary of State',
  'south-carolina': 'South Carolina Secretary of State',
  'south-dakota': 'South Dakota Secretary of State',
  'tennessee': 'Tennessee Secretary of State',
  'texas': 'Texas Secretary of State',
  'utah': 'Utah Division of Corporations',
  'vermont': 'Vermont Secretary of State',
  'virginia': 'Virginia State Corporation Commission',
  'washington': 'Washington Secretary of State',
  'washington-dc': 'DCRA (Department of Consumer and Regulatory Affairs)',
  'west-virginia': 'West Virginia Secretary of State',
  'wisconsin': 'Wisconsin Department of Financial Institutions',
  'wyoming': 'Wyoming Secretary of State',
};

function generateComponentName(stateName) {
  // Convert state name to PascalCase component name
  return stateName.replace(/\s+/g, '') + 'EinLLCPage';
}

function escapeForTemplate(str) {
  // Escape single quotes for use in template strings
  return str.replace(/'/g, "\\'");
}

let generatedCount = 0;
const einLLCRoot = path.join(process.cwd(), 'src', 'app', 'ein-llc');

states.forEach(state => {
  // Skip Florida since it's our template
  if (state.slug === 'florida') {
    return;
  }

  const stateDir = path.join(einLLCRoot, state.slug);
  const pagePath = path.join(stateDir, 'page.tsx');
  const pageClientPath = path.join(stateDir, 'pageClient.tsx');

  // Create directory
  fs.mkdirSync(stateDir, { recursive: true });

  // Generate component name
  const componentName = generateComponentName(state.name);
  const stateGovernmentEntity = stateGovernmentEntities[state.slug] || `${state.name} Secretary of State`;

  // Generate page.tsx (metadata)
  let pageContent = templatePage
    .replace(/Florida/g, state.name)
    .replace(/florida/g, state.slug)
    .replace(/FloridaEinLLCPage/g, componentName)
    .replace(/\$175/g, `$${125 + 50}`); // This will be updated by the component dynamically

  // Generate pageClient.tsx
  let pageClientContent = templatePageClient
    .replace(/const stateDisplayName = 'Florida';/g, `  const stateDisplayName = '${escapeForTemplate(state.name)}';`)
    .replace(/const stateSlug = 'florida'/g, `  const stateSlug = '${state.slug}'`)
    .replace(/FloridaEinLLCPage/g, componentName)
    .replace(/Florida/g, state.name)
    .replace(/florida/g, state.slug)
    .replace(/Florida Division of Corporations/g, stateGovernmentEntity)
    .replace(/Division of Corporations/g, stateGovernmentEntity.split(' ').slice(1).join(' ')); // Remove state name from entity if it exists

  // Update FAQ answers that mention Florida specifically
  pageClientContent = pageClientContent.replace(/Florida Division of Corporations/g, stateGovernmentEntity);
  pageClientContent = pageClientContent.replace(/Florida\./g, `${state.name}.`);
  pageClientContent = pageClientContent.replace(/Florida'/g, `${state.name}'`);
  pageClientContent = pageClientContent.replace(/Florida\s/g, `${state.name} `);
  pageClientContent = pageClientContent.replace(/Florida,/g, `${state.name},`);
  pageClientContent = pageClientContent.replace(/Florida-specific/g, `${state.name}-specific`);
  pageClientContent = pageClientContent.replace(/Florida state/g, `${state.name} state`);

  // Update metadata in page.tsx with state-specific keywords
  const keywords = `file LLC ${state.name}, form LLC ${state.name}, EIN ${state.name}, ${state.name} LLC filing, ${state.name} business formation, file LLC online ${state.name}, ${state.name} LLC service, get EIN ${state.name}, ${state.name} Secretary of State LLC, ${state.name} LLC cost`;
  pageContent = pageContent.replace(
    /keywords: "file LLC Florida[^"]*"/,
    `keywords: "${keywords}"`
  );

  // Write files
  fs.writeFileSync(pagePath, pageContent, 'utf8');
  fs.writeFileSync(pageClientPath, pageClientContent, 'utf8');

  generatedCount++;
  console.log(`Generated: ${state.name} (${state.slug})`);
});

console.log(`\n✅ Successfully generated ${generatedCount} EIN/LLC state pages!`);
console.log(`Note: Florida was skipped as it's the template.`);

