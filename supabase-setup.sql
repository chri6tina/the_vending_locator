-- Create locations table in Supabase
-- Run this in your Supabase SQL editor

-- Create the locations table
CREATE TABLE IF NOT EXISTS locations (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    address TEXT,
    email VARCHAR(255),
    website VARCHAR(255),
    phone VARCHAR(50),
    description TEXT,
    about TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords TEXT,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'deleted')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_locations_slug ON locations(slug);
CREATE INDEX IF NOT EXISTS idx_locations_status ON locations(status);
CREATE INDEX IF NOT EXISTS idx_locations_city_state ON locations(city, state);
CREATE INDEX IF NOT EXISTS idx_locations_created_at ON locations(created_at DESC);

-- Create full-text search index
CREATE INDEX IF NOT EXISTS idx_locations_search ON locations USING GIN (
    to_tsvector('english', name || ' ' || city || ' ' || state || ' ' || COALESCE(description, ''))
);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_locations_updated_at 
    BEFORE UPDATE ON locations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to active locations
CREATE POLICY "Allow public read access to active locations" ON locations
    FOR SELECT USING (status = 'active');

-- Create policy to allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users to manage locations" ON locations
    FOR ALL USING (auth.role() = 'authenticated');

-- Insert some sample data (optional)
INSERT INTO locations (name, slug, city, state, address, email, website, description, about, meta_title, meta_description, meta_keywords) VALUES
(
    'Vending Services New York',
    'new-york-ny',
    'New York',
    'NY',
    'New York, NY',
    'info@vendingny.com',
    'https://vendingny.com',
    'Professional vending machine services in New York City. We provide snack vending, beverage vending, and coffee service throughout the NYC area.',
    'We are a trusted vending machine provider serving New York City and surrounding areas. Our team is committed to providing reliable, high-quality vending solutions for businesses of all sizes.',
    'Vending Services New York NY - Professional Vending Solutions',
    'Professional vending machine services in New York City. Snack vending, beverage vending, and coffee service throughout NYC.',
    'vending machines, snack vending, beverage vending, coffee service, New York, NYC'
),
(
    'Vending Services Los Angeles',
    'los-angeles-ca',
    'Los Angeles',
    'CA',
    'Los Angeles, CA',
    'info@vendingla.com',
    'https://vendingla.com',
    'Reliable vending machine services in Los Angeles. We offer snack vending, beverage vending, and coffee service across LA.',
    'Serving Los Angeles with quality vending solutions since 2010. We pride ourselves on reliable service and fresh products.',
    'Vending Services Los Angeles CA - Reliable Vending Solutions',
    'Reliable vending machine services in Los Angeles. Snack vending, beverage vending, and coffee service across LA.',
    'vending machines, snack vending, beverage vending, coffee service, Los Angeles, LA'
);

-- Create a view for easier querying
CREATE OR REPLACE VIEW active_locations AS
SELECT 
    id,
    name,
    slug,
    city,
    state,
    address,
    email,
    website,
    phone,
    description,
    about,
    latitude,
    longitude,
    meta_title,
    meta_description,
    meta_keywords,
    created_at,
    updated_at
FROM locations 
WHERE status = 'active'
ORDER BY created_at DESC; 

-- Create vendors table
CREATE TABLE IF NOT EXISTS vendors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    website VARCHAR(255),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(2),
    description TEXT,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
    icon VARCHAR(100) DEFAULT 'fas fa-store',
    years_in_business INTEGER DEFAULT 0,
    service_focus INTEGER DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    services TEXT[], -- Array of service types
    service_areas TEXT[], -- Array of cities/states they serve
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create vendor_assignments table for vendor-location relationships
CREATE TABLE IF NOT EXISTS vendor_assignments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
    location_id BIGINT REFERENCES locations(id) ON DELETE CASCADE,
    assigned_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    service_areas TEXT[], -- Specific service areas for this assignment
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(vendor_id, location_id) -- Prevent duplicate assignments
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_vendors_status ON vendors(status);
CREATE INDEX IF NOT EXISTS idx_vendors_city_state ON vendors(city, state);
CREATE INDEX IF NOT EXISTS idx_vendor_assignments_vendor_id ON vendor_assignments(vendor_id);
CREATE INDEX IF NOT EXISTS idx_vendor_assignments_location_id ON vendor_assignments(location_id);
CREATE INDEX IF NOT EXISTS idx_vendor_assignments_status ON vendor_assignments(status);

-- Enable Row Level Security
ALTER TABLE vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_assignments ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for vendors table
CREATE POLICY "Enable read access for all users" ON vendors
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON vendors
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON vendors
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON vendors
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create RLS policies for vendor_assignments table
CREATE POLICY "Enable read access for all users" ON vendor_assignments
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON vendor_assignments
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON vendor_assignments
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON vendor_assignments
    FOR DELETE USING (auth.role() = 'authenticated');

-- Insert some sample vendors
INSERT INTO vendors (name, email, phone, website, city, state, description, services, service_areas, years_in_business, reviews) VALUES
('Global Vending Services', 'contact@globalvending.com', '(555) 123-4567', 'https://globalvending.com', 'Jacksonville', 'FL', 'Leading vending service provider in Florida with comprehensive snack, beverage, and coffee solutions.', ARRAY['snack-vending', 'beverage-vending', 'coffee-service', 'healthy-options'], ARRAY['Jacksonville', 'Orlando', 'Tampa'], 15, 127),
('Premier Vending Solutions', 'info@premiervending.com', '(555) 234-5678', 'https://premiervending.com', 'Miami', 'FL', 'Premium vending services with focus on healthy options and modern payment systems.', ARRAY['snack-vending', 'beverage-vending', 'healthy-options', 'cashless-payment'], ARRAY['Miami', 'Fort Lauderdale', 'West Palm Beach'], 12, 89),
('Express Vending Co', 'hello@expressvending.com', '(555) 345-6789', 'https://expressvending.com', 'Tampa', 'FL', 'Fast and reliable vending services with 24/7 support and maintenance.', ARRAY['snack-vending', 'beverage-vending', 'maintenance'], ARRAY['Tampa', 'St. Petersburg', 'Clearwater'], 8, 156); 