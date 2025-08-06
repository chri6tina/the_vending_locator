const fs = require('fs').promises;
const path = require('path');
const { locationService } = require('./functions/supabase-client');

async function migrateToSupabase() {
    console.log('Starting migration to Supabase...');
    
    try {
        // Check if data file exists
        const dataFilePath = path.join(__dirname, 'data/locations.json');
        
        let existingLocations = [];
        try {
            const data = await fs.readFile(dataFilePath, 'utf8');
            existingLocations = JSON.parse(data);
            console.log(`Found ${existingLocations.length} existing locations`);
        } catch (error) {
            console.log('No existing data file found, starting fresh');
            return;
        }

        // Migrate each location
        let migratedCount = 0;
        let errorCount = 0;

        for (const location of existingLocations) {
            try {
                // Transform old data format to new format
                const newLocationData = {
                    name: location.name || 'Vending Services',
                    slug: location.slug || `${location.city?.toLowerCase().replace(/\s+/g, '-')}-${location.state?.toLowerCase()}`,
                    city: location.city,
                    state: location.state,
                    address: location.address,
                    email: location.email,
                    website: location.website,
                    phone: location.phone,
                    description: location.description,
                    about: location.about,
                    latitude: location.latitude,
                    longitude: location.longitude,
                    meta_title: location.meta_title || `Vending Services ${location.city} ${location.state} - Professional Vending Solutions`,
                    meta_description: location.meta_description || `Professional vending machine services in ${location.city}, ${location.state}. Snack vending, beverage vending, and coffee service.`,
                    meta_keywords: location.meta_keywords || `vending machines, snack vending, beverage vending, coffee service, ${location.city}, ${location.state}`
                };

                // Save to Supabase
                await locationService.saveLocation(newLocationData);
                migratedCount++;
                console.log(`✓ Migrated: ${location.name || location.city}`);
                
                // Add small delay to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 100));
                
            } catch (error) {
                errorCount++;
                console.error(`✗ Failed to migrate: ${location.name || location.city}`, error.message);
            }
        }

        console.log('\nMigration completed!');
        console.log(`Successfully migrated: ${migratedCount} locations`);
        console.log(`Errors: ${errorCount} locations`);
        
        if (migratedCount > 0) {
            console.log('\n✅ Migration successful! Your data is now stored in Supabase.');
            console.log('You can now safely delete the old data file if desired.');
        }

    } catch (error) {
        console.error('Migration failed:', error);
    }
}

// Run migration if this file is executed directly
if (require.main === module) {
    migrateToSupabase();
}

module.exports = { migrateToSupabase }; 