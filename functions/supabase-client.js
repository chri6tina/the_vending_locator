const { supabase } = require('./supabase-config');

// Location service for database operations
const locationService = {
    // Get all locations
    async getAllLocations() {
        try {
            const { data, error } = await supabase
                .from('locations')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching locations:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in getAllLocations:', error);
            throw error;
        }
    },

    // Get location by slug
    async getLocationBySlug(slug) {
        try {
            const { data, error } = await supabase
                .from('locations')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error) {
                if (error.code === 'PGRST116') {
                    // No rows found - return null instead of throwing
                    return null;
                }
                console.error('Error fetching location by slug:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in getLocationBySlug:', error);
            throw error;
        }
    },

    // Save new location
    async saveLocation(locationData) {
        try {
            const { data, error } = await supabase
                .from('locations')
                .insert([locationData])
                .select()
                .single();

            if (error) {
                console.error('Error saving location:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in saveLocation:', error);
            throw error;
        }
    },

    // Hard delete a location
    async hardDeleteLocation(id) {
        try {
            const { error } = await supabase
                .from('locations')
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Error deleting location:', error);
                throw error;
            }

            return { success: true };
        } catch (error) {
            console.error('Error in hardDeleteLocation:', error);
            throw error;
        }
    },

    // Hard delete all locations
    async hardDeleteAllLocations() {
        try {
            const { error } = await supabase
                .from('locations')
                .delete()
                .neq('id', 0); // Delete all records

            if (error) {
                console.error('Error deleting all locations:', error);
                throw error;
            }

            return { success: true };
        } catch (error) {
            console.error('Error in hardDeleteAllLocations:', error);
            throw error;
        }
    }
};

module.exports = { locationService }; 