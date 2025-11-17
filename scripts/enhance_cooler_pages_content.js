const fs = require('fs');
const path = require('path');

// City-specific content generators for cooler pages
const coolerContentGenerators = {
  // Generate unique hero value proposition for coolers
  generateHeroValueProp: (cityName, stateName) => {
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
        `Discover the future of smart vending in ${cityName} with Haha coolers. Revolutionary grab & go technology perfect for ${cityName}'s diverse business landscape, from downtown corporate centers to suburban retail corridors.`,
        `Transform your ${cityName} vending operations with Haha smart coolers. 99% accurate checkout, cashless payments, and remote management - ideal for ${cityName}'s thriving metropolitan business community.`,
        `Modernize your ${cityName} vending business with Haha smart coolers. Perfect for ${cityName}'s high-traffic commercial zones, featuring advanced vision technology and seamless customer experience.`
      );
    } else if (isUniversityTown) {
      templates.push(
        `Perfect for ${cityName}'s academic and business community, Haha smart coolers offer modern vending solutions for university campuses, research facilities, and student-centered businesses.`,
        `Ideal for ${cityName}'s education-focused economy, Haha coolers combine cutting-edge technology with reliable performance, perfect for campus locations and tech companies.`,
        `Discover Haha smart coolers in ${cityName}, where academic institutions, student housing, and campus-adjacent businesses benefit from modern grab & go vending technology.`
      );
    } else if (isCoastal) {
      templates.push(
        `Explore Haha smart coolers for ${cityName}'s coastal economy, where tourism, hospitality, and year-round business activity create diverse placement opportunities.`,
        `Perfect for ${cityName}'s waterfront business district, Haha coolers offer modern vending solutions for hospitality venues, retail centers, and high-traffic commercial spaces.`,
        `Ideal for ${cityName}'s thriving coastal market, Haha smart coolers combine advanced technology with reliable performance, perfect for tourism-driven businesses and local commerce.`
      );
    } else if (isIndustrial) {
      templates.push(
        `Discover Haha smart coolers for ${cityName}'s industrial and manufacturing sectors, where large employee bases and extended operating hours create stable placement opportunities.`,
        `Perfect for ${cityName}'s manufacturing districts, Haha coolers offer reliable vending solutions for industrial facilities, distribution centers, and business parks.`,
        `Ideal for ${cityName}'s robust industrial economy, Haha smart coolers provide modern vending technology for manufacturing facilities and commercial zones.`
      );
    } else if (isTechHub) {
      templates.push(
        `Transform your ${cityName} vending operations with Haha smart coolers. Perfect for ${cityName}'s technology-driven business ecosystem, featuring corporate campuses and modern office complexes.`,
        `Discover Haha coolers for ${cityName}'s tech sector, where corporate headquarters, research facilities, and business districts benefit from advanced vending technology.`,
        `Ideal for ${cityName}'s growing tech economy, Haha smart coolers offer modern solutions for corporate offices, startup spaces, and commercial areas.`
      );
    } else if (isTourist) {
      templates.push(
        `Explore Haha smart coolers for ${cityName}'s tourism and hospitality economy, where entertainment venues and high-traffic areas offer diverse placement opportunities.`,
        `Perfect for ${cityName}'s entertainment and hospitality sectors, Haha coolers provide modern vending solutions for tourist destinations, hotels, and commercial spaces.`,
        `Ideal for ${cityName}'s vibrant tourism market, Haha smart coolers combine advanced technology with reliable performance for entertainment venues and retail districts.`
      );
    } else {
      templates.push(
        `Discover Haha smart coolers for ${cityName}'s diverse business community, where local commerce, healthcare facilities, and educational institutions create steady placement opportunities.`,
        `Perfect for ${cityName}'s growing economy, Haha coolers offer modern vending solutions for business districts, commercial centers, and community facilities.`,
        `Ideal for ${cityName}'s thriving ${stateName} market, Haha smart coolers provide advanced technology for local businesses, healthcare systems, and educational facilities.`,
        `Explore Haha smart coolers throughout ${cityName}'s business network, where diverse industries and commercial zones offer multiple placement options.`
      );
    }
    
    const hash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return templates[hash % templates.length];
  },

  // Generate unique FAQ answers for cooler pages
  generateFAQAnswers: (cityName, stateName) => {
    const cityLower = cityName.toLowerCase();
    
    return {
      whyChoose: [
        `Haha smart coolers offer ${cityName} operators a modern solution with 99% accurate vision checkout, cashless payments, and remote management. Perfect for ${cityName}'s diverse business landscape including offices, retail locations, and healthcare facilities. The grab & go technology eliminates broken products while providing customers with a seamless shopping experience.`,
        `For ${cityName} vending operators, Haha coolers represent the future of smart vending. The combination of vision technology, cashless payments, and app-based management makes Haha ideal for ${cityName}'s growing business community. Operators can manage multiple locations remotely while offering customers a modern, convenient shopping experience.`,
        `${cityName} businesses benefit from Haha smart coolers' advanced technology, which includes 99% accurate checkout, contactless payments, and real-time inventory management. Perfect for ${cityName}'s mix of office buildings, retail spaces, and healthcare facilities, Haha coolers eliminate traditional vending machine problems while maximizing sales potential.`
      ],
      howWorks: [
        `Customers in ${cityName} simply tap their card or phone to unlock the cooler door, select items naturally, and close the door. The vision system automatically detects what was taken and charges their payment method - no buttons or selections needed. This grab & go experience works perfectly in ${cityName}'s fast-paced business environment.`,
        `The grab & go technology in Haha coolers works seamlessly for ${cityName} locations. Customers tap to unlock, browse like a store refrigerator, take what they want, and close the door. The advanced vision cameras track every item removed and automatically process payment, making it ideal for ${cityName}'s busy commercial spaces.`,
        `In ${cityName}, Haha coolers use revolutionary vision technology that allows customers to shop naturally. Tap to unlock, grab items, close the door - checkout happens automatically. This system eliminates the need for buttons or selections, perfect for ${cityName}'s diverse customer base.`
      ],
      paymentMethods: [
        `Haha coolers in ${cityName} accept all major credit cards, debit cards, Apple Pay, Google Pay, Samsung Pay, and all NFC contactless payments. 100% cashless operation eliminates coin jams and maintenance issues, making them perfect for ${cityName}'s modern business environment.`,
        `For ${cityName} locations, Haha coolers support comprehensive cashless payment options including credit cards, debit cards, and all major mobile payment systems. This eliminates the daily maintenance and coin collection issues that plague traditional vending machines in ${cityName}.`,
        `${cityName} customers can use any payment method they prefer with Haha coolers - credit cards, debit cards, Apple Pay, Google Pay, Samsung Pay, and all NFC payments. The 100% cashless system is ideal for ${cityName}'s tech-savvy business community.`
      ],
      remoteManagement: [
        `Yes! The Haha management app lets you monitor stock levels, track sales, auto-generate restock orders, and handle customer feedback in real-time for all your ${cityName} locations from one mobile dashboard. Perfect for operators managing multiple ${cityName} placements.`,
        `Absolutely! ${cityName} operators can manage all their Haha coolers remotely through the mobile app. Monitor inventory, view sales data, receive restock alerts, and handle customer service issues from anywhere - ideal for managing a ${cityName} vending route.`,
        `The Haha management app provides ${cityName} operators with complete remote control. Track sales across all ${cityName} locations, monitor inventory levels, generate restock lists, and respond to customer feedback - all from your smartphone, perfect for ${cityName}'s distributed business landscape.`
      ],
      bestProducts: [
        `Haha coolers in ${cityName} excel with beverages, fresh food, snacks, and more. The no-drop design protects fragile items like glass bottles, salads, yogurts, and meal prep items - perfect for ${cityName}'s diverse customer base seeking quality grab-and-go options.`,
        `For ${cityName} locations, Haha coolers work great with sodas, energy drinks, bottled water, juices, yogurt, sandwiches, salads, and meal prep items. The no-drop mechanism means operators can sell premium products like glass bottles and delicate food items that traditional machines can't handle.`,
        `${cityName} operators can sell a wide variety in Haha coolers - beverages, fresh food, snacks, and more. The grab & go design means no product damage, so ${cityName} customers can access premium items like glass bottles, salads, and delicate food products.`
      ],
      accuracy: [
        `The vision technology in Haha coolers achieves 99% accuracy in detecting items removed. This advanced system ensures ${cityName} customers are charged correctly while minimizing losses for operators - critical for ${cityName}'s competitive vending market.`,
        `Haha coolers use advanced vision cameras and sensors to achieve 99% checkout accuracy. For ${cityName} operators, this means customers are always charged correctly for what they take, reducing losses and improving profitability across ${cityName} locations.`,
        `The checkout system in Haha coolers is 99% accurate, using sophisticated vision technology to track every item removed. This ensures ${cityName} customers pay the correct amount while protecting ${cityName} operators from shrinkage and errors.`
      ],
      included: [
        `Each Haha US360 cooler includes vision technology, APP smart management system, cashless payment terminal, 1-year parts warranty, and ETL certification. The unit operates on standard 110V, 60Hz power - perfect for ${cityName} locations without special electrical requirements.`,
        `When you purchase a Haha cooler for ${cityName}, you get the complete smart vending system: vision checkout technology, mobile management app, cashless payment terminal, 1-year warranty, and ETL safety certification. Everything needed to start vending in ${cityName} is included.`,
        `Haha coolers for ${cityName} come complete with vision technology, smart management app, cashless payment system, 1-year parts warranty, and ETL certification. The standard 110V power requirement makes installation easy in any ${cityName} location.`
      ],
      support: [
        `Yes! We provide ongoing support through our Telegram community @thevendinglocator. ${cityName} operators can get tips, troubleshooting help, and connect with other vending operators. Additional support options available for multi-unit orders in ${cityName}.`,
        `Absolutely! ${cityName} operators have access to our Telegram support community @thevendinglocator for tips, troubleshooting, and networking. For operators managing multiple ${cityName} locations, we offer extended support options and dedicated assistance.`,
        `Support for ${cityName} Haha cooler operators is available through our Telegram community @thevendinglocator, where you can get help, share tips, and connect with other operators. Multi-unit ${cityName} customers receive priority support and additional resources.`
      ]
    };
  }
};

