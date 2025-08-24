const fs = require('fs');
const path = require('path');

const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');

function fixHeroSection(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Check if this page has the old hero structure
  if (content.includes('Active Users Counter Pill')) {
    console.log(`🔧 Fixing hero section in: ${path.basename(path.dirname(filePath))}`);
    
    // Replace the old green pill counter with the new structure
    const oldCounterRegex = /(\s*\{\/\* Active Users Counter Pill \*\/\s*<motion\.div[\s\S]*?<\/motion\.div>\s*)/;
    
    const newCounter = `
              {/* Active Users Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto mb-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div>
                <div className="mt-2 text-xs text-chocolate/70">
                  Including {userNames[currentUserIndex]}
                </div>
                <div className="mt-1 text-xs text-chocolate/50">
                  {usedNames.size} unique names shown so far
                </div>
              </motion.div>`;

    if (content.match(oldCounterRegex)) {
      content = content.replace(oldCounterRegex, newCounter);
      updated = true;
    }

    // Replace the old blue notification with the new green one
    const oldNotificationRegex = /(\s*\{\/\* Recent Purchase Notification \*\/\s*<motion\.div[\s\S]*?<\/motion\.div>\s*)/;
    
    const newNotification = `
              {/* Recent Purchase Notification */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 sm:mt-6 p-3 bg-green-50 border border-green-200 rounded-lg shadow-sm max-w-sm mx-auto mb-6"
              >
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-800 font-medium">
                    <span className="font-semibold">{recentPurchases[currentPurchaseIndex].name}</span> from {recentPurchases[currentPurchaseIndex].location} just purchased the{' '}
                    <span className="font-bold text-green-700">{recentPurchases[currentPurchaseIndex].plan}</span>
                  </span>
                </div>
                <div className="mt-1 text-xs text-green-600 text-center">
                  {recentPurchases[currentPurchaseIndex].time}
                </div>
              </motion.div>`;

    if (content.match(oldNotificationRegex)) {
      content = content.replace(oldNotificationRegex, newNotification);
      updated = true;
    }

    // Replace the old trust badges with the new trust signals
    const oldTrustBadgesRegex = /(\s*\{\/\* Trust\/Feature Badges \*\/\s*<motion\.div[\s\S]*?<\/motion\.div>\s*)/;
    
    const newTrustSignals = `
              {/* Trust Signals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">4.8/5 Rating</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-chocolate">Quality Research</span>
                  </div>
                </div>
              </motion.div>`;

    if (content.match(oldTrustBadgesRegex)) {
      content = content.replace(oldTrustBadgesRegex, newTrustSignals);
      updated = true;
    }

    // Replace the old CTA buttons with the new ones
    const oldCTARegex = /(\s*\{\/\* CTA Buttons \*\/\s*<motion\.div[\s\S]*?<\/motion\.div>\s*)/;
    
    const newCTAButtons = `
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <Link 
                  href="/pricing"
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/hot-leads"
                  className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
                >
                  View Hot Leads →
                </Link>
              </motion.div>`;

    if (content.match(oldCTARegex)) {
      content = content.replace(oldCTARegex, newCTAButtons);
      updated = true;
    }

    // Add social proof section if it doesn't exist
    if (!content.includes('Join 2,847+ vending operators')) {
      const beforeCityStats = content.indexOf('{/* City Stats */}');
      if (beforeCityStats !== -1) {
        const socialProof = `
              {/* Social Proof */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-6 sm:mt-8"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">M</span>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">S</span>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">D</span>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">L</span>
                    </div>
                  </div>
                  <span className="text-sm text-chocolate/70">Join 2,847+ vending operators</span>
                </div>
                <p className="text-sm text-chocolate/60">
                  "Found my best location in 3 days!" - <span className="font-semibold">Mike R., {stateDisplayName}</span>
                </p>
              </motion.div>`;
        
        content = content.slice(0, beforeCityStats) + socialProof + content.slice(beforeCityStats);
        updated = true;
      }
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  
  return updated;
}

function fixAllHeroSections() {
  console.log('🔧 Fixing hero sections across all vending-leads pages...');
  let updatedCount = 0;

  const directories = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const dirName of directories) {
    const pagePath = path.join(vendingLeadsDir, dirName, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      if (fixHeroSection(pagePath)) {
        updatedCount++;
      }
    }
  }

  console.log(`\n🎉 Fixed hero sections in ${updatedCount} pages!`);
  console.log('✨ All pages now have consistent counters, CTA buttons, and social proof sections.');
}

if (require.main === module) {
  fixAllHeroSections();
}
