const fs = require('fs');
const path = require('path');

// Read states.ts file and parse the data
const statesTsPath = path.join(__dirname, '..', 'src', 'data', 'states.ts');
const statesTsContent = fs.readFileSync(statesTsPath, 'utf8');

// Extract states array using regex (simple approach)
const statesMatch = statesTsContent.match(/const states: State\[\] = \[([\s\S]*?)\]/);
if (!statesMatch) {
  console.error('Could not parse states.ts file');
  process.exit(1);
}

// Parse states manually (simplified parser)
const statesData = [];
const stateRegex = /{\s*name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"],\s*cities:\s*\[([\s\S]*?)\]\s*}/g;
let stateMatch;
while ((stateMatch = stateRegex.exec(statesTsContent)) !== null) {
  const stateName = stateMatch[1];
  const stateSlug = stateMatch[2];
  const citiesContent = stateMatch[3];
  
  const cities = [];
  const cityRegex = /{\s*name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"]\s*}/g;
  let cityMatch;
  while ((cityMatch = cityRegex.exec(citiesContent)) !== null) {
    cities.push({
      name: cityMatch[1],
      slug: cityMatch[2]
    });
  }
  
  statesData.push({
    name: stateName,
    slug: stateSlug,
    cities: cities
  });
}

// Get all existing haha cooler page directories
const appDir = path.join(__dirname, '..', 'src', 'app');
const existingPages = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('vending-machines-for-sale-in-'))
  .map(dirent => dirent.name.replace('vending-machines-for-sale-in-', ''));

console.log(`Found ${existingPages.length} existing haha cooler pages`);

// Get all cities from states.ts
const allCities = [];
statesData.forEach(state => {
  state.cities.forEach(city => {
    const slug = `vending-machines-for-sale-in-${city.slug}`;
    if (!existingPages.includes(city.slug)) {
      allCities.push({
        slug: city.slug,
        fullSlug: slug,
        name: city.name,
        state: state.name,
        stateAbbr: getStateAbbreviation(state.name)
      });
    }
  });
});

console.log(`Found ${allCities.length} cities without pages`);

// Select first 100 cities
const citiesToCreate = allCities.slice(0, 100);
console.log(`Creating pages for ${citiesToCreate.length} cities...\n`);

// State abbreviations helper
function getStateAbbreviation(stateName) {
  const abbreviations = {
    'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR',
    'California': 'CA', 'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE',
    'Florida': 'FL', 'Georgia': 'GA', 'Hawaii': 'HI', 'Idaho': 'ID',
    'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA', 'Kansas': 'KS',
    'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD',
    'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS',
    'Missouri': 'MO', 'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV',
    'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY',
    'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH', 'Oklahoma': 'OK',
    'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
    'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT',
    'Vermont': 'VT', 'Virginia': 'VA', 'Washington': 'WA', 'Washington DC': 'DC',
    'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY'
  };
  return abbreviations[stateName] || stateName.slice(0, 2).toUpperCase();
}

// Generate city-specific content config
function generateCityContent(city) {
  const cityKey = city.slug.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('').replace(/[^a-zA-Z0-9]/g, '');
  
  const configName = `${cityKey.charAt(0).toLowerCase() + cityKey.slice(1)}Content`;
  
  return `export const ${configName}: CityLandingContent = {
  slug: '${city.fullSlug}',
  city: '${city.name}',
  state: '${city.state}',
  hero: {
    eyebrow: {
      icon: SparklesIcon,
      label: 'Smart Vending • ${city.name}, ${city.stateAbbr}'
    },
    headline: {
      pre: 'Vending Machines for Sale in',
      highlight: '${city.name}, ${city.state}'
    },
    description:
      'Deliver Haha smart coolers to ${city.name} corporate campuses, healthcare systems, and hospitality sites with ${city.state} support teams.',
    bullets: [
      {
        icon: ShieldCheckIcon,
        text: 'Enterprise-grade Haha smart coolers backed by US-based warranty partners'
      },
      {
        icon: ClockIcon,
        text: 'Freight coordination into ${city.name} with carriers familiar with smart vending equipment'
      },
      {
        icon: ChatBubbleOvalLeftEllipsisIcon,
        text: 'Telegram @thevendinglocator connects ${city.name} operators 24/7'
      }
    ],
    ctas: [
      {
        label: 'Explore Smart Coolers',
        href: '/haha-coolers',
        variant: 'primary'
      },
      {
        label: 'Talk to ${city.name} Experts',
        href: '/contact',
        variant: 'secondary'
      }
    ],
    supportLink: {
      icon: ChatBubbleOvalLeftEllipsisIcon,
      label: 'Telegram @thevendinglocator',
      href: 'https://t.me/thevendinglocator'
    }
  },
  sidebar: {
    badge: {
      icon: MapPinIcon,
      label: 'Built for ${city.name} operators'
    },
    items: [
      {
        title: 'Primary verticals:',
        description: 'Corporate offices, healthcare facilities, educational institutions, and hospitality venues.'
      },
      {
        title: 'Power your routes:',
        description: 'Remote planograms, 4G + Wi-Fi connectivity, and data-driven restock alerts.'
      },
      {
        title: 'Localized onboarding:',
        description: 'Guidance for building access, security protocols, and optimal placement strategies.'
      },
      {
        title: 'Always-on support:',
        description: 'Telegram @thevendinglocator provides troubleshooting, merchandising tips, and route optimization.'
      }
    ]
  },
  coolerLineup: [
    {
      name: 'Haha US360 Mini',
      label: 'Mini',
      price: '$2,999',
      description:
        'Compact smart cooler with 180 bottle capacity, ideal for smaller breakrooms, lobbies, and boutique spaces in ${city.name}.',
      bullets: ['Ideal for high-traffic breakrooms', 'Cashless tap-to-open checkout', 'Remote inventory visibility'],
      amazonUrl: 'https://amzn.to/43aTe10',
      learnMoreUrl: '/haha-coolers/mini',
      image: {
        src: '/haha-coolers/haha-us360-mini-black.png',
        alt: 'Haha US360 Mini smart cooler - black finish'
      }
    },
    {
      name: 'Haha US360 Pro',
      label: 'Pro',
      price: '$4,999',
      description:
        'Full-height smart cooler with 378 bottle capacity, perfect for enterprise campuses, hospitals, and university venues in ${city.name}.',
      bullets: ['4G + Wi-Fi connectivity', 'Vision technology prevents shrinkage', 'Built for multi-item shopping'],
      amazonUrl: 'https://amzn.to/3LtSLRq',
      learnMoreUrl: '/haha-coolers/pro',
      image: {
        src: '/haha-coolers/haha-pro-black.png',
        alt: 'Haha US360 Pro smart cooler - black finish'
      }
    },
    {
      name: 'Haha US1200 Ultra',
      label: 'Ultra',
      price: '$7,299',
      description:
        'Flagship smart vending cooler with maximum capacity and customizable branding to anchor micro market footprints across ${city.state}.',
      bullets: ['ETL-certified commercial refrigeration', 'App-driven restock automation', 'Supports full meal prep assortments'],
      amazonUrl: 'https://amzn.to/3LwEbIO',
      learnMoreUrl: '/haha-coolers/ultra',
      image: {
        src: '/haha-coolers/haha-ultra-black.png',
        alt: 'Haha US1200 Ultra smart cooler - black finish'
      }
    }
  ],
  sellingPoints: [
    {
      title: '${city.name}-first placement strategy',
      description:
        'We help you prioritize high-traffic locations with real data on foot traffic and demand across ${city.name}.',
      icon: MapPinIcon
    },
    {
      title: 'Inventory plans matched to locations',
      description:
        'From corporate offices to healthcare facilities, our launch playbooks recommend SKUs that are proven to sell in each market.',
      icon: CubeIcon
    },
    {
      title: '24/7 operator support on Telegram',
      description:
        'Skip manufacturer queues. Tap into @thevendinglocator any time you need troubleshooting, restock recommendations, or launch coaching.',
      icon: ChatBubbleOvalLeftEllipsisIcon
    },
    {
      title: 'Hands-on onboarding',
      description:
        'We walk your team through activation, cashless configuration, first-time merchandising, and route optimization so you go live fast.',
      icon: LifebuoyIcon
    }
  ],
  neighborhoods: [
    'Downtown ${city.name} & business district',
    'Corporate office parks & campuses',
    'Healthcare facilities & medical centers',
    'Educational institutions & universities',
    'Hospitality venues & retail centers',
    'Residential communities & multifamily buildings',
    'Industrial parks & manufacturing facilities',
    'Transportation hubs & airports'
  ],
  deliverables: [
    'Custom merchandising plans that match ${city.name} demographics and day-part traffic.',
    'Hands-on sourcing of fresh food partners and wholesale beverage suppliers across ${city.state}.',
    'Community of operators swapping live performance data so you stay competitive.'
  ],
  logistics: [
    {
      title: 'Managed delivery',
      description:
        'We coordinate white-glove freight into ${city.name} with carriers familiar with smart vending equipment.',
      icon: TruckIcon
    },
    {
      title: 'Warranty & compliance',
      description:
        'All Haha coolers are ETL listed, meet health code requirements, and include a 1-year parts warranty backed by our partner network.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Launch readiness checklist',
      description:
        'Receive plug-and-play setup guides, planograms, and marketing assets branded for ${city.name} operators.',
      icon: SparklesIcon
    },
    {
      title: 'Always-on messaging',
      description:
        '24/7 support via Telegram, plus weekly operator office hours covering merchandising, pricing, and route planning.',
      icon: ClockIcon
    }
  ],
  faq: [
    {
      question: 'How quickly can I receive a smart cooler in ${city.name}?',
      answer:
        'Most Haha units ship within 7–10 business days. We arrange freight into ${city.name} and surrounding areas, then schedule delivery windows that match building dock hours.'
    },
    {
      question: 'Can you help me find locations around ${city.name}?',
      answer:
        'Yes. The Vending Locator sources placements across corporate offices, medical centers, multifamily towers, and commercial facilities throughout ${city.state}.'
    },
    {
      question: 'Do the machines handle local climate conditions?',
      answer:
        'Absolutely. The commercial refrigeration system is engineered for various climate conditions, with temperature control features to keep products fresh year-round.'
    },
    {
      question: 'What payment methods do ${city.name} customers prefer?',
      answer:
        'Tap-to-pay dominates. Every Haha cooler accepts EMV chips, Apple Pay, Google Pay, Samsung Pay, and NFC wallets so you can capture all customer preferences.'
    },
    {
      question: 'Where can I learn more about each model?',
      answer:
        'Explore the full lineup on our Haha Coolers page for deep dives, spec sheets, and operator resources tailored to each model.'
    }
  ]
}

`;
}

// Generate page.tsx file
function generatePageFile(city) {
  const pageName = city.name.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '') + city.state.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '') + 'Page';
  
  const displayName = city.name.replace(/'/g, "\\'");
  
  return `import { Metadata } from 'next'
import ${pageName} from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in ${displayName}, ${city.stateAbbr} | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in ${displayName}, ${city.state}. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    '${displayName} vending machines for sale, smart vending ${displayName} ${city.stateAbbr}, haha smart coolers ${displayName}, vending machine business ${displayName}, smart vending ${city.state}',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/${city.fullSlug}'
  },
  openGraph: {
    title: 'Vending Machines for Sale in ${displayName}, ${city.state} | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for ${displayName}, ${city.state}. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/${city.fullSlug}',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in ${displayName}, ${city.state} | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for ${displayName}, ${city.state} with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const revalidate = 3600

export default function ${pageName}Wrapper() {
  return <${pageName} />
}

`;
}

