const fs = require('fs');
const path = require('path');

// City-specific content generators
const cityContentGenerators = {
  // Generate unique hero value proposition
  generateHeroValueProp: (cityName, stateName) => {
    // Fix city name parsing - handle multi-word cities properly
    const cityLower = cityName.toLowerCase().trim();
    const stateLower = stateName.toLowerCase().trim();
    
    // City-specific characteristics
    const isMajorCity = ['new york', 'los angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san antonio', 'san diego', 'dallas', 'san jose'].includes(cityLower);
    const isUniversityTown = ['ann arbor', 'champaign', 'bloomington', 'ithaca', 'college station', 'boulder', 'madison', 'berkeley', 'cambridge'].includes(cityLower);
    const isCoastal = ['miami', 'san diego', 'seattle', 'portland', 'boston', 'san francisco', 'tampa', 'jacksonville', 'virginia beach'].includes(cityLower);
    const isIndustrial = ['detroit', 'pittsburgh', 'cleveland', 'milwaukee', 'buffalo', 'akron', 'toledo'].includes(cityLower);
    const isTechHub = ['san jose', 'seattle', 'austin', 'boston', 'denver', 'raleigh', 'atlanta'].includes(cityLower);
    const isTourist = ['orlando', 'las vegas', 'miami', 'san diego', 'honolulu', 'new orleans', 'nashville'].includes(cityLower);
    
    const templates = [];
    
    if (isMajorCity) {
      templates.push(
        `Access verified vending machine locations in ${cityName}'s thriving metropolitan area, where diverse business districts and high-traffic commercial zones create exceptional opportunities for vending machine placement.`,
        `Discover pre-qualified vending opportunities across ${cityName}'s extensive business network, from downtown corporate centers to suburban retail corridors, all verified for optimal placement success.`,
        `Get comprehensive vending machine leads for ${cityName}'s dynamic economy, featuring dense business concentrations, diverse demographics, and year-round foot traffic ideal for vending operations.`
      );
    } else if (isUniversityTown) {
      templates.push(
        `Tap into ${cityName}'s vibrant academic and business community, where university campuses, research facilities, and student-centered businesses offer consistent vending machine opportunities.`,
        `Access verified vending locations in ${cityName}'s education-focused economy, combining university populations, tech companies, and growing commercial sectors for reliable vending placement.`,
        `Discover pre-qualified vending opportunities in ${cityName}, where academic institutions, student housing, and campus-adjacent businesses create steady demand for vending machine services.`
      );
    } else if (isCoastal) {
      templates.push(
        `Explore vending machine opportunities in ${cityName}'s coastal economy, where tourism, hospitality, and year-round business activity create diverse placement options across multiple industries.`,
        `Access verified vending locations throughout ${cityName}'s waterfront business district, featuring hospitality venues, retail centers, and commercial spaces with high visitor traffic.`,
        `Get comprehensive vending leads for ${cityName}'s thriving coastal market, combining tourism-driven businesses, local commerce, and residential areas for consistent vending success.`
      );
    } else if (isIndustrial) {
      templates.push(
        `Discover vending machine opportunities in ${cityName}'s industrial and manufacturing sectors, where large employee bases, extended operating hours, and industrial parks offer stable placement options.`,
        `Access verified vending locations across ${cityName}'s manufacturing and commercial districts, featuring industrial facilities, distribution centers, and business parks with consistent foot traffic.`,
        `Get pre-qualified vending leads for ${cityName}'s robust industrial economy, combining manufacturing facilities, logistics centers, and commercial zones for reliable vending placement.`
      );
    } else if (isTechHub) {
      templates.push(
        `Tap into ${cityName}'s technology-driven business ecosystem, where corporate campuses, innovation hubs, and modern office complexes create ideal environments for vending machine placement.`,
        `Access verified vending opportunities in ${cityName}'s tech sector, featuring corporate headquarters, research facilities, and business districts with high employee concentrations.`,
        `Discover pre-qualified vending locations across ${cityName}'s growing tech economy, combining corporate offices, startup spaces, and commercial areas for consistent vending success.`
      );
    } else if (isTourist) {
      templates.push(
        `Explore vending machine opportunities in ${cityName}'s tourism and hospitality economy, where visitor attractions, entertainment venues, and high-traffic areas offer diverse placement options.`,
        `Access verified vending locations throughout ${cityName}'s entertainment and hospitality sectors, featuring tourist destinations, hotels, and commercial spaces with year-round traffic.`,
        `Get comprehensive vending leads for ${cityName}'s vibrant tourism market, combining entertainment venues, retail districts, and hospitality businesses for consistent vending success.`
      );
    } else {
      // Generic but varied templates
      templates.push(
        `Access verified vending machine locations across ${cityName}'s diverse business community, where local commerce, healthcare facilities, and educational institutions create steady opportunities for vending placement.`,
        `Discover pre-qualified vending opportunities in ${cityName}'s growing economy, featuring business districts, commercial centers, and community facilities with consistent foot traffic.`,
        `Get comprehensive vending leads for ${cityName}'s thriving ${stateName} market, combining local businesses, healthcare systems, and educational facilities for reliable vending machine placement.`,
        `Explore vending machine opportunities throughout ${cityName}'s business network, where diverse industries, commercial zones, and community spaces offer multiple placement options for vending success.`
      );
    }
    
    // Return a template based on city name hash for consistency
    const hash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return templates[hash % templates.length];
  },

  // Generate unique business landscape descriptions
  generateBusinessLandscape: (cityName, stateName, industry) => {
    const cityLower = cityName.toLowerCase();
    const industryLower = industry.toLowerCase();
    
    const industryTemplates = {
      'healthcare': [
        `${cityName} features modern healthcare facilities including hospitals, medical centers, and clinics with high patient and visitor traffic, creating consistent demand for vending services throughout the day.`,
        `Healthcare facilities in ${cityName} serve large patient populations and employ significant staff numbers, providing stable vending opportunities with extended operating hours and steady foot traffic.`,
        `Medical centers and healthcare facilities throughout ${cityName} offer excellent vending placement opportunities, with high-traffic areas including waiting rooms, cafeterias, and employee break areas.`,
        `${cityName}'s healthcare sector includes major hospitals, specialty clinics, and medical offices that generate consistent visitor and employee traffic, ideal for vending machine placement.`
      ],
      'education': [
        `Educational institutions in ${cityName} provide consistent student and staff populations, with schools, colleges, and universities offering year-round vending opportunities across campus facilities.`,
        `${cityName}'s education sector features schools, universities, and training facilities with captive audiences during academic hours, creating reliable vending machine placement opportunities.`,
        `Educational facilities throughout ${cityName} serve large student populations and employ substantial staff, providing steady foot traffic and consistent demand for vending services.`,
        `Schools and educational institutions in ${cityName} offer excellent vending opportunities, with high-traffic areas including cafeterias, libraries, student centers, and athletic facilities.`
      ],
      'manufacturing': [
        `${cityName}'s manufacturing sector includes industrial facilities and production plants with large employee bases working extended shifts, creating ideal conditions for vending machine placement.`,
        `Manufacturing facilities in ${cityName} operate around the clock with significant employee populations, providing consistent vending opportunities in break rooms and common areas.`,
        `Industrial and manufacturing operations throughout ${cityName} employ substantial workforces with shift-based schedules, offering stable vending placement opportunities with steady traffic.`,
        `${cityName}'s manufacturing sector features production facilities, warehouses, and industrial parks with large employee concentrations, ideal for vending machine services.`
      ],
      'retail': [
        `Retail locations throughout ${cityName} provide high customer traffic and diverse shopping experiences, creating multiple vending opportunities in malls, shopping centers, and retail districts.`,
        `${cityName}'s retail sector features shopping centers, department stores, and specialty shops with consistent customer flow, offering excellent vending machine placement options.`,
        `Retail establishments in ${cityName} attract diverse customer demographics and generate steady foot traffic, providing reliable vending opportunities across various retail environments.`,
        `Shopping centers and retail districts in ${cityName} offer prime vending locations, with high-traffic areas including food courts, entrances, and common spaces frequented by shoppers.`
      ],
      'office buildings': [
        `Professional office spaces in ${cityName} house corporate headquarters, business centers, and professional services with captive employee audiences during business hours, creating consistent vending opportunities.`,
        `Office buildings throughout ${cityName} feature corporate tenants, professional firms, and business services with steady daily traffic, providing reliable vending machine placement options.`,
        `${cityName}'s office sector includes business districts, corporate campuses, and professional centers with high employee concentrations, ideal for vending services in common areas and break rooms.`,
        `Commercial office spaces in ${cityName} offer excellent vending opportunities, with professional tenants and business operations generating consistent foot traffic throughout the workday.`
      ],
      'transportation': [
        `${cityName}'s transportation hubs including airports, transit centers, and transportation facilities provide high-volume passenger traffic, creating exceptional vending machine placement opportunities.`,
        `Transportation facilities in ${cityName} serve travelers and commuters with consistent foot traffic throughout the day, offering reliable vending opportunities in terminals, waiting areas, and transit stations.`,
        `Airports, bus stations, and transit centers throughout ${cityName} generate steady passenger traffic, providing excellent vending placement options in high-traffic areas frequented by travelers.`,
        `${cityName}'s transportation infrastructure includes major transit hubs and travel facilities with year-round passenger flow, ideal for vending machine services in waiting areas and terminals.`
      ]
    };
    
    const templates = industryTemplates[industryLower] || [
      `${industry} facilities in ${cityName} provide consistent opportunities for vending machine placement with steady foot traffic and diverse demographics.`
    ];
    
    const hash = (cityName + industry).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return templates[hash % templates.length];
  },

  // Generate unique FAQ answers
  generateFAQAnswers: (cityName, stateName) => {
    const cityLower = cityName.toLowerCase();
    
    return {
      types: [
        `${cityName} offers diverse vending opportunities including healthcare facilities, educational institutions, manufacturing plants, retail locations, office buildings, and transportation hubs. Each location is pre-verified for optimal vending machine success based on foot traffic, employee counts, and business operations.`,
        `Vending machine locations in ${cityName} span multiple industries including healthcare systems, schools and universities, industrial facilities, shopping centers, corporate offices, and transit stations. Our research identifies high-traffic areas with consistent visitor and employee populations ideal for vending placement.`,
        `${cityName} features vending opportunities across healthcare, education, manufacturing, retail, office, and transportation sectors. We verify each location for business stability, foot traffic patterns, and demographic suitability to ensure successful vending machine placement.`
      ],
      speed: [
        `Our ${cityName} vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, placement opportunities, and location analysis to accelerate your market entry into ${cityName}'s vending market.`,
        `Vending machine leads for ${cityName} are typically delivered within 3-5 business days. Each lead package includes verified business information, contact details, placement recommendations, and market insights specific to ${cityName}'s business landscape.`,
        `We deliver ${cityName} vending leads within 3-5 business days, complete with business verification, contact information, placement analysis, and industry research tailored to ${cityName}'s unique market characteristics.`
      ],
      market: [
        `${cityName} features a strong business community with diverse industries, stable employment, and consistent foot traffic. The city's economic growth, business-friendly environment, and diverse demographics create ideal conditions for vending machine success across multiple sectors.`,
        `${cityName} offers excellent vending opportunities due to its business density, diverse economy, and steady population growth. The city's mix of industries, commercial activity, and community facilities provide multiple placement options for vending machines.`,
        `${cityName} presents strong vending potential with its thriving business sector, diverse industries, and consistent commercial activity. The city's economic stability, growing population, and business diversity create favorable conditions for successful vending machine operations.`
      ],
      support: [
        `Yes, we offer comprehensive support for ${cityName} locations including location research, contact information, placement strategies, and ongoing consultation. Our team provides market insights, placement recommendations, and business development support to ensure your vending machines thrive in ${cityName}.`,
        `We provide full support for ${cityName} vending operations, including verified location data, contact information, placement guidance, and ongoing consultation. Our services help you navigate ${cityName}'s market, identify opportunities, and maximize your vending machine success.`,
        `Absolutely. Our support for ${cityName} includes detailed location research, verified contact information, strategic placement recommendations, and ongoing market consultation. We help you understand ${cityName}'s business landscape and optimize your vending machine placement strategy.`
      ],
      industries: [
        `Healthcare, education, manufacturing, retail, office buildings, and transportation sectors in ${cityName} show the highest potential for vending machine success due to consistent foot traffic, captive audiences, and extended operating hours. These industries provide stable placement opportunities with reliable customer bases.`,
        `The best industries for vending in ${cityName} include healthcare facilities, educational institutions, manufacturing operations, retail centers, office complexes, and transportation hubs. These sectors offer consistent traffic, employee populations, and visitor flow ideal for vending machine placement.`,
        `${cityName}'s top vending industries are healthcare, education, manufacturing, retail, office buildings, and transportation. These sectors feature high-traffic locations, stable operations, and diverse demographics that create excellent opportunities for successful vending machine placement.`
      ],
      verification: [
        `We conduct thorough research on each ${cityName} location including business verification, foot traffic analysis, employee count validation, and industry research. Our process ensures only high-quality opportunities with verified business operations, stable traffic patterns, and suitable demographics are included.`,
        `Our verification process for ${cityName} locations includes business registration checks, traffic pattern analysis, employee population validation, and industry research. We verify each location's operational status, visitor patterns, and demographic suitability before including it in our leads database.`,
        `We verify ${cityName} vending locations through comprehensive research including business verification, traffic analysis, employee validation, and market research. Our quality control ensures all locations meet standards for business stability, foot traffic, and vending placement potential.`
      ],
      customization: [
        `Absolutely! We can provide targeted vending leads for specific neighborhoods, business districts, or industrial areas within ${cityName} based on your preferences and target market requirements. Our customization options allow you to focus on specific zip codes, industries, or geographic areas within ${cityName}.`,
        `Yes, we offer customized vending leads for specific areas of ${cityName}, including targeted neighborhoods, business districts, industrial zones, or geographic regions. We can tailor leads to your preferred locations, industries, or market segments within ${cityName}.`,
        `We provide customized vending leads for specific areas within ${cityName}, allowing you to target particular neighborhoods, business districts, or industrial zones. Our flexible approach lets you focus on your preferred locations, industries, or geographic areas in ${cityName}.`
      ],
      roi: [
        `Vending machines in ${cityName} typically show strong ROI due to the city's business density and consistent traffic patterns. Our research shows average payback periods of 12-18 months for well-placed machines, with high-traffic locations often achieving faster returns.`,
        `Vending machines in ${cityName} generally deliver solid ROI with payback periods of 12-18 months for strategic placements. The city's business activity, steady foot traffic, and diverse demographics contribute to reliable revenue potential for well-positioned machines.`,
        `${cityName} vending machines typically achieve strong ROI with 12-18 month payback periods for optimal placements. The city's economic activity, business density, and consistent traffic create favorable conditions for profitable vending operations.`
      ]
    };
  },

  // Generate unique "Why [City]?" section content
  generateWhyCitySection: (cityName, stateName) => {
    const cityLower = cityName.toLowerCase().trim();
    const stateLower = stateName.toLowerCase().trim();
    
    const isMajorCity = ['new york', 'los angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san antonio', 'san diego', 'dallas', 'san jose'].includes(cityLower);
    const isUniversityTown = ['ann arbor', 'champaign', 'bloomington', 'ithaca', 'college station', 'boulder', 'madison', 'berkeley', 'cambridge'].includes(cityLower);
    const isCoastal = ['miami', 'san diego', 'seattle', 'portland', 'boston', 'san francisco', 'tampa', 'jacksonville', 'virginia beach'].includes(cityLower);
    const isIndustrial = ['detroit', 'pittsburgh', 'cleveland', 'milwaukee', 'buffalo', 'akron', 'toledo'].includes(cityLower);
    const isTechHub = ['san jose', 'seattle', 'austin', 'boston', 'denver', 'raleigh', 'atlanta'].includes(cityLower);
    const isTourist = ['orlando', 'las vegas', 'miami', 'san diego', 'honolulu', 'new orleans', 'nashville'].includes(cityLower);
    
    const templates = [];
    
    if (isMajorCity) {
      templates.push(
        `${cityName} stands out as a premier vending market due to its extensive business infrastructure, diverse economic sectors, and high population density. The metropolitan area's concentration of corporate headquarters, retail districts, and commercial zones creates multiple high-traffic placement opportunities. ${cityName}'s robust economy supports consistent consumer spending, while the city's transportation networks ensure steady foot traffic across business districts.`,
        `The ${cityName} market offers exceptional vending potential through its combination of business density, demographic diversity, and economic stability. Major business districts, shopping centers, and commercial corridors provide numerous placement options with proven traffic patterns. ${cityName}'s status as a regional economic hub ensures sustained business activity and consumer demand, making it an ideal location for vending machine operations.`,
        `${cityName} presents outstanding vending opportunities thanks to its large-scale business ecosystem, varied industry mix, and substantial employee and resident populations. The city's commercial centers, office complexes, and retail areas generate consistent daily traffic, while ${cityName}'s economic growth trends support long-term vending success. Multiple business districts offer diverse placement strategies for different vending machine types.`
      );
    } else if (isUniversityTown) {
      templates.push(
        `${cityName} offers unique vending advantages through its academic community, which provides year-round stable populations and consistent daily traffic patterns. The presence of universities, colleges, and research institutions creates captive audiences with predictable schedules, while campus-adjacent businesses benefit from student and faculty foot traffic. ${cityName}'s education-focused economy supports steady consumer demand across academic calendars.`,
        `The ${cityName} market excels for vending due to its academic infrastructure, which generates reliable traffic from students, faculty, and staff throughout the year. University campuses, student housing areas, and education-related businesses offer prime placement locations with consistent usage patterns. ${cityName}'s reputation as an education hub attracts additional businesses and services, expanding vending opportunities beyond campus boundaries.`,
        `${cityName} presents strong vending potential through its combination of educational institutions, tech companies, and growing commercial sectors. The academic community provides stable, predictable traffic, while university partnerships with local businesses create additional placement opportunities. ${cityName}'s educated population and research-focused economy support diverse vending product demand and higher spending capacity.`
      );
    } else if (isCoastal) {
      templates.push(
        `${cityName} offers excellent vending opportunities through its coastal economy, which combines tourism, hospitality, and year-round business activity. The city's waterfront location attracts visitors and supports diverse commercial sectors, creating multiple traffic sources for vending machines. ${cityName}'s tourism industry provides seasonal peaks, while local business and residential communities ensure consistent year-round demand.`,
        `The ${cityName} market benefits from its coastal position, which drives tourism, hospitality, and commercial activity throughout the year. Waterfront businesses, tourist attractions, and local commerce generate steady foot traffic, while the city's growing residential population adds consistent daily demand. ${cityName}'s combination of visitor traffic and local business activity creates diverse vending placement opportunities across multiple industries.`,
        `${cityName} presents strong vending potential through its thriving coastal economy, featuring tourism-driven businesses, hospitality venues, and growing commercial districts. The city's attractive location supports year-round visitor traffic, while local businesses and residential areas provide consistent daily demand. ${cityName}'s diverse economic base ensures multiple placement options with varying traffic patterns and consumer demographics.`
      );
    } else if (isIndustrial) {
      templates.push(
        `${cityName} offers reliable vending opportunities through its industrial and manufacturing sectors, which provide large employee bases and extended operating hours. Manufacturing facilities, distribution centers, and industrial parks create stable placement locations with consistent traffic patterns. ${cityName}'s industrial economy supports steady employment and consumer spending, while shift-based operations ensure vending machines receive traffic throughout extended hours.`,
        `The ${cityName} market excels for vending due to its robust industrial base, featuring manufacturing operations, logistics centers, and commercial facilities with substantial employee populations. Industrial districts and business parks offer prime placement locations with predictable traffic, while the city's manufacturing sector supports stable employment and consistent consumer demand. ${cityName}'s industrial infrastructure creates multiple high-traffic vending opportunities.`,
        `${cityName} presents strong vending potential through its combination of manufacturing facilities, logistics operations, and commercial businesses. The city's industrial economy provides large employee concentrations with extended shift schedules, ensuring consistent vending machine usage. ${cityName}'s manufacturing and distribution sectors create stable placement opportunities with reliable traffic patterns and steady consumer demand.`
      );
    } else if (isTechHub) {
      templates.push(
        `${cityName} offers exceptional vending opportunities through its technology-driven economy, featuring corporate campuses, innovation hubs, and modern office complexes. The city's tech sector attracts highly educated professionals with strong purchasing power, while corporate facilities provide stable, high-traffic placement locations. ${cityName}'s reputation as a tech hub supports growing business activity and expanding vending opportunities.`,
        `The ${cityName} market benefits from its technology sector, which creates numerous high-traffic placement opportunities in corporate headquarters, research facilities, and business districts. Tech companies typically feature large employee populations, modern facilities, and extended operating hours, ideal for vending machine placement. ${cityName}'s tech-driven economy supports consistent business activity and strong consumer spending capacity.`,
        `${cityName} presents outstanding vending potential through its thriving technology ecosystem, combining corporate offices, startup spaces, and innovation centers with substantial employee populations. The city's tech sector attracts businesses and professionals, creating growing commercial districts with high foot traffic. ${cityName}'s technology-focused economy supports diverse vending opportunities with strong consumer demand and modern facility infrastructure.`
      );
    } else if (isTourist) {
      templates.push(
        `${cityName} offers excellent vending opportunities through its tourism and hospitality economy, featuring entertainment venues, tourist attractions, and high-traffic commercial areas. The city's visitor industry generates substantial foot traffic, while local businesses and residential communities provide consistent year-round demand. ${cityName}'s combination of tourist destinations and local commerce creates diverse placement options with varying traffic patterns.`,
        `The ${cityName} market excels for vending due to its entertainment and hospitality sectors, which attract visitors and support extensive commercial activity. Tourist attractions, hotels, and entertainment venues provide high-traffic placement locations, while the city's growing residential population adds steady daily demand. ${cityName}'s tourism economy ensures consistent business activity and consumer spending throughout the year.`,
        `${cityName} presents strong vending potential through its vibrant tourism market, combining entertainment venues, hospitality businesses, and commercial districts with substantial visitor and local traffic. The city's tourist attractions generate peak traffic periods, while local businesses and residential areas ensure consistent daily demand. ${cityName}'s entertainment-focused economy creates multiple high-traffic vending placement opportunities.`
      );
    } else {
      templates.push(
        `${cityName} offers strong vending opportunities through its diverse business community, combining local commerce, healthcare facilities, educational institutions, and growing commercial sectors. The city's business mix provides multiple placement options with varying traffic patterns, while ${cityName}'s economic stability supports consistent consumer demand. The city's combination of established businesses and growing sectors creates reliable vending placement opportunities.`,
        `The ${cityName} market presents excellent vending potential through its combination of local businesses, healthcare systems, educational facilities, and commercial districts. The city's diverse economy ensures multiple traffic sources, while ${cityName}'s business density creates numerous placement options. The city's economic growth and business-friendly environment support long-term vending success with steady consumer demand.`,
        `${cityName} offers reliable vending opportunities through its thriving business community, featuring diverse industries, commercial centers, and growing economic sectors. The city's business mix provides stable placement locations with consistent traffic patterns, while ${cityName}'s economic activity supports steady consumer spending. The city's combination of established businesses and emerging sectors creates multiple vending placement strategies.`
      );
    }
    
    const hash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return templates[hash % templates.length];
  }
};

