export interface VendingLeadsCityOverride {
  stats?: {
    population: string
    businesses: string
    industries: string
    verifiedLocations: string
  }
  heroLead?: string
  pricingIntro?: string
  landscapeIntro?: string
  whyChoose?: string
  hotLeadsIntro?: string
  courseIntro?: string
  faqIntro?: string
  industryBody?: {
    Healthcare: string
    Education: string
    Manufacturing: string
    Retail: string
    Office: string
    Transportation: string
  }
  faqItems?: Array<{ q: string; a: string }>
  seoDescription?: string
}

export const vendingLeadsCityOverrides: Record<string, VendingLeadsCityOverride> = {
  'jacksonville-florida': {
    heroLead: 'Find placement-ready vending leads in Jacksonville, Florida, tailored to business corridors, healthcare hubs, and growing commercial districts.',
    pricingIntro: 'Choose a one-time Jacksonville package designed for fast placement and dependable outreach.',
    landscapeIntro: 'Explore the industries that keep Jacksonville vending demand steady across the workweek.',
    whyChoose:
      'Jacksonville blends coastal commerce with steady business traffic, creating dependable placement opportunities across office hubs, healthcare networks, and retail corridors. That mix supports consistent vending demand year-round.',
    hotLeadsIntro: 'Secure verified Jacksonville locations without ongoing subscriptions or long-term contracts.',
    courseIntro: 'Learn the playbook for building a profitable Jacksonville vending route.',
    faqIntro: 'Common questions about vending leads and placement in Jacksonville.',
    industryBody: {
      Healthcare:
        'Jacksonville healthcare facilities provide consistent visitor traffic and long operating hours, making them reliable vending locations.',
      Education:
        'Jacksonville campuses and training centers generate steady weekday foot traffic with repeat demand.',
      Manufacturing:
        'Industrial and logistics operations in Jacksonville support break-time demand with shift-based schedules.',
      Retail:
        'Retail corridors in Jacksonville create high-visibility placement opportunities with steady shopper flow.',
      Office:
        'Office parks in Jacksonville deliver predictable weekday demand and consistent employee traffic.',
      Transportation:
        'Transportation and distribution hubs in Jacksonville create all-day traffic patterns that support vending sales.'
    },
    faqItems: [
      {
        q: 'What types of vending locations are common in Jacksonville?',
        a: 'Healthcare centers, office parks, retail corridors, and logistics facilities are common placement categories in Jacksonville.'
      },
      {
        q: 'How fast can I get Jacksonville vending leads?',
        a: 'Jacksonville lead lists are typically delivered within 3-5 business days with verified contacts and location notes.'
      },
      {
        q: 'Why is Jacksonville a strong vending market?',
        a: 'Jacksonville combines steady business traffic with diverse industries, creating consistent demand across multiple location types.'
      },
      {
        q: 'Can I target specific Jacksonville neighborhoods?',
        a: 'Yes, we can focus your lead list on the business districts, corridors, or neighborhoods you want to reach.'
      },
      {
        q: 'Do you verify Jacksonville locations?',
        a: 'We validate businesses, decision-makers, and placement fit before a Jacksonville location is included.'
      },
      {
        q: 'Is there ongoing support after delivery?',
        a: 'Yes, we provide guidance on outreach scripts and placement strategy for Jacksonville operators.'
      }
    ],
    seoDescription:
      'Get verified vending machine leads in Jacksonville, Florida with location-level notes and qualified business contacts for faster placement.'
  },
  'miami-florida': {
    stats: {
      population: '470K+',
      businesses: '18K+',
      industries: '12-16',
      verifiedLocations: '300-650'
    },
    heroLead: 'Access verified vending leads in Miami, Florida focused on high-traffic business zones, hospitality corridors, and dense office clusters.',
    pricingIntro: 'Pick a Miami lead package built for quick outreach and placement-ready locations.',
    landscapeIntro: 'See the industries that drive steady vending demand across Miami.',
    whyChoose:
      'Miami blends dense business districts with year-round visitor activity, creating steady placement opportunities across Brickell, the Health District, and major retail corridors.',
    hotLeadsIntro: 'Get Miami vending locations without monthly commitments.',
    courseIntro: 'Build confidence with guidance designed for Miami vending operators.',
    faqIntro: 'Answers to the top vending lead questions in Miami.',
    industryBody: {
      Healthcare:
        'Miami healthcare campuses and clinics support reliable vending demand with consistent daily visits and long operating hours.',
      Education:
        'Miami education sites create steady weekday traffic and repeat purchase patterns.',
      Manufacturing:
        'Miami light industrial and distribution sites bring shift-based demand for vending service, especially near port and logistics zones.',
      Retail:
        'Retail districts in Miami provide high-visibility placement options and consistent shopper flow.',
      Office:
        'Office clusters in Miami drive predictable weekday vending sales during break periods.',
      Transportation:
        'Transportation hubs in Miami create all-day foot traffic for quick-purchase vending.'
    },
    faqItems: [
      {
        q: 'What locations perform best in Miami?',
        a: 'Offices, retail centers, healthcare facilities, and logistics sites are common high-performing categories in Miami.'
      },
      {
        q: 'How soon do Miami leads arrive?',
        a: 'Most Miami lead lists are delivered within 3-5 business days.'
      },
      {
        q: 'Can I focus on specific Miami corridors?',
        a: 'Yes, we can prioritize neighborhoods or business zones you want to target, including downtown and major commercial corridors.'
      },
      {
        q: 'Are Miami contacts verified?',
        a: 'We verify decision-makers and business details before delivery.'
      },
      {
        q: 'Do you replace unavailable locations?',
        a: 'We provide replacement leads if a Miami location becomes unavailable.'
      },
      {
        q: 'Is there support after delivery?',
        a: 'Yes, you receive outreach guidance and placement tips tailored to Miami.'
      }
    ],
    seoDescription:
      'Get verified vending machine leads in Miami, Florida with qualified contacts and placement-ready locations tailored to high-traffic business zones.'
  },
  'orlando-florida': {
    heroLead: 'Find placement-ready vending leads in Orlando, Florida matched to office corridors, retail centers, and high-traffic destinations.',
    pricingIntro: 'Choose an Orlando package built for fast placement and clear outreach steps.',
    landscapeIntro: 'Explore the industry mix that supports vending success in Orlando.',
    whyChoose:
      'Orlando blends strong visitor traffic with steady business activity, creating reliable placement options across offices, retail, and healthcare facilities.',
    hotLeadsIntro: 'Access verified Orlando locations with a one-time package.',
    courseIntro: 'Get the fundamentals to grow an Orlando vending route with confidence.',
    faqIntro: 'FAQs for operators placing vending machines in Orlando.',
    industryBody: {
      Healthcare:
        'Orlando healthcare centers generate steady daily traffic that supports consistent vending demand.',
      Education:
        'Orlando campuses and training centers provide regular weekday demand and repeat purchases.',
      Manufacturing:
        'Orlando industrial sites support vending sales with shift-based schedules.',
      Retail:
        'Retail hubs in Orlando create strong visibility and predictable traffic spikes.',
      Office:
        'Office zones in Orlando deliver consistent weekday demand for snacks and beverages.',
      Transportation:
        'Transportation hubs in Orlando support all-day vending activity with consistent traveler flow.'
    },
    faqItems: [
      {
        q: 'What types of locations are common in Orlando?',
        a: 'Offices, healthcare centers, retail hubs, and logistics facilities are common Orlando placement categories.'
      },
      {
        q: 'How quickly can I receive Orlando leads?',
        a: 'Orlando lead lists are delivered in 3-5 business days.'
      },
      {
        q: 'Do you verify Orlando locations?',
        a: 'Yes, we verify business details and decision-makers for Orlando placements.'
      },
      {
        q: 'Can I target specific Orlando areas?',
        a: 'We can focus on districts and corridors you want to prioritize.'
      },
      {
        q: 'Is Orlando a good vending market?',
        a: 'Orlando combines steady business traffic with year-round demand across diverse location types.'
      },
      {
        q: 'What support is included?',
        a: 'We provide outreach guidance and placement strategy after delivery.'
      }
    ],
    seoDescription:
      'Get verified vending machine leads in Orlando, Florida with placement-ready locations and qualified contacts.'
  },
  'tampa-florida': {
    heroLead: 'Access vetted vending leads in Tampa, Florida focused on offices, healthcare campuses, and retail corridors.',
    pricingIntro: 'Choose a Tampa lead package that fits your placement goals and timeline.',
    landscapeIntro: 'Discover the industries that fuel vending demand across Tampa.',
    whyChoose:
      'Tampa offers a balanced mix of office districts, healthcare networks, and retail centers that support steady vending demand across the week.',
    hotLeadsIntro: 'Get Tampa locations without monthly subscriptions.',
    courseIntro: 'Learn how to build and grow a Tampa vending route.',
    faqIntro: 'Quick answers for Tampa vending lead questions.',
    industryBody: {
      Healthcare:
        'Tampa healthcare facilities create dependable daily traffic for vending placements.',
      Education:
        'Tampa colleges and training centers bring consistent weekday demand.',
      Manufacturing:
        'Industrial sites in Tampa support vending sales through shift changes and break periods.',
      Retail:
        'Retail centers in Tampa provide high visibility and repeat customer flow.',
      Office:
        'Office clusters in Tampa deliver steady weekday vending demand.',
      Transportation:
        'Transportation hubs in Tampa create all-day foot traffic that supports vending sales.'
    },
    faqItems: [
      {
        q: 'What locations perform well in Tampa?',
        a: 'Offices, healthcare facilities, retail centers, and logistics sites are strong Tampa categories.'
      },
      {
        q: 'How fast are Tampa leads delivered?',
        a: 'Most Tampa lead lists arrive within 3-5 business days.'
      },
      {
        q: 'Can I target specific Tampa districts?',
        a: 'Yes, we can focus on the business areas you specify.'
      },
      {
        q: 'Do you verify Tampa contacts?',
        a: 'We verify decision-makers and business details before delivery.'
      },
      {
        q: 'Is Tampa competitive?',
        a: 'We highlight placement opportunities where demand is strongest across Tampa.'
      },
      {
        q: 'What support do you provide?',
        a: 'You receive outreach scripts and placement guidance after delivery.'
      }
    ],
    seoDescription:
      'Get verified vending machine leads in Tampa, Florida with vetted locations and decision-maker contacts.'
  },
  'st-petersburg-florida': {
    heroLead: 'Find verified vending leads in St. Petersburg, Florida tailored to local business districts and steady traffic corridors.',
    pricingIntro: 'Choose a St. Petersburg package designed for fast, placement-ready outreach.',
    landscapeIntro: 'Learn how St. Petersburg industries create dependable vending demand.',
    whyChoose:
      'St. Petersburg supports steady vending performance with a mix of healthcare centers, office hubs, and retail areas that keep daily traffic consistent.',
    hotLeadsIntro: 'Access St. Petersburg locations with a one-time purchase.',
    courseIntro: 'Get the steps to build a steady St. Petersburg vending route.',
    faqIntro: 'Frequently asked questions about vending leads in St. Petersburg.',
    industryBody: {
      Healthcare:
        'St. Petersburg healthcare sites provide daily traffic and extended hours that support vending sales.',
      Education:
        'Campus and training locations in St. Petersburg deliver reliable weekday demand.',
      Manufacturing:
        'Industrial operations in St. Petersburg create predictable break-time traffic.',
      Retail:
        'Retail districts in St. Petersburg offer consistent shopper flow and visibility.',
      Office:
        'Office clusters in St. Petersburg provide repeat weekday demand.',
      Transportation:
        'Transit corridors in St. Petersburg create steady foot traffic for vending placements.'
    },
    faqItems: [
      {
        q: 'What locations are common in St. Petersburg?',
        a: 'Healthcare, office, retail, and logistics sites are common placement targets in St. Petersburg.'
      },
      {
        q: 'How quickly do St. Petersburg leads arrive?',
        a: 'Leads are typically delivered within 3-5 business days.'
      },
      {
        q: 'Do you verify St. Petersburg locations?',
        a: 'Yes, we verify business details and decision-makers before delivery.'
      },
      {
        q: 'Can I target specific St. Petersburg areas?',
        a: 'We can focus your list on districts and corridors you choose.'
      },
      {
        q: 'What support is included?',
        a: 'We provide outreach guidance and placement recommendations after delivery.'
      },
      {
        q: 'Is St. Petersburg a good vending market?',
        a: 'St. Petersburg has steady business traffic across multiple industries, supporting dependable placement opportunities.'
      }
    ],
    seoDescription:
      'Get verified vending machine leads in St. Petersburg, Florida with qualified contacts and placement-ready locations.'
  },
  'fort-lauderdale-florida': {
    heroLead: 'Access verified vending leads in Fort Lauderdale, Florida focused on offices, healthcare, and high-traffic retail corridors.',
    pricingIntro: 'Pick a Fort Lauderdale package built for predictable outreach and placement.',
    landscapeIntro: 'Discover the business mix that drives vending demand across Fort Lauderdale.',
    whyChoose:
      'Fort Lauderdale blends strong business traffic with consistent visitor activity, creating dependable placement opportunities across offices, retail centers, and healthcare facilities.',
    hotLeadsIntro: 'Get Fort Lauderdale vending locations without monthly fees.',
    courseIntro: 'Learn how to build a profitable Fort Lauderdale route with clear next steps.',
    faqIntro: 'Answers to common Fort Lauderdale vending lead questions.',
    industryBody: {
      Healthcare:
        'Fort Lauderdale healthcare facilities support daily visitor flow and steady vending demand.',
      Education:
        'Education sites in Fort Lauderdale create consistent weekday traffic.',
      Manufacturing:
        'Industrial and logistics sites in Fort Lauderdale generate predictable break-time demand.',
      Retail:
        'Retail corridors in Fort Lauderdale provide strong visibility and repeat customer flow.',
      Office:
        'Office centers in Fort Lauderdale deliver steady weekday sales patterns.',
      Transportation:
        'Transportation hubs in Fort Lauderdale bring all-day foot traffic for vending placements.'
    },
    faqItems: [
      {
        q: 'What locations work well in Fort Lauderdale?',
        a: 'Offices, healthcare facilities, retail centers, and logistics sites are common high-performing categories.'
      },
      {
        q: 'How fast do Fort Lauderdale leads arrive?',
        a: 'Most lead lists are delivered within 3-5 business days.'
      },
      {
        q: 'Can I target specific Fort Lauderdale neighborhoods?',
        a: 'Yes, we can focus your list on the areas you want to reach.'
      },
      {
        q: 'Do you verify Fort Lauderdale contacts?',
        a: 'We verify decision-makers and business details before delivery.'
      },
      {
        q: 'Is Fort Lauderdale competitive?',
        a: 'We highlight placement opportunities where demand is strongest across the market.'
      },
      {
        q: 'What support do you provide?',
        a: 'We include outreach guidance and placement strategy after delivery.'
      }
    ],
    seoDescription:
      'Get verified vending machine leads in Fort Lauderdale, Florida with vetted locations and decision-maker contacts.'
  }
}

export const getVendingLeadsCityOverride = (slug: string) =>
  vendingLeadsCityOverrides[slug]
