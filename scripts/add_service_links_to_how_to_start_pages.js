const fs = require('fs');
const path = require('path');

const howToStartDir = path.join(__dirname, '../src/app/_city-pages/how-to-start-a-vending-machine-business');

// Get all city directories
const cities = fs.readdirSync(howToStartDir).filter(item => {
  const itemPath = path.join(howToStartDir, item);
  return fs.statSync(itemPath).isDirectory();
});

console.log(`Found ${cities.length} city pages to update...`);

let updated = 0;
let errors = 0;

cities.forEach((citySlug, index) => {
  try {
    const filePath = path.join(howToStartDir, citySlug, 'pageClient.tsx');
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Skipping ${citySlug} - pageClient.tsx not found`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Update Step 1 description - convert to JSX with links
    // Handle multiple variations of the step 1 description
    const step1Patterns = [
      // Pattern 1: "Register your LLC with your state..."
      /(description:\s*`)(Register your LLC with your state, obtain an EIN from the IRS, and get your sales tax permit from the your state tax authority\. Obtain any required local business licenses for \$\{cityDisplayName\}\.)(`)/,
      // Pattern 2: "Register your LLC with the ${stateDisplayName} Secretary of State..."
      /(description:\s*`)(Register your LLC with the \$\{stateDisplayName\} Secretary of State, obtain an EIN from the IRS, and get your sales tax permit\. Register for local business licenses in \$\{cityDisplayName\}\.)(`)/
    ];

    step1Patterns.forEach(pattern => {
      if (pattern.test(content)) {
        if (pattern === step1Patterns[0]) {
          // First pattern
          content = content.replace(
            pattern,
            `description: (
          <>
            Register your <Link href="/ein-llc" className="text-coral hover:text-navy underline font-semibold">LLC</Link> with your state, obtain an <Link href="/ein-llc" className="text-coral hover:text-navy underline font-semibold">EIN</Link> from the IRS, and get your <Link href="/tax-services" className="text-coral hover:text-navy underline font-semibold">sales tax permit</Link> from the your state tax authority. Obtain any required local business licenses for {cityDisplayName}.
          </>
        )`
          );
        } else {
          // Second pattern
          content = content.replace(
            pattern,
            `description: (
          <>
            Register your <Link href="/ein-llc" className="text-coral hover:text-navy underline font-semibold">LLC</Link> with the {stateDisplayName} Secretary of State, obtain an <Link href="/ein-llc" className="text-coral hover:text-navy underline font-semibold">EIN</Link> from the IRS, and get your <Link href="/tax-services" className="text-coral hover:text-navy underline font-semibold">sales tax permit</Link>. Register for local business licenses in {cityDisplayName}.
          </>
        )`
          );
        }
        modified = true;
      }
    });

    // Update Step 2 description - add link for tax permits
    // Handle variations with/without "local"
    const step2Patterns = [
      /(title:\s*'2\. Permits & Licensing',\s*description:\s*')(Apply for food vending permits through your local health department if selling food\/beverages\. Confirm all local requirements for your specific locations\.)(')/,
      /(title:\s*'2\. Permits & Licensing',\s*description:\s*')(Apply for food vending permits through your local health department if selling food\/beverages\. Confirm all requirements for your specific locations\.)(')/
    ];

    step2Patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(
          pattern,
          `title: '2. Permits & Licensing',
        description: (
          <>
            Apply for food vending permits through your local health department if selling food/beverages. For <Link href="/tax-services" className="text-coral hover:text-navy underline font-semibold">tax permits and licensing</Link>, confirm all requirements for your specific locations.
          </>
        )`
        );
        modified = true;
      }
    });

    // Update FAQ answers - convert to JSX
    // Pattern for FAQ mentioning sales tax permit and LLC
    const faqPattern1 = /(a:\s*`)(You'll need a .*? sales tax permit.*? Also register your LLC with the state\.)(`)/;
    if (faqPattern1.test(content)) {
      // Extract the state name if present, otherwise use generic text
      const match = content.match(/You'll need a (.*?) sales tax permit/);
      const stateText = match ? match[1] : '';
      content = content.replace(
        faqPattern1,
        `a: (
          <>
            You'll need a <Link href="/tax-services" className="text-coral hover:text-navy underline font-semibold">sales tax permit</Link>, a {cityDisplayName} business tax receipt, and if selling food/beverages, a county health permit for each machine. Also <Link href="/ein-llc" className="text-coral hover:text-navy underline font-semibold">register your LLC</Link> with the state.
          </>
        )`
      );
      modified = true;
    }

    // Another FAQ pattern - business registration
    const faqPattern2 = /(a:\s*`)(You need a .*? sales tax permit.*? No special vending-specific license is required beyond standard business registration\.)(`)/;
    if (faqPattern2.test(content)) {
      content = content.replace(
        faqPattern2,
        `a: (
          <>
            You need a business tax receipt from {cityDisplayName}, a <Link href="/tax-services" className="text-coral hover:text-navy underline font-semibold">sales tax permit</Link>, and health permits if selling food. No special vending-specific license is required beyond standard <Link href="/ein-llc" className="text-coral hover:text-navy underline font-semibold">business registration</Link>.
          </>
        )`
      );
      modified = true;
    }

    if (modified) {
      // Change description rendering from <p> with string to div with JSX
      const renderPattern = /(<p className="text-charcoal\/80 leading-relaxed">)(\{step\.description\})(<\/p>)/;
      if (renderPattern.test(content)) {
        content = content.replace(
          renderPattern,
          '<div className="text-charcoal/80 leading-relaxed">{step.description}</div>'
        );
      }

      // Also update FAQ rendering if needed - look for text-charcoal/80 pattern
      const faqRenderPattern = /(<p className="text-charcoal\/80 leading-relaxed">)(\{faq\.a\})(<\/p>)/g;
      if (faqRenderPattern.test(content)) {
        content = content.replace(
          faqRenderPattern,
          '<div className="text-charcoal/80 leading-relaxed">{faq.a}</div>'
        );
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      updated++;
      
      if ((index + 1) % 100 === 0) {
        console.log(`Progress: ${index + 1}/${cities.length} cities processed...`);
      }
    }
  } catch (error) {
    console.error(`❌ Error updating ${citySlug}:`, error.message);
    errors++;
  }
});

console.log(`\n✅ Update complete!`);
console.log(`   Updated: ${updated} pages`);
console.log(`   Errors: ${errors} pages`);
console.log(`   Total: ${cities.length} pages`);
