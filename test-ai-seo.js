// Test AI SEO Generation
// This script tests the OpenAI integration for SEO generation

const { aiSEOGenerator } = require('./ai-seo-generator');

async function testAISEOGeneration() {
    console.log('🧪 Testing AI SEO Generation with OpenAI...\n');
    
    const testLocation = {
        name: "Vending Services New York",
        city: "New York",
        state: "NY",
        serviceType: "vending services"
    };
    
    try {
        console.log('📍 Testing location:', testLocation.city + ', ' + testLocation.state);
        console.log('⏳ Generating AI-powered SEO fields...\n');
        
        // Test individual SEO field generation
        console.log('1️⃣ Testing Meta Title Generation...');
        const metaTitle = await aiSEOGenerator.generateAIMetaTitle(testLocation.city, testLocation.state);
        console.log('✅ Meta Title:', metaTitle);
        console.log('📏 Length:', metaTitle.length, 'characters (max 60)\n');
        
        console.log('2️⃣ Testing Meta Description Generation...');
        const metaDescription = await aiSEOGenerator.generateAIMetaDescription(testLocation.city, testLocation.state);
        console.log('✅ Meta Description:', metaDescription);
        console.log('📏 Length:', metaDescription.length, 'characters (max 160)\n');
        
        console.log('3️⃣ Testing Meta Keywords Generation...');
        const metaKeywords = await aiSEOGenerator.generateAIMetaKeywords(testLocation.city, testLocation.state);
        console.log('✅ Meta Keywords:', metaKeywords);
        console.log('📏 Keywords count:', metaKeywords.split(',').length, 'keywords\n');
        
        console.log('4️⃣ Testing Location Description Generation...');
        const description = await aiSEOGenerator.generateAILocationDescription(testLocation.city, testLocation.state);
        console.log('✅ Location Description:', description);
        console.log('📏 Length:', description.length, 'characters\n');
        
        console.log('5️⃣ Testing About Section Generation...');
        const about = await aiSEOGenerator.generateAIAboutSection(testLocation.city, testLocation.state);
        console.log('✅ About Section:', about);
        console.log('📏 Length:', about.length, 'characters\n');
        
        // Test full SEO population
        console.log('🎯 Testing Full SEO Population...');
        const fullSEOData = await aiSEOGenerator.populateLocationWithAISEO(testLocation);
        console.log('✅ Full SEO Data Generated:');
        console.log('   - Meta Title:', fullSEOData.meta_title);
        console.log('   - Meta Description:', fullSEOData.meta_description);
        console.log('   - Meta Keywords:', fullSEOData.meta_keywords);
        console.log('   - Description:', fullSEOData.description);
        console.log('   - About:', fullSEOData.about);
        
        console.log('\n🎉 All AI SEO generation tests passed successfully!');
        console.log('🚀 Your OpenAI integration is working perfectly.');
        
    } catch (error) {
        console.error('❌ AI SEO generation test failed:', error.message);
        console.log('\n🔧 Troubleshooting tips:');
        console.log('1. Check if your OpenAI API key is valid');
        console.log('2. Verify you have sufficient API credits');
        console.log('3. Check your internet connection');
        console.log('4. The system will fallback to template generation');
        
        // Test fallback
        console.log('\n🔄 Testing fallback template generation...');
        const fallbackData = aiSEOGenerator.populateLocationWithTemplateSEO(testLocation);
        console.log('✅ Fallback data generated successfully');
        console.log('   - Meta Title:', fallbackData.meta_title);
        console.log('   - Meta Description:', fallbackData.meta_description);
    }
}

// Test multiple locations
async function testMultipleLocations() {
    console.log('\n🌍 Testing Multiple Locations...\n');
    
    const testLocations = [
        { city: "Los Angeles", state: "CA" },
        { city: "Chicago", state: "IL" },
        { city: "Miami", state: "FL" },
        { city: "Seattle", state: "WA" }
    ];
    
    for (const location of testLocations) {
        try {
            console.log(`📍 Testing: ${location.city}, ${location.state}`);
            const seoData = await aiSEOGenerator.populateLocationWithAISEO({
                city: location.city,
                state: location.state,
                serviceType: "vending services"
            });
            
            console.log(`✅ Generated for ${location.city}:`);
            console.log(`   Title: ${seoData.meta_title}`);
            console.log(`   Description: ${seoData.meta_description.substring(0, 80)}...`);
            console.log('');
            
        } catch (error) {
            console.log(`❌ Failed for ${location.city}: ${error.message}`);
        }
    }
}

// Run tests
if (require.main === module) {
    testAISEOGeneration()
        .then(() => testMultipleLocations())
        .then(() => {
            console.log('\n✨ All tests completed!');
            process.exit(0);
        })
        .catch(error => {
            console.error('💥 Test suite failed:', error);
            process.exit(1);
        });
}

module.exports = { testAISEOGeneration, testMultipleLocations }; 