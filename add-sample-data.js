// Add Sample Data to Supabase
const { locationService } = require('./functions/supabase-client');
const { seoGenerator } = require('./seo-generator');

const sampleLocations = [
    {
        name: "Vending Services New York",
        city: "New York",
        state: "NY",
        email: "info@vendingny.com",
        website: "https://vendingny.com",
        phone: "(212) 555-0123",
        address: "New York, NY",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        name: "Vending Services Los Angeles",
        city: "Los Angeles",
        state: "CA",
        email: "info@vendingla.com",
        website: "https://vendingla.com",
        phone: "(213) 555-0123",
        address: "Los Angeles, CA",
        latitude: 34.0522,
        longitude: -118.2437
    },
    {
        name: "Vending Services Chicago",
        city: "Chicago",
        state: "IL",
        email: "info@vendingchicago.com",
        website: "https://vendingchicago.com",
        phone: "(312) 555-0123",
        address: "Chicago, IL",
        latitude: 41.8781,
        longitude: -87.6298
    },
    {
        name: "Vending Services Miami",
        city: "Miami",
        state: "FL",
        email: "info@vendingmiami.com",
        website: "https://vendingmiami.com",
        phone: "(305) 555-0123",
        address: "Miami, FL",
        latitude: 25.7617,
        longitude: -80.1918
    },
    {
        name: "Vending Services Seattle",
        city: "Seattle",
        state: "WA",
        email: "info@vendingseattle.com",
        website: "https://vendingseattle.com",
        phone: "(206) 555-0123",
        address: "Seattle, WA",
        latitude: 47.6062,
        longitude: -122.3321
    }
];

async function addSampleData() {
    console.log('Adding sample location data to Supabase...');
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const locationData of sampleLocations) {
        try {
            // Auto-populate SEO fields
            const populatedData = seoGenerator.populateLocationWithSEO(locationData);
            
            // Save to Supabase
            const savedLocation = await locationService.saveLocation(populatedData);
            
            console.log(`✅ Added: ${locationData.name} (${locationData.city}, ${locationData.state})`);
            successCount++;
            
            // Small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 500));
            
        } catch (error) {
            console.error(`❌ Failed to add ${locationData.name}:`, error.message);
            errorCount++;
        }
    }
    
    console.log('\n📊 Summary:');
    console.log(`✅ Successfully added: ${successCount} locations`);
    console.log(`❌ Errors: ${errorCount} locations`);
    
    if (successCount > 0) {
        console.log('\n🎉 Sample data added successfully!');
        console.log('You can now test your location pages:');
        console.log('- http://localhost:8888/locations/new-york-ny');
        console.log('- http://localhost:8888/locations/los-angeles-ca');
        console.log('- http://localhost:8888/locations/chicago-il');
        console.log('- http://localhost:8888/locations/miami-fl');
        console.log('- http://localhost:8888/locations/seattle-wa');
    }
}

addSampleData(); 