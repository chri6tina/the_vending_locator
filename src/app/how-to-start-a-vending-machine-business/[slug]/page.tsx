import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import states from '@/data/states'
import { notFound } from 'next/navigation'

type Params = { params: { slug: string } }

// City-specific enrichment to avoid thin/duplicate content
// Add entries here city-by-city as we enrich guides
const cityInfo: Record<string, {
  permitNotes?: string
  demandDrivers?: string[]
  neighborhoods?: string[]
  seasonalNote?: string
  extraFaqs?: { q: string; a: string }[]
}> = {
  'anchorage-alaska': {
    permitNotes:
      'Anchorage generally does not levy a broad sales tax; confirm any site-specific or product-specific taxes and follow county health guidance for food/beverage vending. Register your business with the State of Alaska and verify local licensing where machines are placed.',
    demandDrivers: [
      'Healthcare and clinics in the U‑Med District',
      'Logistics, aviation, and airport corridor traffic',
      'Military workforce around JBER (access rules apply)',
      'Tourism peaks in summer; outdoor venues and hotels',
      'Office parks along Midtown and Dimond Blvd retail'
    ],
    neighborhoods: [
      'Downtown',
      'Midtown',
      'U‑Med District',
      'Spenard',
      'Dimond Blvd retail corridor',
      'Airport corridor'
    ],
    seasonalNote:
      'Plan inventory and service cadence for winter weather. Prioritize products that travel well in cold temperatures and keep machines stocked with card readers for quick, contactless purchases.',
    extraFaqs: [
      {
        q: 'Are there seasonality considerations in Anchorage?',
        a: 'Yes. Summer tourism can boost traffic in hotels and recreation areas. In winter, build reliable service routes and prioritize indoor, high-footfall sites such as offices, clinics, and logistics hubs.'
      },
      {
        q: 'Where should I focus first?',
        a: 'Start with office parks in Midtown, clinics in the U‑Med District, and logistics/aviation businesses near the airport corridor. Evaluate employee counts and hours to match product mix.'
      }
    ]
  }
  ,
  'little-rock-arkansas': {
    permitNotes:
      'Arkansas generally requires a sales and use tax permit through the Department of Finance & Administration (DFA). Register your business, collect tax where applicable, and verify any county health requirements for food and beverage vending in Little Rock.',
    demandDrivers: [
      'State government buildings and downtown offices',
      'Healthcare campuses and clinics around UAMS',
      'Logistics and light industrial along I‑30/I‑430',
      'Higher education (UA Little Rock) and nearby housing',
      'Tourism and venues in River Market District'
    ],
    neighborhoods: [
      'Downtown & River Market',
      'Midtown',
      'Hillcrest',
      'West Little Rock',
      'I‑30 / I‑430 industrial corridors'
    ],
    seasonalNote:
      'Summer events and tourism can increase foot traffic downtown; maintain a balanced product mix with cold beverages and proven snacks. Keep card readers active for quick purchases in office settings.',
    extraFaqs: [
      {
        q: 'Do I need a state tax permit?',
        a: 'Yes. Apply for an Arkansas sales and use tax permit via the DFA. You will collect and remit tax on applicable vending sales.'
      },
      {
        q: 'Best first targets in Little Rock?',
        a: 'Start with government buildings and downtown offices, UAMS medical facilities, and logistics hubs. Validate sales, then expand to campuses and gyms.'
      }
    ]
  }
  ,
  'billings-montana': {
    permitNotes:
      'Montana has no statewide sales tax. Verify any local resort/option taxes and follow Yellowstone County and City of Billings health guidance for vending machines that sell food or beverages.',
    demandDrivers: [
      'Healthcare campuses and clinics around Billings medical corridor',
      'Energy, logistics, and industrial sites along I‑90/I‑94',
      'Retail and travel corridors (King Ave, 24th St W, Shiloh Rd)',
      'Education (MSU Billings) and nearby housing',
      'Hotels and recreation points serving regional travelers'
    ],
    neighborhoods: [
      'Downtown Billings',
      'West End (Shiloh/King Ave area)',
      'Heights',
      'South Side industrial'
    ],
    seasonalNote:
      'Winter conditions affect service routes; prioritize indoor sites with consistent workforce traffic. Keep card readers active and monitor top SKUs for re‑stocking cadence.',
    extraFaqs: [
      {
        q: 'Is there sales tax in Billings?',
        a: 'Montana does not have a general statewide sales tax. Confirm if any local option taxes apply to your product category or location.'
      },
      {
        q: 'What locations work best to start?',
        a: 'Begin with healthcare and logistics/industrial sites, then expand to offices, hotels, and campus-adjacent buildings. Validate volume and optimize product mix.'
      }
    ]
  }
  ,
  'fairbanks-alaska': {
    permitNotes:
      'Alaska requires state business registration. Fairbanks has no broad sales tax; confirm any local option or site policies and follow borough health guidance for food vending.',
    demandDrivers: [
      'University of Alaska Fairbanks and adjacent housing',
      'Healthcare facilities and clinics',
      'Logistics and industrial sites along Richardson Hwy',
      'Tourism and seasonal travel demand'
    ],
    neighborhoods: ['UAF area', 'Downtown', 'Industrial corridors'],
    seasonalNote:
      'Winters impact routes—prioritize indoor sites, ensure card readers work reliably in cold, and stock proven best‑sellers.',
    extraFaqs: [
      { q: 'Any winter prep tips?', a: 'Plan routes for weather, keep machines indoors when possible, and monitor heaters/insulation for equipment where relevant.' }
    ]
  }
  ,
  'juneau-alaska': {
    permitNotes:
      'Register with the State of Alaska. Juneau (CBJ) may have local rules for food handling in public buildings—confirm with city/borough guidance.',
    demandDrivers: [
      'State government buildings and offices',
      'Tourism and cruise season sites',
      'Healthcare and education buildings'
    ],
    neighborhoods: ['Downtown/Capitol area', 'Mendenhall Valley'],
    seasonalNote:
      'Cruise/tourism season boosts traffic; adapt product mix to high footfall and quick purchases.',
    extraFaqs: [
      { q: 'Do cruise seasons matter?', a: 'Yes. Stock popular grab‑and‑go items and monitor restock frequency during peak months.' }
    ]
  }
  ,
  'fayetteville-arkansas': {
    permitNotes:
      'Obtain an Arkansas sales and use tax permit (DFA) and verify city/county health requirements for food vending in Fayetteville.',
    demandDrivers: [
      'University of Arkansas and student housing',
      'Healthcare campuses and medical offices',
      'Corporate offices and logistics along I‑49'
    ],
    neighborhoods: ['Downtown & Dickson St', 'U of A campus area', 'I‑49 corridor'],
    seasonalNote:
      'Align service cadence with academic calendar and football weekends.',
    extraFaqs: [
      { q: 'Where to start?', a: 'Begin with campus‑adjacent housing, clinics, and offices. Validate demand on game weekends and adjust inventory accordingly.' }
    ]
  }
  ,
  'missoula-montana': {
    permitNotes:
      'Montana has no general statewide sales tax; confirm any local option taxes. Follow Missoula County health rules for food/beverage vending where applicable.',
    demandDrivers: [
      'University of Montana and nearby housing',
      'Healthcare systems and outpatient clinics',
      'Downtown offices and recreation traffic'
    ],
    neighborhoods: ['Downtown', 'University District', 'Reserve St corridor'],
    seasonalNote:
      'Plan for winter routes and summer event spikes; keep card readers active and inventory nimble.',
    extraFaqs: [
      { q: 'Do I need special permits?', a: 'Confirm business licensing and any food handling rules with the county; verify site policies for machine placement.' }
    ]
  }
  ,
  'wasilla-alaska': {
    permitNotes:
      'Register your business with the State of Alaska. Confirm any Matanuska‑Susitna Borough health requirements for food vending and site policies for machine placement.',
    demandDrivers: [
      'Retail corridors and big-box stores',
      'Healthcare clinics and offices',
      'Schools, gyms, and municipal facilities'
    ],
    neighborhoods: ['Parks Hwy corridor', 'Downtown Wasilla'],
    seasonalNote:
      'Cold weather affects routes—keep indoor sites prioritized and stock best‑sellers with card readers enabled.',
    extraFaqs: [
      { q: 'Any product tips?', a: 'Carry dependable grab‑and‑go snacks and hot beverages where allowed; test card‑reader upsell prompts for higher AOV.' }
    ]
  }
  ,
  'sitka-alaska': {
    permitNotes:
      'State business registration is required. Check Sitka Borough and facility policies for food vending in public buildings and private sites.',
    demandDrivers: [
      'Healthcare and city offices',
      'Tourism/harbor activity (seasonal)',
      'Schools and recreation facilities'
    ],
    neighborhoods: ['Downtown & Harbor area'],
    seasonalNote:
      'Tourism season can lift demand—plan faster restocks near harbor/city venues.',
    extraFaqs: [
      { q: 'Do small footprints work here?', a: 'Yes—prioritize compact machines and proven SKUs where space is limited.' }
    ]
  }
  ,
  'fort-smith-arkansas': {
    permitNotes:
      'Obtain an Arkansas DFA sales and use tax permit and confirm Sebastian County/city health rules for food vending where applicable.',
    demandDrivers: [
      'Manufacturing and logistics along I‑40/I‑540',
      'Healthcare facilities and clinics',
      'Offices and retail corridors'
    ],
    neighborhoods: ['Downtown', 'Rogers Ave corridor', 'Industrial parks'],
    seasonalNote:
      'Balance cold drinks in summer with reliable snack assortment for shift workers.',
    extraFaqs: [
      { q: 'First placements to try?', a: 'Target logistics and manufacturing sites with steady shifts, then expand to clinics, offices, and gyms.' }
    ]
  }
  ,
  'bozeman-montana': {
    permitNotes:
      'No statewide sales tax in Montana. Confirm any local option taxes and Gallatin County health requirements for food vending.',
    demandDrivers: [
      'Montana State University and student housing',
      'Tech/startup offices and co‑working spaces',
      'Tourism and recreation traffic'
    ],
    neighborhoods: ['Downtown', 'MSU area', '19th Ave & Huffine corridors'],
    seasonalNote:
      'Winter service routing and summer tourism both affect demand—watch SKU velocity and restock more frequently in peak months.',
    extraFaqs: [
      { q: 'Campus considerations?', a: 'Coordinate with facility managers; smaller machines and cashless are preferred near study spaces and housing.' }
    ]
  }
  ,
  'kenai-alaska': {
    permitNotes:
      'Register with the State of Alaska and confirm Kenai Peninsula Borough health guidance for food vending. Check individual site policies for placement and power access.',
    demandDrivers: [
      'Healthcare clinics and offices',
      'Energy and industrial sites',
      'Retail corridors and municipal facilities'
    ],
    neighborhoods: ['Kenai Spur Hwy corridor', 'Downtown Kenai'],
    seasonalNote:
      'Tourism and fishing seasons can shift traffic patterns—plan inventory around peak months.',
    extraFaqs: [
      { q: 'What machines work best?', a: 'Reliable snack/soda combos with card readers. Consider compact machines where space is limited.' }
    ]
  }
  ,
  'ketchikan-alaska': {
    permitNotes:
      'State business registration is required. Confirm Ketchikan Gateway Borough and facility policies for vending in public buildings and near docks.',
    demandDrivers: [
      'Cruise/tourism traffic (seasonal)',
      'Healthcare and city offices',
      'Retail near the port and visitor areas'
    ],
    neighborhoods: ['Downtown & Cruise docks'],
    seasonalNote:
      'During cruise season, restock frequently with grab‑and‑go items; ensure cashless is enabled for speed.',
    extraFaqs: [
      { q: 'Placement near docks?', a: 'Coordinate with property management and follow any port authority rules.' }
    ]
  }
  ,
  'rogers-arkansas': {
    permitNotes:
      'Obtain an Arkansas DFA sales and use tax permit and confirm Benton County/city rules for food vending.',
    demandDrivers: [
      'Corporate offices and suppliers (NWA hub)',
      'Retail corridors and gyms',
      'Healthcare clinics and medical offices'
    ],
    neighborhoods: ['Pinnacle area', 'Downtown Rogers'],
    seasonalNote:
      'Office traffic patterns influence demand—monitor weekday sales vs. weekends.',
    extraFaqs: [
      { q: 'Best first sites?', a: 'Start with offices and clinics near the Pinnacle area; expand to gyms and retail backrooms with manager approval.' }
    ]
  }
  ,
  'helena-montana': {
    permitNotes:
      'No statewide sales tax in Montana. Confirm any local option taxes and Lewis & Clark County health rules for food vending.',
    demandDrivers: [
      'State government buildings',
      'Healthcare campuses and clinics',
      'Education and municipal facilities'
    ],
    neighborhoods: ['Downtown & Capitol area', 'Prospect Ave corridor'],
    seasonalNote:
      'Winter can impact service windows—prioritize indoor government and healthcare placements for steady volume.',
    extraFaqs: [
      { q: 'How to approach government buildings?', a: 'Contact facility management, follow procurement policies, and offer clear service-level terms.' }
    ]
  }
  ,
  'kodiak-alaska': {
    permitNotes:
      'Register with the State of Alaska. Confirm borough and facility policies for vending in public buildings; coordinate with port/harbor management as needed.',
    demandDrivers: [
      'Harbor/port activity and seafood industry',
      'Healthcare and municipal buildings',
      'Retail near the harbor and schools'
    ],
    neighborhoods: ['Harbor & Downtown'],
    seasonalNote:
      'Tourism and fishing seasons raise demand near the harbor—use cashless and restock popular items more frequently.',
    extraFaqs: [
      { q: 'Power and access considerations?', a: 'Verify indoor placement, power outlets, and permissions with facility management ahead of install.' }
    ]
  }
  ,
  'palmer-alaska': {
    permitNotes:
      'State business registration is required. Confirm Matanuska‑Susitna Borough health guidance and site policies for vending.',
    demandDrivers: [
      'Healthcare clinics, schools, and municipal buildings',
      'Retail and local offices'
    ],
    neighborhoods: ['Downtown Palmer'],
    seasonalNote:
      'Weather affects routes—prioritize indoor sites and proven snack/beverage SKUs.',
    extraFaqs: [
      { q: 'Which payment setup?', a: 'Cashless readers recommended. Telemetry simplifies inventory and reduces service trips.' }
    ]
  }
  ,
  'bentonville-arkansas': {
    permitNotes:
      'Obtain an Arkansas DFA sales and use tax permit and confirm Benton County and city requirements for food vending in private/public facilities.',
    demandDrivers: [
      'Corporate HQs and supplier offices',
      'Gyms and retail back‑of‑house areas',
      'Clinics and outpatient facilities'
    ],
    neighborhoods: ['Downtown Bentonville', '8th Street Market area'],
    seasonalNote:
      'Weekday corporate traffic drives demand—monitor SKUs favored by office staff and cyclists on trail corridors.',
    extraFaqs: [
      { q: 'Office placements tips?', a: 'Lead with reliability and cashless. Offer a short list of best‑sellers and adjust based on telemetry.' }
    ]
  }
  ,
  'great-falls-montana': {
    permitNotes:
      'No statewide sales tax in Montana. Confirm any local option taxes and Cascade County health guidance for food vending.',
    demandDrivers: [
      'Healthcare campuses and clinics',
      'Air Force base vicinity (access rules apply)',
      'Industrial and logistics sites along I‑15'
    ],
    neighborhoods: ['Downtown', '10th Ave S corridor'],
    seasonalNote:
      'Cold weather affects machines and routes—focus on indoor, high‑footfall sites with reliable access.',
    extraFaqs: [
      { q: 'First placements?', a: 'Start with clinics and logistics sites; expand to offices and gyms after validating weekly volume.' }
    ]
  }
  ,
  'homer-alaska': {
    permitNotes:
      'Register with the State of Alaska. Check Kenai Peninsula Borough guidance and property policies for vending at marinas, clinics, and municipal buildings.',
    demandDrivers: [
      'Harbor/marina and tourism',
      'Clinics and municipal facilities',
      'Retail corridors'
    ],
    neighborhoods: ['Homer Spit & Harbor area', 'Downtown Homer'],
    seasonalNote:
      'Tourism season lifts demand along the Spit—restock grab‑and‑go items and ensure cashless acceptance.',
    extraFaqs: [
      { q: 'Outdoor placements?', a: 'Prioritize indoor alcoves or protected entries; confirm power and permissions with property owners.' }
    ]
  }
  ,
  'soldotna-alaska': {
    permitNotes:
      'Alaska business registration required. Confirm borough and property rules for food/beverage vending in indoor public spaces.',
    demandDrivers: [
      'Clinics and medical offices',
      'Retail and gyms',
      'Municipal buildings'
    ],
    neighborhoods: ['Kenai Spur Hwy corridor'],
    seasonalNote:
      'Fishing/tourism can add seasonal volume—monitor SKU velocity and adjust restocks.',
    extraFaqs: [
      { q: 'What to stock first?', a: 'Start with top‑seller snacks, bottled drinks, and add local favorites based on feedback.' }
    ]
  }
  ,
  'conway-arkansas': {
    permitNotes:
      'Apply for an Arkansas DFA sales/use tax permit and confirm city/county rules for food vending where applicable.',
    demandDrivers: [
      'Universities (UCA, Hendrix)',
      'Healthcare campuses',
      'Corporate offices and distribution'
    ],
    neighborhoods: ['Downtown Conway', 'Dave Ward Dr & I‑40 corridors'],
    seasonalNote:
      'Align cadence with academic calendar; weekdays drive office demand.',
    extraFaqs: [
      { q: 'Campus placements?', a: 'Coordinate with campus facilities; compact, cashless machines perform best near study areas.' }
    ]
  }
  ,
  'butte-montana': {
    permitNotes:
      'Montana has no general statewide sales tax; verify local option taxes and Silver Bow County health rules for food vending.',
    demandDrivers: [
      'Healthcare facilities and clinics',
      'Industrial/logistics sites',
      'Education and municipal buildings'
    ],
    neighborhoods: ['Uptown Butte', 'Harrison Ave corridor'],
    seasonalNote:
      'Plan for winter service routes; prioritize indoor sites with steady staff traffic.',
    extraFaqs: [
      { q: 'Where to start?', a: 'Begin with clinics and logistics; expand to offices/gyms after validating weekly volume.' }
    ]
  }
  ,
  'springdale-arkansas': {
    permitNotes:
      'Obtain an Arkansas DFA sales/use tax permit. Confirm city/county rules for food vending in private/public facilities.',
    demandDrivers: [
      'Manufacturing and supplier facilities (NWA)',
      'Healthcare clinics',
      'Retail corridors and gyms'
    ],
    neighborhoods: ['Downtown Springdale', '71B & Don Tyson Pkwy corridors'],
    seasonalNote:
      'Shift‑based sites drive evening demand—monitor SKUs for late hours.',
    extraFaqs: [
      { q: 'Best starting placements?', a: 'Target manufacturing/logistics sites first, then expand to clinics and gyms.' }
    ]
  }
  ,
  'jonesboro-arkansas': {
    permitNotes:
      'Register for Arkansas sales/use tax (DFA) and confirm any Craighead County health rules for vending machines handling food/beverage.',
    demandDrivers: [
      'Arkansas State University and housing',
      'Healthcare campuses and clinics',
      'Industrial and distribution sites'
    ],
    neighborhoods: ['Downtown Jonesboro', 'Red Wolf Blvd corridor'],
    seasonalNote:
      'Academic calendar and hospital traffic shape demand—ensure cashless across machines.',
    extraFaqs: [
      { q: 'Campus areas?', a: 'Coordinate with facilities; compact, cashless machines perform best near study spaces.' }
    ]
  }
  ,
  'north-little-rock-arkansas': {
    permitNotes:
      'Apply for an Arkansas DFA sales/use tax permit; confirm Pulaski County and city policies for food vending where applicable.',
    demandDrivers: [
      'Logistics and industrial along I‑40',
      'Healthcare facilities and clinics',
      'Downtown/riverfront venues'
    ],
    neighborhoods: ['Argenta (riverfront)', 'I‑40 industrial corridors'],
    seasonalNote:
      'Event days near the riverfront increase volume—plan restocks after large events.',
    extraFaqs: [
      { q: 'Riverfront placements?', a: 'Coordinate with venue management; prioritize cashless and quick‑sell items.' }
    ]
  }
  ,
  'pine-bluff-arkansas': {
    permitNotes:
      'Arkansas DFA sales/use tax permit required. Verify Jefferson County health guidance for vending machines selling food/beverage.',
    demandDrivers: [
      'Healthcare campuses',
      'Manufacturing/logistics sites',
      'Municipal buildings and schools'
    ],
    neighborhoods: ['Downtown', 'US‑65 corridor'],
    seasonalNote:
      'Focus on steady workforce sites; build routes that minimize travel time.',
    extraFaqs: [
      { q: 'What inventory mix works?', a: 'Start with top‑selling snacks and beverages, then add local favorites based on sales data.' }
    ]
  }
  ,
  'birmingham-alabama': {
    permitNotes:
      'Alabama requires a state sales/use tax account. Register your business, collect/remit tax where applicable, and confirm county/city rules for food/beverage vending.',
    demandDrivers: [
      'UAB Medical District and hospital campuses',
      'Downtown offices and multi-tenant buildings',
      'Industrial/logistics along I‑20/59 and Oxmoor',
      'Airport and hotel corridors'
    ],
    neighborhoods: ['Downtown & Medical District', 'Southside', 'Oxmoor/Valley', 'US‑280 corridor'],
    seasonalNote:
      'Weekday daytime peaks around medical/office hubs; keep cashless on and monitor top SKUs for frequent restocks.',
    extraFaqs: [
      { q: 'Best early placements?', a: 'Start with hospital admin areas and large offices; expand to logistics and hotels after validating demand.' }
    ]
  }
  ,
  'huntsville-alabama': {
    permitNotes:
      'Register for Alabama sales/use tax and verify Madison County/city rules. Follow site policies for machines on secured campuses.',
    demandDrivers: [
      'Cummings Research Park tech corridor',
      'Redstone Arsenal vicinity (access rules apply)',
      'UAH and healthcare systems',
      'Growing office and industrial parks'
    ],
    neighborhoods: ['Research Park', 'Downtown Huntsville', 'University Dr corridor'],
    seasonalNote:
      'Tech and defense shifts can drive evening demand—stock quick, high-margin items and keep readers online.',
    extraFaqs: [
      { q: 'Can I place near Redstone?', a: 'Coordinate with base facilities; approvals and background checks may be required for on-base placements.' }
    ]
  }
  ,
  'mobile-alabama': {
    permitNotes:
      'Obtain Alabama sales/use tax registration; confirm Mobile County/city rules and port/terminal policies for placements near the waterfront.',
    demandDrivers: [
      'Port of Mobile and shipbuilding/logistics',
      'Healthcare campuses and clinics',
      'Downtown and Airport Blvd office/retail'
    ],
    neighborhoods: ['Downtown & Port area', 'Airport Blvd corridor'],
    seasonalNote:
      'Humidity and heat increase cold drink velocity—plan more frequent beverage restocks in summer.',
    extraFaqs: [
      { q: 'Where to start?', a: 'Target port-adjacent offices and clinics first; expand to hotels and airport-area offices.' }
    ]
  }
  ,
  'montgomery-alabama': {
    permitNotes:
      'Register for Alabama sales/use tax and confirm Montgomery County/city rules. Follow procurement policies for government buildings.',
    demandDrivers: [
      'State government offices and agencies',
      'Maxwell–Gunter AFB vicinity (access rules apply)',
      'Healthcare campuses and downtown offices'
    ],
    neighborhoods: ['Downtown & Capitol area', 'Eastchase corridor'],
    seasonalNote:
      'Government schedules concentrate weekday demand—stock quick-sell items and ensure uptime during business hours.',
    extraFaqs: [
      { q: 'Government placements?', a: 'Contact facility management and follow vendor onboarding; present SLAs and insurance.' }
    ]
  }
  ,
  'tuscaloosa-alabama': {
    permitNotes:
      'Alabama sales/use tax account required; verify Tuscaloosa County/city rules and campus facility policies.',
    demandDrivers: [
      'University of Alabama and student housing',
      'Healthcare facilities and clinics',
      'Downtown offices and gyms'
    ],
    neighborhoods: ['Downtown', 'University Blvd & Campus area'],
    seasonalNote:
      'Football weekends and semester timing affect volume—adjust service cadence and stock grab‑and‑go favorites.',
    extraFaqs: [
      { q: 'Game day strategy?', a: 'Boost cold drinks and quick snacks near high-traffic corridors; restock ahead of events.' }
    ]
  }
  ,
  'auburn-alabama': {
    permitNotes:
      'Register for Alabama sales/use tax and verify city/county rules; coordinate with campus facilities for placements near AU.',
    demandDrivers: [
      'Auburn University and campus housing',
      'Clinics and medical offices',
      'Downtown offices and gyms'
    ],
    neighborhoods: ['Downtown Auburn', 'College St & Magnolia Ave corridors'],
    seasonalNote:
      'Align with academic calendar; smaller, cashless machines perform well near study hubs.',
    extraFaqs: [
      { q: 'First placements?', a: 'Campus‑adjacent housing, clinics, and large offices. Validate sales, then expand.' }
    ]
  }
  ,
  'dothan-alabama': {
    permitNotes:
      'Alabama sales/use tax registration required; confirm Houston County/city guidance for food vending machines.',
    demandDrivers: [
      'Healthcare hubs and clinics',
      'Distribution/agriculture processing',
      'Retail and municipal facilities'
    ],
    neighborhoods: ['Ross Clark Circle corridors', 'Downtown Dothan'],
    seasonalNote:
      'Focus on steady workforce sites; track SKU velocity to optimize restocks.',
    extraFaqs: [
      { q: 'What to stock?', a: 'Start with top‑selling snacks and bottled drinks; add local favorites after two service cycles.' }
    ]
  }
  ,
  'hartford-connecticut': {
    permitNotes:
      'Register for Connecticut sales/use tax (DRS) and confirm City of Hartford requirements for vending machines in public/private facilities.',
    demandDrivers: [
      'State government and downtown offices',
      'Healthcare campuses and clinics',
      'Education and municipal facilities'
    ],
    neighborhoods: ['Downtown & Capitol area', 'Asylum/Albany corridors'],
    seasonalNote:
      'Weekday daytime peaks near government/office hubs—ensure cashless and quick restock cadence.',
    extraFaqs: [
      { q: 'Government placements?', a: 'Coordinate with facility management and procurement; present SLAs and insurance.' }
    ]
  }
  ,
  'stamford-connecticut': {
    permitNotes:
      'CT DRS sales/use tax registration required; confirm City of Stamford policies and building management rules for machine placement.',
    demandDrivers: [
      'Corporate HQs and commuter offices',
      'Downtown residential towers and gyms',
      'Clinics and outpatient facilities'
    ],
    neighborhoods: ['Downtown & Harbor Point', 'High Ridge & Summer St corridors'],
    seasonalNote:
      'Office commuter flow drives weekday demand—stock quick snacks and cold drinks; keep readers online.',
    extraFaqs: [
      { q: 'Office placements tips?', a: 'Lead with reliability, card readers, and proven SKUs. Adjust based on telemetry.' }
    ]
  }
  ,
  'waterbury-connecticut': {
    permitNotes:
      'Register with CT DRS for sales/use tax. Verify city and property rules for food/beverage vending in offices, clinics, and schools.',
    demandDrivers: [
      'Healthcare campuses and clinics',
      'Education and municipal buildings',
      'Industrial/logistics sites'
    ],
    neighborhoods: ['Downtown Waterbury', 'Brass City corridors'],
    seasonalNote:
      'Focus on steady workforce/clinic sites; monitor SKU velocity for weekly routes.',
    extraFaqs: [
      { q: 'What to stock first?', a: 'Start with best‑seller snacks and bottled drinks; add local favorites after two cycles.' }
    ]
  }
  ,
  'norwalk-connecticut': {
    permitNotes:
      'CT DRS sales/use tax registration required. Confirm City of Norwalk policies and building management rules for placements.',
    demandDrivers: [
      'Commuter offices and media/tech firms',
      'Residential towers and gyms',
      'Clinics and outpatient centers'
    ],
    neighborhoods: ['SoNo (South Norwalk)', 'Merritt 7 & Main Ave corridors'],
    seasonalNote:
      'Weekday office peaks; evenings/weekends in residential/fitness sites—tune inventory accordingly.',
    extraFaqs: [
      { q: 'SoNo placements?', a: 'Coordinate with property managers; compact, cashless machines fit best in lobby spaces.' }
    ]
  }
  ,
  'bridgeport-connecticut': {
    permitNotes:
      'Register with CT DRS for sales/use tax. Confirm Bridgeport city policies and building rules for vending placements in offices, schools, and clinics.',
    demandDrivers: [
      'Healthcare campuses and clinics',
      'Downtown offices and education buildings',
      'Industrial/logistics sites'
    ],
    neighborhoods: ['Downtown Bridgeport', 'Boston Ave & Main St corridors'],
    seasonalNote:
      'Weekday peaks in offices and clinics—ensure cashless, track SKU velocity, and restock weekly.',
    extraFaqs: [
      { q: 'First placements?', a: 'Start with clinics and larger offices; expand to schools and logistics after validating demand.' }
    ]
  }
  ,
  'new-haven-connecticut': {
    permitNotes:
      'CT DRS sales/use tax registration required. Follow city/property rules; Yale facilities and hospitals have specific placement processes.',
    demandDrivers: [
      'Yale University and Yale New Haven Health',
      'Downtown offices and residential towers',
      'Research and medical office corridors'
    ],
    neighborhoods: ['Downtown & Yale area', 'Chapel St & Whitney Ave corridors'],
    seasonalNote:
      'Academic calendar influences flow—smaller, cashless machines perform well near study and admin areas.',
    extraFaqs: [
      { q: 'Campus placements?', a: 'Coordinate with campus facilities; present reliability, card readers, and a tight SKU list. Adjust with telemetry.' }
    ]
  }
  ,
  'elizabeth-new-jersey': {
    permitNotes:
      'Register with NJ Division of Taxation for sales/use tax. Confirm City of Elizabeth and property management rules for vending placements, especially near port facilities.',
    demandDrivers: [
      'Port Newark–Elizabeth logistics and warehouses',
      'Newark Airport vicinity workforce',
      'Healthcare clinics and municipal buildings'
    ],
    neighborhoods: ['Elizabethport', 'Downtown Elizabeth', 'Airport/Port corridors'],
    seasonalNote:
      'Shift-based logistics sites drive evening demand—stock quick, high-velocity items and ensure cashless uptime.',
    extraFaqs: [
      { q: 'Best first placements?', a: 'Target warehouses and port-adjacent offices; expand to clinics and municipal facilities after validating demand.' }
    ]
  }
  ,
  'edison-new-jersey': {
    permitNotes:
      'Obtain NJ sales/use tax registration. Confirm Middlesex County/City of Edison rules and individual building policies for vending machines.',
    demandDrivers: [
      'Raritan Center business park and industrial sites',
      'Healthcare campuses and outpatient clinics',
      'Rutgers-adjacent commuter flow (regional)'
    ],
    neighborhoods: ['Raritan Center', 'Oak Tree Rd & US‑1 corridors'],
    seasonalNote:
      'Weekday office/industrial peaks—plan weekly restocks and keep card readers active.',
    extraFaqs: [
      { q: 'What to stock first?', a: 'Start with top-seller snacks and bottled drinks; add hot items only where permitted and in demand.' }
    ]
  }
  ,
  'jersey-city-new-jersey': {
    permitNotes:
      'NJ sales/use tax registration required. Follow City of Jersey City guidelines and building/HOA rules for lobby and office placements.',
    demandDrivers: [
      'Hudson waterfront offices (Exchange Place/Harborside)',
      'PATH commuter hubs and residential towers',
      'Healthcare and university facilities'
    ],
    neighborhoods: ['Exchange Place/Harborside', 'Journal Square', 'Grove St/Powerhouse Arts'],
    seasonalNote:
      'Commuter peaks on weekdays—stock quick grab‑and‑go and cold drinks; evenings/weekends favor residential/fitness sites.',
    extraFaqs: [
      { q: 'Lobby placements?', a: 'Coordinate with building management; compact, cashless machines fit best and require proof of insurance.' }
    ]
  }
  ,
  'newark-new-jersey': {
    permitNotes:
      'Register with NJ Division of Taxation. Confirm City of Newark rules and property approvals, especially for hospitals, university, and transit-adjacent sites.',
    demandDrivers: [
      'University Hospital and healthcare corridors',
      'NJIT/Rutgers Newark campuses',
      'Penn Station/airport-area offices and hotels'
    ],
    neighborhoods: ['Downtown & Penn Station', 'University Heights', 'Ironbound'],
    seasonalNote:
      'Transit hubs and campuses create weekday peaks; tailor restocks to class schedules and commuter flow.',
    extraFaqs: [
      { q: 'Campus/health placements?', a: 'Engage facilities early; present service SLAs, cashless capability, and a concise SKU plan.' }
    ]
  }
  ,
  'paterson-new-jersey': {
    permitNotes:
      'NJ sales/use tax registration required. Confirm City of Paterson and property rules for machines in clinics, schools, and industrial sites.',
    demandDrivers: [
      'Healthcare and education buildings',
      'Industrial and distribution corridors',
      'Downtown offices and municipal facilities'
    ],
    neighborhoods: ['Downtown & Market St', 'Madison Ave industrial corridors'],
    seasonalNote:
      'Focus on steady workforce sites; track SKU velocity to optimize weekly service routes.',
    extraFaqs: [
      { q: 'Where to start?', a: 'Clinics and industrial sites first; expand to schools and offices after measuring weekly sales.' }
    ]
  }
  ,
  'woodbridge-new-jersey': {
    permitNotes:
      'Register with NJ Division of Taxation. Follow Woodbridge Township policies and building rules, especially near Metropark offices.',
    demandDrivers: [
      'Metropark office complexes and commuters',
      'Healthcare clinics and fitness centers',
      'Retail back-of-house and municipal buildings'
    ],
    neighborhoods: ['Metropark area', 'Route 1 & 9 corridors'],
    seasonalNote:
      'Weekday daytime peaks from commuters; evenings in gyms/residential—adjust inventory cadence accordingly.',
    extraFaqs: [
      { q: 'Commuter hub tips?', a: 'Prioritize fast-selling snacks and cold beverages; ensure cashless for speed and uptime.' }
    ]
  }
  ,
  'boston-massachusetts': {
    permitNotes:
      'Register with MA DOR for sales/use tax. Follow City of Boston and building/HOA rules for vending machines in offices, campuses, and residential lobbies.',
    demandDrivers: [
      'Hospital/biotech clusters (Longwood, Seaport, Kendall proximity)',
      'Downtown offices and universities',
      'Residential towers and fitness centers'
    ],
    neighborhoods: ['Downtown & Financial District', 'Seaport', 'Longwood', 'Back Bay'],
    seasonalNote:
      'Weekday office peaks and semester cycles—keep cashless active and monitor SKU velocity for frequent restocks.',
    extraFaqs: [
      { q: 'Campus/health placements?', a: 'Engage facilities early; present SLAs, cashless capability, and a concise SKU plan.' }
    ]
  }
  ,
  'worcester-massachusetts': {
    permitNotes:
      'MA sales/use tax registration required. Confirm City of Worcester and property rules for vending in hospitals, schools, and office buildings.',
    demandDrivers: [
      'Healthcare campuses and colleges',
      'Downtown offices and municipal buildings',
      'Industrial corridors'
    ],
    neighborhoods: ['Downtown', 'Shrewsbury St & Belmont corridors'],
    seasonalNote:
      'Align service with semester and clinic schedules; focus on reliable indoor placements.',
    extraFaqs: [
      { q: 'What to stock first?', a: 'Start with top‑selling snacks and bottled drinks; adjust based on telemetry after two cycles.' }
    ]
  }
  ,
  'springfield-massachusetts': {
    permitNotes:
      'Register with MA DOR for sales/use tax. Verify city and property policies for machines in clinics, schools, and offices.',
    demandDrivers: [
      'Healthcare and education hubs',
      'Downtown offices and municipal buildings',
      'Industrial/logistics along I‑91'
    ],
    neighborhoods: ['Downtown', 'Baystate/Medical corridors'],
    seasonalNote:
      'Focus on steady workforce sites; ensure card readers and consistent restock cadence.',
    extraFaqs: [
      { q: 'First placements?', a: 'Begin with clinics and offices; expand to schools and logistics after measuring demand.' }
    ]
  }
  ,
  'cambridge-massachusetts': {
    permitNotes:
      'MA sales/use tax registration required. Follow City of Cambridge and building/HOA rules; university and lab buildings have specific processes.',
    demandDrivers: [
      'Harvard/MIT campus and lab buildings',
      'Kendall Square tech/biotech offices',
      'Residential towers and fitness centers'
    ],
    neighborhoods: ['Kendall Square', 'Harvard Sq', 'Central Sq'],
    seasonalNote:
      'Semester and lab schedules shape demand—small, cashless machines perform best in lobbies and study areas.',
    extraFaqs: [
      { q: 'Lab/campus approvals?', a: 'Contact facilities; present SLAs, safety/cleaning protocols, and a tight SKU set.' }
    ]
  }
  ,
  'fall-river-massachusetts': {
    permitNotes:
      'Register with MA DOR for sales/use tax. Confirm City of Fall River and property rules for vending machines in clinics, schools, and offices.',
    demandDrivers: [
      'Healthcare and municipal buildings',
      'Industrial and logistics corridors',
      'Downtown offices and gyms'
    ],
    neighborhoods: ['Downtown', 'Rodman St & President Ave corridors'],
    seasonalNote:
      'Prioritize reliable indoor sites; align restocks to clinic and shift schedules.',
    extraFaqs: [
      { q: 'Inventory tips?', a: 'Lead with best‑sellers; add local favorites after reviewing two service cycles of telemetry.' }
    ]
  }
  ,
  'new-york-new-york': {
    permitNotes:
      'Register with NYS Department of Taxation and Finance for sales tax. Follow NYC Department of Consumer and Worker Protection and building/HOA rules for vending in offices and residential lobbies.',
    demandDrivers: [
      'Midtown/Downtown office towers and co‑working',
      'Hospital systems and university buildings',
      'Residential towers, gyms, and transit‑adjacent sites'
    ],
    neighborhoods: ['Midtown', 'Downtown/FiDi', 'Hudson Yards', 'Upper East/West'],
    seasonalNote:
      'Office patterns drive weekday peaks; evenings/weekends see residential/fitness demand—keep cashless uptime high.',
    extraFaqs: [
      { q: 'Lobby placements?', a: 'Coordinate with building management; compact, cashless machines and proof of insurance are typically required.' }
    ]
  }
  ,
  'buffalo-new-york': {
    permitNotes:
      'NYS sales tax registration required. Confirm City of Buffalo/property policies for vending in hospitals, schools, and office buildings.',
    demandDrivers: [
      'Healthcare campuses and university facilities',
      'Downtown offices and municipal buildings',
      'Industrial/logistics along I‑190'
    ],
    neighborhoods: ['Downtown', 'Medical Campus', 'Elmwood/Delaware corridors'],
    seasonalNote:
      'Winter affects routes—prioritize indoor placements and monitor beverage/snack mix for colder months.',
    extraFaqs: [
      { q: 'First placements?', a: 'Start with clinics and offices; expand to industrial sites and gyms after validating demand.' }
    ]
  }
  ,
  'rochester-new-york': {
    permitNotes:
      'Register for NYS sales tax. Follow city/property rules for vending in medical, university, and office buildings.',
    demandDrivers: [
      'University of Rochester/RIT and medical centers',
      'Downtown offices and municipal buildings',
      'Industrial corridors'
    ],
    neighborhoods: ['Downtown', 'UR/Strong area', 'East Ave & Jefferson corridors'],
    seasonalNote:
      'Semester cycles and winter weather drive service cadence—keep cashless and telemetry online to optimize routes.',
    extraFaqs: [
      { q: 'Campus considerations?', a: 'Coordinate with facilities; present SLAs and a focused SKU plan; adjust via telemetry.' }
    ]
  }
  ,
  'albany-new-york': {
    permitNotes:
      'NYS sales tax registration required. Confirm State/City building policies for vending in government offices, hospitals, and campuses.',
    demandDrivers: [
      'State government complexes',
      'Healthcare campuses and colleges',
      'Downtown offices'
    ],
    neighborhoods: ['Empire State Plaza', 'Downtown Albany', 'University corridors'],
    seasonalNote:
      'Weekday peaks near government/office hubs—maintain quick restock cycles and cashless acceptance.',
    extraFaqs: [
      { q: 'Government placements?', a: 'Engage facility management and procurement; provide SLAs and insurance certificates.' }
    ]
  }
  ,
  'syracuse-new-york': {
    permitNotes:
      'Register with NYS for sales tax. Follow city/property rules for medical, university, and office placements.',
    demandDrivers: [
      'Syracuse University and hospital systems',
      'Downtown offices and municipal buildings',
      'Industrial/logistics near I‑81/I‑90'
    ],
    neighborhoods: ['University Hill', 'Downtown', 'Erie Blvd corridors'],
    seasonalNote:
      'Winter service windows favor reliable indoor placements; align inventory with campus and clinic schedules.',
    extraFaqs: [
      { q: 'Where to start?', a: 'Begin with hospitals and university‑adjacent sites; expand to offices and gyms after two service cycles.' }
    ]
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const citySlug = params.slug.replace(/-/g, ' ')
  const titleCity = citySlug.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
  return {
    title: `How to Start a Vending Machine Business in ${titleCity} (Step-by-Step Guide)`,
    description: `Learn how to start a vending machine business in ${titleCity}: licensing, permits, startup costs, best locations, contracts, outreach scripts, and FAQs.`,
    keywords: [`vending machine business ${titleCity}`, `how to start vending machines ${titleCity}`, `${titleCity} vending permits`, `${titleCity} vending locations`],
    alternates: { canonical: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${params.slug}` },
    openGraph: {
      title: `How to Start a Vending Machine Business in ${titleCity}`,
      description: `Permits, costs, locations, and contracts to launch in ${titleCity}.`,
      url: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${params.slug}`,
      siteName: 'The Vending Locator',
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: `How to Start a Vending Machine Business in ${titleCity}`,
      description: `Step-by-step guide for ${titleCity}: legal, locations, costs, and contracts.`
    },
    robots: { index: true, follow: true }
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GuideCityPage({ params }: Params) {
  const { slug } = params
  if (!slug) return notFound()

  const citySlug = slug
  const cityTitle = citySlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')

  // Related guides (same state)
  const stateEntry = states.find(st => st.cities.some(c => c.slug === citySlug))
  const stateName = stateEntry ? stateEntry.name : 'Your State'
  const relatedCities = stateEntry
    ? stateEntry.cities.filter(c => c.slug !== citySlug).slice(0, 8)
    : []
  const cityEntry = stateEntry ? stateEntry.cities.find(c => c.slug === citySlug) : undefined
  const cityDisplayName = cityEntry
    ? cityEntry.name
    : (() => {
        const parts = cityTitle.split(' ')
        if (parts.length > 1 && parts[parts.length - 1].toLowerCase() === stateName.toLowerCase()) {
          return parts.slice(0, -1).join(' ')
        }
        return cityTitle
      })()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <nav className="text-sm text-stone mb-4 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span>/</span>
              <Link href="/guide" className="hover:text-navy">Guide</Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityTitle}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-charcoal leading-tight">
              How to Start a Vending Machine Business in <span className="text-navy">{cityDisplayName}, {stateName}</span>
            </h1>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              Permits, startup costs, best locations, contracts and outreach scripts tailored to {cityDisplayName}, {stateName}. Use this playbook to launch and scale your vending business with confidence.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">Get the Full Guide ($79)</a>
              <Link href="#steps" className="inline-flex items-center justify-center gap-2 text-navy hover:text-navy-light font-semibold w-full sm:w-auto">Jump to Steps</Link>
            </div>
            {/* Anchor nav */}
            <div className="mt-6 flex flex-wrap gap-2 text-sm justify-center">
              <a href="#steps" className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">Steps</a>
              <a href="#costs" className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">Costs & ROI</a>
              <a href="#contracts" className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">Contracts & Scripts</a>
              <a href="#faq" className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">FAQ</a>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sticky CTA Sidebar */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Steps */}
            <div id="steps">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-6">Steps to Launch in {cityTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">1) Business Setup & Licensing</h3>
                  <p className="text-stone">Register your business (LLC recommended), obtain an EIN, and confirm general business licensing requirements for {cityTitle}. Many areas require a sales tax permit to collect and remit tax on product sales.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">2) Health & Vending Permits</h3>
                  <p className="text-stone">Contact your county/city health department to determine food and beverage vending requirements. If selling refrigerated or perishable items, additional health compliance may apply.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">3) Choose The Right Machines</h3>
                  <p className="text-stone">Start with reliable snack/soda machines; consider combo machines for smaller sites. Verify ADA compliance, card readers, and remote telemetry for inventory and cashless payments.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">4) Find High-Traffic Locations</h3>
                  <p className="text-stone">Prioritize office buildings, healthcare, education, logistics/warehouses, municipal facilities, and recreation venues in {cityTitle}. Align product mix with onsite demographics and hours.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">5) Pitch & Negotiate Placement</h3>
                  <p className="text-stone">Lead with convenience and service quality. Emphasize value adds like employee discounts and fast service SLAs. Use clear contracts to formalize terms.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">6) Install, Service, Optimize</h3>
                  <p className="text-stone">Schedule installs, verify power/space, and set a weekly/biweekly service cadence. Track product performance and expand to additional machines as sales stabilize.</p>
                </div>
              </div>
            </div>

            {/* Costs & ROI */}
            <div id="costs" className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-4">Costs & ROI</h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Typical Startup Costs</h3>
                  <ul className="list-disc pl-5 text-stone space-y-2">
                    <li>Refurbished snack/soda machine: $1,500 - $3,500 each</li>
                    <li>Card reader & telemetry: $200 - $400</li>
                    <li>Initial inventory: $300 - $800</li>
                    <li>Transport/installation: $150 - $500</li>
                    <li>Permits/fees (varies by city/county)</li>
                  </ul>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Expected ROI</h3>
                  <p className="text-stone">Healthy locations often generate $250-$800+ per machine per month. Well-placed routes in {cityTitle} can reach payback within 10-18 months depending on traffic, product mix, and service quality.</p>
                </div>
              </div>
              {cityInfo[citySlug]?.permitNotes && (
                <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Local resources & compliance</h3>
                  <p className="text-stone">{cityInfo[citySlug]?.permitNotes}</p>
                </div>
              )}
            </div>

            {/* Contracts & Scripts */}
            <div id="contracts">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-4">Contracts & Scripts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Contracts Pack</h3>
                  <p className="text-stone">Placement agreement, service-level terms, and onboarding checklist tailored for quick, professional sign-off in {cityTitle}.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Outreach Scripts</h3>
                  <p className="text-stone">Cold call, email, and in-person scripts with follow-up sequences designed for facility managers, HR, and operations leads.</p>
                </div>
              </div>
            </div>

            {/* Local demand drivers */}
            {(cityInfo[citySlug]?.demandDrivers?.length || cityInfo[citySlug]?.neighborhoods?.length) && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">Where to focus in {cityDisplayName}</h2>
                {cityInfo[citySlug]?.demandDrivers?.length && (
                  <>
                    <div className="font-semibold text-charcoal mb-2">Demand drivers</div>
                    <ul className="list-disc pl-5 text-stone space-y-2">
                      {cityInfo[citySlug]!.demandDrivers!.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {cityInfo[citySlug]?.neighborhoods?.length && (
                  <div className="mt-4">
                    <div className="font-semibold text-charcoal mb-2">Neighborhoods & corridors</div>
                    <div className="flex flex-wrap gap-2">
                      {cityInfo[citySlug]!.neighborhoods!.map((n, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate text-sm">{n}</span>
                      ))}
                    </div>
                  </div>
                )}
                {cityInfo[citySlug]?.seasonalNote && (
                  <p className="mt-4 text-stone">{cityInfo[citySlug]?.seasonalNote}</p>
                )}
              </div>
            )}

            {/* FAQ */}
            <div id="faq" className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">FAQ: {cityTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Do I need a permit to operate?</h3>
                  <p className="text-stone">Most jurisdictions require a general business license and sales tax permit. Food vending may need additional health approvals.</p>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Best places to start?</h3>
                  <p className="text-stone">Begin with offices (50+ staff), medical clinics, schools, gyms, logistics facilities, and municipal buildings in {cityTitle}.</p>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">How many machines first?</h3>
                  <p className="text-stone">Start with 1-2 machines, validate sales, then add more on proven sites to manage cashflow and service time.</p>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Card readers needed?</h3>
                  <p className="text-stone">Yes—cashless increases conversion and enables telemetry to track inventory and performance.</p>
                </div>
              </div>
              {cityInfo[citySlug]?.extraFaqs && (
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {cityInfo[citySlug]!.extraFaqs!.map((f, idx) => (
                    <div key={idx} className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-charcoal mb-2">{f.q}</h3>
                      <p className="text-stone">{f.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sticky CTA sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-playfair font-bold text-charcoal">Get the Full Guide</h3>
                <p className="text-stone mt-2">Contracts, scripts, negotiation frameworks and checklists to launch in {cityTitle}.</p>
                <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold w-full">Purchase ($79)</a>
                <ul className="mt-4 text-sm text-stone list-disc pl-5 space-y-1">
                  <li>Legal-ready contract templates</li>
                  <li>Cold call, email and in-person scripts</li>
                  <li>Pitch deck outline and objection handling</li>
                  <li>Install & service checklists</li>
                </ul>
              </div>
              <div className="bg-cream/60 border border-gray-200 rounded-xl p-4 text-sm text-chocolate">
                <strong className="text-charcoal">Tip:</strong> Use card readers and telemetry from day one to increase conversion and simplify inventory.
              </div>
            </div>
          </aside>
        </div>
      </section>
      {/* Related guides */}
      {/* Local SEO content (distinct layout) */}
      <section className="py-16 bg-cream border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs text-chocolate bg-white/70 border border-gray-200 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-navy" />
              Local guide • {cityDisplayName}, {stateName}
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-playfair font-bold text-charcoal">Launch playbook for {cityTitle}</h2>
            <p className="mt-2 text-stone">
              The fastest path from idea to first placement focuses on compliance, high‑fit locations, and consistent service. Use this action plan tailored to {cityTitle} to speed up results.
            </p>

            {/* Narrative + pull‑quote for variety */}
            <div className="mt-8 grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-charcoal">Actionable steps (localized)</h3>
                <ol className="mt-3 list-decimal pl-6 text-stone space-y-2">
                  <li>Register your business and set up a sales tax account for {stateName}.
                  </li>
                  <li>Call the city/county health office to confirm vending/food rules (refrigerated items may require extra approval).</li>
                  <li>Shortlist 20–30 locations in {cityTitle}: offices, healthcare, schools, logistics, municipal.</li>
                  <li>Prepare a simple placement agreement and a service‑level one‑pager with response times.</li>
                  <li>Install with card readers and telemetry, then service weekly; expand based on top sellers.</li>
                </ol>
              </div>
              <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="border-l-4 border-navy pl-4 text-stone">
                  <p className="italic">
                    “In {cityDisplayName}, facility managers choose vendors who keep machines full, stock proven best‑sellers, and accept cards. Consistent service and clear SLAs win placements.”
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">
                    <div className="font-semibold text-charcoal">High‑fit sites</div>
                    <div className="text-stone">Offices • Clinics • Warehouses • Gyms</div>
                  </div>
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">
                    <div className="font-semibold text-charcoal">Essentials</div>
                    <div className="text-stone">Contracts • Card readers • Checklists</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion FAQs (local SEO long‑form) */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <details className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-charcoal">Do I need special permits in {cityTitle}?</summary>
                <p className="mt-2 text-stone">Most operators need a general business license and sales tax permit; food or refrigerated items can trigger health inspections. Always confirm with your local office.</p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-charcoal">What locations work best here?</summary>
                <p className="mt-2 text-stone">Start near office parks, clinics, logistics hubs, schools, and recreation facilities in {cityTitle}. Aim for steady daily foot traffic and captive audiences.</p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm md:col-span-2">
                <summary className="cursor-pointer font-semibold text-charcoal">How do you help me launch with confidence?</summary>
                <div className="mt-2 grid sm:grid-cols-2 gap-3 text-stone">
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">Legal‑ready contracts for quick sign‑off</div>
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">Proven outreach scripts for local decision‑makers</div>
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">Negotiation frameworks & objection handling</div>
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">Install & service checklists to stay reliable</div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">Get the Full Guide ($79)</a>
                  <Link href="#contracts" className="inline-flex items-center justify-center gap-2 text-navy hover:text-navy-light font-semibold w-full sm:w-auto">See Contracts & Scripts</Link>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-playfair font-bold text-charcoal mb-4">
            {stateEntry ? `More guides in ${stateEntry.name}` : 'Explore more markets'}
          </h2>
          {stateEntry && relatedCities.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {relatedCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/how-to-start-a-vending-machine-business/${city.slug}`}
                  className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy"
                >
                  How to Start in {city.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guide"
                className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy"
              >
                Browse all city guides
              </Link>
            </div>
          )}
        </div>
      </section>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `How to Start a Vending Machine Business in ${cityTitle}`,
            description: `Permits, costs, locations, and contracts for launching in ${cityTitle}.`,
            mainEntityOfPage: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${citySlug}`,
            author: { '@type': 'Organization', name: 'The Vending Locator' },
            publisher: { '@type': 'Organization', name: 'The Vending Locator' },
            dateModified: new Date().toISOString()
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: `Start a Vending Machine Business in ${cityTitle}`,
            step: [
              { '@type': 'HowToStep', name: 'Business setup & licensing' },
              { '@type': 'HowToStep', name: 'Health & vending permits' },
              { '@type': 'HowToStep', name: 'Choose machines' },
              { '@type': 'HowToStep', name: 'Find locations' },
              { '@type': 'HowToStep', name: 'Pitch & negotiate' },
              { '@type': 'HowToStep', name: 'Install & optimize' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do I need a permit to operate?', acceptedAnswer: { '@type': 'Answer', text: 'Most jurisdictions require a general business license and sales tax permit. Food vending may need additional health approvals.' } },
              { '@type': 'Question', name: 'Best places to start?', acceptedAnswer: { '@type': 'Answer', text: `Begin with offices, medical clinics, schools, gyms, logistics facilities, and municipal buildings in ${cityTitle}.` } },
              { '@type': 'Question', name: 'How many machines first?', acceptedAnswer: { '@type': 'Answer', text: 'Start with 1-2 machines, validate sales, then add more on proven sites to manage cashflow and service time.' } },
              { '@type': 'Question', name: 'Are card readers necessary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—cashless increases conversion and enables telemetry to track inventory and performance.' } }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thevendinglocator.com/' },
              { '@type': 'ListItem', position: 2, name: 'Guide', item: 'https://www.thevendinglocator.com/guide' },
              { '@type': 'ListItem', position: 3, name: cityTitle, item: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${citySlug}` }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  )
}