// Generate pageClient.tsx file
function generatePageClient(city) {
  const configName = city.slug.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('').replace(/[^a-zA-Z0-9]/g, '');
  const contentName = `${configName.charAt(0).toLowerCase() + configName.slice(1)}Content`;
  
  const pageName = city.name.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '') + city.state.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '') + 'Page';
  
  return `'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { ${contentName} } from '@/config/locationPages'

export default function ${pageName}() {
  return <LocationPageTemplate content={${contentName}} />
}

`;
}

// Main execution
const locationPagesPath = path.join(__dirname, '..', 'src', 'config', 'locationPages.ts');
let locationPagesContent = fs.readFileSync(locationPagesPath, 'utf8');

// Find the insertion point (before the final export statement or at the end)
const insertionPoint = locationPagesContent.length;

const newConfigs = [];
const createdPages = [];

citiesToCreate.forEach(city => {
  try {
    // Generate content config
    const config = generateCityContent(city);
    newConfigs.push(config);
    
    // Create page directory
    const pageDir = path.join(appDir, city.fullSlug);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    // Generate and write page.tsx
    const pageContent = generatePageFile(city);
    fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent, 'utf8');
    
    // Generate and write pageClient.tsx
    const pageClientContent = generatePageClient(city);
    fs.writeFileSync(path.join(pageDir, 'pageClient.tsx'), pageClientContent, 'utf8');
    
    createdPages.push(city);
    console.log(`✅ Created page for ${city.name}, ${city.state}`);
  } catch (error) {
    console.error(`❌ Error creating page for ${city.name}:`, error.message);
  }
});

// Append new configs to locationPages.ts
const newConfigsBlock = '\n' + newConfigs.join('\n');
locationPagesContent += newConfigsBlock;

fs.writeFileSync(locationPagesPath, locationPagesContent, 'utf8');

console.log(`\n✅ Successfully created ${createdPages.length} haha cooler pages!`);
console.log(`✅ Added ${newConfigs.length} content configs to locationPages.ts`);
console.log(`\nCreated pages:`);
createdPages.forEach(city => {
  console.log(`  - ${city.name}, ${city.state} (${city.fullSlug})`);
});