// Function to enhance a single page
function enhancePageContent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract city and state from the file
    const cityMatch = content.match(/const cityDisplayName = ['"]([^'"]+)['"]/);
    const stateMatch = content.match(/const stateDisplayName = ['"]([^'"]+)['"]/);
    
    if (!cityMatch || !stateMatch) {
      // Try alternative patterns for pages with different structures
      const altCityMatch = content.match(/cityDisplayName\s*=\s*['"]([^'"]+)['"]/);
      const altStateMatch = content.match(/stateDisplayName\s*=\s*['"]([^'"]+)['"]/);
      
      if (!altCityMatch || !altStateMatch) {
        return false; // Skip silently for state pages or different structures
      }
      
      var cityName = altCityMatch[1].trim();
      var stateName = altStateMatch[1].trim();
    } else {
      var cityName = cityMatch[1].trim();
      var stateName = stateMatch[1].trim();
    }
    
    // Ensure we have valid city and state names
    if (!cityName || !stateName || cityName.length < 2) {
      return false;
    }
    
    let modified = false;
    
    // 1. Enhance Hero Value Proposition
    // Match text between motion.p tags - handle multiline text
    // Pattern matches: "Get pre-qualified... [City]'s [desc]. Access verified..."
    // This can span multiple lines, so we use [\s\S] to match any character including newlines
    const heroSectionPattern = /(Get pre-qualified vending machine locations in [^'"]+['"]s [\s\S]*?Access verified businesses[\s\S]*?\.)/;
    const newHero = cityContentGenerators.generateHeroValueProp(cityName, stateName);
    
    // Find and replace the hero text, being careful not to break structure
    if (heroSectionPattern.test(content)) {
      // Replace the matched text only, ensuring we don't include closing tags
      content = content.replace(heroSectionPattern, (match) => {
        // Clean up any trailing whitespace/newlines that might include closing tags
        const cleaned = match.trim();
        if (cleaned.includes('</motion.p>')) {
          // If it somehow includes the closing tag, extract just the text part
          return newHero;
        }
        return newHero;
      });
      modified = true;
    }
    
    // 2. Enhance Business Landscape descriptions
    const industries = [
      { name: 'Healthcare', icon: 'BuildingOfficeIcon|HeartIcon' },
      { name: 'Education', icon: 'AcademicCapIcon' },
      { name: 'Manufacturing', icon: 'CpuChipIcon' },
      { name: 'Retail', icon: 'ShoppingBagIcon' },
      { name: 'Office Buildings', icon: 'BuildingOfficeIcon' },
      { name: 'Transportation', icon: 'TruckIcon' }
    ];
    
    industries.forEach(industry => {
      // Match: <h3>Industry</h3> followed by <p>description</p>
      const industryPattern = new RegExp(
        `(<h3 className="text-xl font-semibold text-charcoal mb-3">${industry.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</h3>\\s*<p className="text-stone leading-relaxed">)([^<]+)(</p>)`,
        'g'
      );
      
      const newDescription = cityContentGenerators.generateBusinessLandscape(cityName, stateName, industry.name);
      
      if (industryPattern.test(content)) {
        content = content.replace(industryPattern, `$1${newDescription}$3`);
        modified = true;
      }
    });
    
    // 3. Enhance FAQ answers
    const faqAnswers = cityContentGenerators.generateFAQAnswers(cityName, stateName);
    
    // Replace FAQ answers - match question and answer separately
    const faqMappings = [
      { 
        questionPattern: new RegExp(`What types of vending machine locations are available in ${cityName}\\?`, 'g'),
        answers: faqAnswers.types
      },
      { 
        questionPattern: new RegExp(`How quickly can I get vending machine leads for ${cityName}\\?`, 'g'),
        answers: faqAnswers.speed
      },
      { 
        questionPattern: new RegExp(`What makes ${cityName} a good market for vending machines\\?`, 'g'),
        answers: faqAnswers.market
      },
      { 
        questionPattern: new RegExp(`Do you provide ongoing support for ${cityName} locations\\?`, 'g'),
        answers: faqAnswers.support
      },
      { 
        questionPattern: new RegExp(`What industries in ${cityName} are best for vending machines\\?`, 'g'),
        answers: faqAnswers.industries
      },
      { 
        questionPattern: new RegExp(`How do you verify the quality of ${cityName} vending locations\\?`, 'g'),
        answers: faqAnswers.verification
      },
      { 
        questionPattern: new RegExp(`Can I get customized vending leads for specific areas of ${cityName}\\?`, 'g'),
        answers: faqAnswers.customization
      },
      { 
        questionPattern: new RegExp(`What's the typical ROI for vending machines in ${cityName}\\?`, 'g'),
        answers: faqAnswers.roi
      }
    ];
    
    faqMappings.forEach(({ questionPattern, answers }) => {
      // Find the FAQ item with this question
      const faqItemPattern = new RegExp(
        `(<h3 className="text-lg font-semibold text-charcoal mb-3">[^<]*${questionPattern.source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^<]*</h3>\\s*<p className="text-stone leading-relaxed">)([^<]+)(</p>)`,
        'g'
      );
      
      const matches = [...content.matchAll(faqItemPattern)];
      if (matches.length > 0) {
        const hash = (cityName + questionPattern.source).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const selectedAnswer = answers[hash % answers.length];
        content = content.replace(faqItemPattern, `$1${selectedAnswer}$3`);
        modified = true;
      }
    });
    
    // 4. Add "Why [City]?" section if it doesn't exist
    // Insert between Business Landscape and Hot Leads sections
    const whyCityContent = cityContentGenerators.generateWhyCitySection(cityName, stateName);
    const whyCitySection = `        {/* Why ${cityName}? */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6"
              >
                Why Choose ${cityName} for Vending Machines?
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <p className="text-lg text-stone leading-relaxed">
                ${whyCityContent}
              </p>
            </motion.div>
          </div>
        </section>

`;
    
    // Check if "Why [City]?" section already exists
    const whyCityPattern = new RegExp(`Why Choose ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} for Vending Machines`, 'i');
    
    if (!whyCityPattern.test(content)) {
      // Find the insertion point: after Business Landscape section, before Hot Leads
      const hotLeadsPattern = /(\s*\{\/\* Hot Leads Section \*\/\}\s*<section[^>]*id=["']hot-leads["'][^>]*>|\{\/\* Hot Leads Section \*\/\}\s*<section[^>]*id=["']pricing["'][^>]*className=["'][^"]*py-16[^"]*bg-warm-white["'][^>]*>)/;
      
      if (hotLeadsPattern.test(content)) {
        content = content.replace(hotLeadsPattern, whyCitySection + '$1');
        modified = true;
      } else {
        // Try alternative pattern
        const altHotLeadsPattern = /(\s*\{\/\* Hot Leads Section \*\/\}\s*<section)/;
        if (altHotLeadsPattern.test(content)) {
          content = content.replace(altHotLeadsPattern, whyCitySection + '$1');
          modified = true;
        } else {
          // Try simpler pattern - just look for Hot Leads Section comment
          const simplePattern = /(\s*\{\/\* Hot Leads Section \*\/\})/;
          if (simplePattern.test(content)) {
            content = content.replace(simplePattern, whyCitySection + '$1');
            modified = true;
          }
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all pages
function main() {
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  const directories = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !name.includes('-') || name.split('-').length >= 2); // Filter out state-only directories
  
  let processed = 0;
  let modified = 0;
  let errors = 0;
  
  console.log(`Found ${directories.length} city directories to process...`);
  
  directories.forEach(dir => {
    const pageClientPath = path.join(vendingLeadsDir, dir, 'pageClient.tsx');
    
    if (fs.existsSync(pageClientPath)) {
      processed++;
      if (enhancePageContent(pageClientPath)) {
        modified++;
        if (modified % 10 === 0) {
          console.log(`Processed ${modified} pages...`);
        }
      }
    } else {
      errors++;
    }
  });
  
  console.log(`\nComplete!`);
  console.log(`Total directories: ${directories.length}`);
  console.log(`Pages processed: ${processed}`);
  console.log(`Pages modified: ${modified}`);
  console.log(`Errors: ${errors}`);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { enhancePageContent, cityContentGenerators };

