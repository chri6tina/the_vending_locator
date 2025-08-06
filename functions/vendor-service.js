const { supabase } = require('./supabase-config');

// Vendor service for database operations
const vendorService = {
    // Get all vendors
    async getAllVendors() {
        try {
            const { data, error } = await supabase
                .from('vendors')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching vendors:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in getAllVendors:', error);
            throw error;
        }
    },

    // Get vendor by ID
    async getVendorById(id) {
        try {
            const { data, error } = await supabase
                .from('vendors')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                if (error.code === 'PGRST116') {
                    return null;
                }
                console.error('Error fetching vendor by ID:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in getVendorById:', error);
            throw error;
        }
    },

    // Save new vendor
    async saveVendor(vendorData) {
        try {
            const { data, error } = await supabase
                .from('vendors')
                .insert([vendorData])
                .select()
                .single();

            if (error) {
                console.error('Error saving vendor:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in saveVendor:', error);
            throw error;
        }
    },

    // Update vendor
    async updateVendor(id, vendorData) {
        try {
            const { data, error } = await supabase
                .from('vendors')
                .update(vendorData)
                .eq('id', id)
                .select()
                .single();

            if (error) {
                console.error('Error updating vendor:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in updateVendor:', error);
            throw error;
        }
    },

    // Delete vendor
    async deleteVendor(id) {
        try {
            const { error } = await supabase
                .from('vendors')
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Error deleting vendor:', error);
                throw error;
            }

            return { success: true };
        } catch (error) {
            console.error('Error in deleteVendor:', error);
            throw error;
        }
    },

    // Search vendors
    async searchVendors(query) {
        try {
            const { data, error } = await supabase
                .from('vendors')
                .select('*')
                .or(`name.ilike.%${query}%,email.ilike.%${query}%,city.ilike.%${query}%,description.ilike.%${query}%`)
                .order('created_at', { ascending: false })
                .limit(50);

            if (error) {
                console.error('Error searching vendors:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in searchVendors:', error);
            throw error;
        }
    },

    // Get vendors by service type
    async getVendorsByService(serviceType) {
        try {
            const { data, error } = await supabase
                .from('vendors')
                .select('*')
                .contains('services', [serviceType])
                .eq('status', 'active')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching vendors by service:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in getVendorsByService:', error);
            throw error;
        }
    },

    // Get vendors by location/area
    async getVendorsByLocation(city, state) {
        try {
            const { data, error } = await supabase
                .from('vendors')
                .select('*')
                .or(`city.eq.${city},state.eq.${state}`)
                .contains('service_areas', [city, state])
                .eq('status', 'active')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching vendors by location:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in getVendorsByLocation:', error);
            throw error;
        }
    }
};

// Vendor assignment service
const vendorAssignmentService = {
    // Get all vendor assignments
    async getAllAssignments() {
        try {
            const { data, error } = await supabase
                .from('vendor_assignments')
                .select(`
                    *,
                    vendors (*),
                    locations (*)
                `)
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching vendor assignments:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in getAllAssignments:', error);
            throw error;
        }
    },

    // Assign vendor to location
    async assignVendorToLocation(vendorId, locationId, serviceAreas = [], notes = '') {
        try {
            // Check if assignment already exists
            const { data: existing } = await supabase
                .from('vendor_assignments')
                .select('*')
                .eq('vendor_id', vendorId)
                .eq('location_id', locationId)
                .single();

            if (existing) {
                // Update existing assignment
                const { data, error } = await supabase
                    .from('vendor_assignments')
                    .update({
                        service_areas: serviceAreas,
                        notes: notes,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', existing.id)
                    .select()
                    .single();

                if (error) throw error;
                return data;
            }

            // Create new assignment
            const { data, error } = await supabase
                .from('vendor_assignments')
                .insert([{
                    vendor_id: vendorId,
                    location_id: locationId,
                    service_areas: serviceAreas,
                    notes: notes,
                    assigned_date: new Date().toISOString()
                }])
                .select()
                .single();

            if (error) {
                console.error('Error assigning vendor to location:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in assignVendorToLocation:', error);
            throw error;
        }
    },

    // Get assignments for a specific location
    async getAssignmentsByLocation(locationId) {
        try {
            const { data, error } = await supabase
                .from('vendor_assignments')
                .select(`
                    *,
                    vendors (*)
                `)
                .eq('location_id', locationId)
                .eq('status', 'active')
                .order('assigned_date', { ascending: false });

            if (error) {
                console.error('Error fetching assignments by location:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in getAssignmentsByLocation:', error);
            throw error;
        }
    },

    // Get assignments for a specific vendor
    async getAssignmentsByVendor(vendorId) {
        try {
            const { data, error } = await supabase
                .from('vendor_assignments')
                .select(`
                    *,
                    locations (*)
                `)
                .eq('vendor_id', vendorId)
                .eq('status', 'active')
                .order('assigned_date', { ascending: false });

            if (error) {
                console.error('Error fetching assignments by vendor:', error);
                throw error;
            }

            return data || [];
        } catch (error) {
            console.error('Error in getAssignmentsByVendor:', error);
            throw error;
        }
    },

    // Remove vendor assignment
    async removeVendorAssignment(assignmentId) {
        try {
            const { error } = await supabase
                .from('vendor_assignments')
                .delete()
                .eq('id', assignmentId);

            if (error) {
                console.error('Error removing vendor assignment:', error);
                throw error;
            }

            return { success: true };
        } catch (error) {
            console.error('Error in removeVendorAssignment:', error);
            throw error;
        }
    },

    // Bulk assign vendors to location
    async bulkAssignVendors(locationId, vendorIds, serviceAreas = []) {
        try {
            const assignments = vendorIds.map(vendorId => ({
                vendor_id: vendorId,
                location_id: locationId,
                service_areas: serviceAreas,
                assigned_date: new Date().toISOString()
            }));

            const { data, error } = await supabase
                .from('vendor_assignments')
                .insert(assignments)
                .select();

            if (error) {
                console.error('Error bulk assigning vendors:', error);
                throw error;
            }

            return data;
        } catch (error) {
            console.error('Error in bulkAssignVendors:', error);
            throw error;
        }
    }
};

module.exports = { vendorService, vendorAssignmentService }; 