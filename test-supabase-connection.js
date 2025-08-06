// Test Supabase Connection
const { locationService } = require('./functions/supabase-client');

async function testConnection() {
    console.log('Testing Supabase connection...');
    
    try {
        // Test getting all locations
        const locations = await locationService.getAllLocations();
        console.log('✅ Connection successful!');
        console.log(`Found ${locations.length} locations in database`);
        
        if (locations.length > 0) {
            console.log('Sample location:', locations[0]);
        }
        
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        console.log('Please check:');
        console.log('1. Your Supabase URL and key are correct');
        console.log('2. The locations table exists in your database');
        console.log('3. You ran the supabase-setup.sql script');
    }
}

testConnection(); 