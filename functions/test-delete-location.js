const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event, context) => {
    try {
        // Check environment variables
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        console.log('Environment check:');
        console.log('- SUPABASE_URL exists:', !!supabaseUrl);
        console.log('- SUPABASE_ANON_KEY exists:', !!supabaseAnonKey);
        console.log('- SUPABASE_SERVICE_ROLE_KEY exists:', !!supabaseServiceKey);

        if (!supabaseUrl || !supabaseServiceKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: 'Missing required environment variables',
                    supabaseUrl: !!supabaseUrl,
                    supabaseServiceKey: !!supabaseServiceKey
                })
            };
        }

        // Test service role connection
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        
        // Try to read from locations table
        const { data, error } = await supabase
            .from('locations')
            .select('id, name, city, state')
            .limit(1);

        if (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: 'Database connection failed',
                    details: error.message
                })
            };
        }

        // Try to delete a test record (this will fail if RLS blocks it)
        const { error: deleteError } = await supabase
            .from('locations')
            .delete()
            .eq('id', 999999); // Non-existent ID to test permissions

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Delete location test completed',
                environment: {
                    supabaseUrl: !!supabaseUrl,
                    supabaseServiceKey: !!supabaseServiceKey
                },
                databaseConnection: 'success',
                deletePermissions: deleteError ? 'blocked' : 'allowed',
                deleteError: deleteError ? deleteError.message : null,
                sampleData: data
            })
        };

    } catch (error) {
        console.error('Test function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Test function failed',
                details: error.message
            })
        };
    }
}; 