// Function to enhance a single cooler page
function enhanceCoolerPageContent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract city and state from the file
    const cityMatch = content.match(/const cityDisplayName = ['"]([^'"]+)['"]/);
    const stateMatch = content.match(/const stateDisplayName = ['"]([^'"]+)['"]/);
    
    if (!cityMatch || !stateMatch) {
      return false;
    }
    
    const cityName = cityMatch[1].trim();
    const stateName = stateMatch[1].trim();
    
    if (!cityName || !stateName || cityName.length < 2) {
      return false;
    }
    
    let modified = false;
    
    // 1. Enhance Hero Value Proposition
    // Match the actual hero text pattern
    const heroPattern = new RegExp(
      `(Discover the future of vending in ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} with Haha smart coolers\\. Revolutionary grab & go technology[\\s\\S]*?perfect for ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'s thriving business community\\.)`,
      'g'
    );
    const newHero = coolerContentGenerators.generateHeroValueProp(cityName, stateName);
    
    if (heroPattern.test(content)) {
      content = content.replace(heroPattern, newHero);
      modified = true;
    }
    
    // 2. Enhance FAQ answers
    const faqAnswers = coolerContentGenerators.generateFAQAnswers(cityName, stateName);
    
    const faqMappings = [
      {
        questionPattern: new RegExp(`Why should I choose Haha smart coolers for my ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} vending business\\?`, 'g'),
        answers: faqAnswers.whyChoose
      },
      {
        questionPattern: new RegExp(`How does the grab & go technology work in ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\?`, 'g'),
        answers: faqAnswers.howWorks
      },
      {
        questionPattern: new RegExp(`What payment methods do Haha coolers accept in ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\?`, 'g'),
        answers: faqAnswers.paymentMethods
      },
      {
        questionPattern: new RegExp(`Can I manage multiple Haha coolers across ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} remotely\\?`, 'g'),
        answers: faqAnswers.remoteManagement
      },
      {
        questionPattern: new RegExp(`What products work best in Haha coolers for ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} locations\\?`, 'g'),
        answers: faqAnswers.bestProducts
      },
      {
        questionPattern: new RegExp(`How accurate is the checkout system in ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\?`, 'g'),
        answers: faqAnswers.accuracy
      },
      {
        questionPattern: new RegExp(`What's included when I purchase a Haha cooler for ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\?`, 'g'),
        answers: faqAnswers.included
      },
      {
        questionPattern: new RegExp(`Do you offer support for Haha cooler operators in ${cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\?`, 'g'),
        answers: faqAnswers.support
      }
    ];
    
    faqMappings.forEach(({ questionPattern, answers }) => {
      // Find the FAQ item with this question and replace the answer
      // The question is already in the content, so we need to match it exactly
      const questionText = questionPattern.source.replace(/\\\?/g, '?').replace(/\\/g, '');
      const faqItemPattern = new RegExp(
        `(question: ["']${questionText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'],\\s*answer: ["'])([^"']+)(["'])`,
        'g'
      );
      
      if (faqItemPattern.test(content)) {
        const hash = (cityName + questionText).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const selectedAnswer = answers[hash % answers.length];
        // Escape quotes and backslashes in the answer
        const escapedAnswer = selectedAnswer.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        content = content.replace(faqItemPattern, `$1${escapedAnswer}$3`);
        modified = true;
      }
    });
    
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

// Main function to process all cooler pages
function main() {
  const coolerDir = path.join(__dirname, '..', 'src', 'app', 'haha-coolers');
  
  if (!fs.existsSync(coolerDir)) {
    console.error('Cooler directory not found!');
    return;
  }
  
  const directories = fs.readdirSync(coolerDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => name.includes('-') && name.split('-').length >= 2); // Only city pages
  
  let processed = 0;
  let modified = 0;
  let errors = 0;
  
  console.log(`Found ${directories.length} cooler city directories to process...`);
  
  directories.forEach(dir => {
    const pageClientPath = path.join(coolerDir, dir, 'pageClient.tsx');
    
    if (fs.existsSync(pageClientPath)) {
      processed++;
      if (enhanceCoolerPageContent(pageClientPath)) {
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

module.exports = { enhanceCoolerPageContent, coolerContentGenerators };

