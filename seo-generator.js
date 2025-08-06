// SEO Generator for Location Pages
// Automatically generates meta titles, descriptions, and keywords based on city data

const seoGenerator = {
    // Generate meta title
    generateMetaTitle(city, state, serviceType = 'vending services') {
        const cityState = `${city}, ${state}`;
        return `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} in ${cityState} - Professional Vending Solutions`;
    },

    // Generate meta description
    generateMetaDescription(city, state, serviceType = 'vending services') {
        const cityState = `${city}, ${state}`;
        return `Professional ${serviceType} in ${cityState}. Snack vending, beverage vending, and coffee service. Quality vending machines and reliable service for your business.`;
    },

    // Generate meta keywords
    generateMetaKeywords(city, state, serviceType = 'vending services') {
        const baseKeywords = [
            'vending machines',
            'snack vending',
            'beverage vending',
            'coffee service',
            'vending services',
            'office vending',
            'break room vending',
            'healthy vending',
            'fresh snacks',
            'cold drinks',
            'hot beverages'
        ];
        
        const locationKeywords = [
            city.toLowerCase(),
            state.toLowerCase(),
            `${city.toLowerCase()} vending`,
            `${state.toLowerCase()} vending`,
            `${city.toLowerCase()} ${state.toLowerCase()}`,
            `${city.toLowerCase()} vending machines`,
            `${city.toLowerCase()} snack vending`,
            `${city.toLowerCase()} beverage vending`
        ];

        return [...baseKeywords, ...locationKeywords].join(', ');
    },

    // Generate location description
    generateLocationDescription(city, state, serviceType = 'vending services') {
        const cityState = `${city}, ${state}`;
        return `Professional ${serviceType} in ${cityState}. We provide reliable snack vending, beverage vending, and coffee service throughout the ${city} area. Our team is committed to delivering quality vending solutions for businesses of all sizes.`;
    },

    // Generate about section
    generateAboutSection(city, state, serviceType = 'vending services') {
        const cityState = `${city}, ${state}`;
        return `We are a trusted ${serviceType} provider serving ${cityState} and surrounding areas. Our team is committed to providing reliable, high-quality vending solutions for businesses of all sizes. We pride ourselves on excellent customer service and fresh, quality products.`;
    },

    // Generate structured data for location
    generateStructuredData(location) {
        return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `${location.name || 'Vending Services'} in ${location.city}`,
            "description": location.description || this.generateLocationDescription(location.city, location.state),
            "url": `https://thevendinglocator.com/locations/${location.slug}`,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": location.city,
                "addressRegion": location.state,
                "addressCountry": "US"
            },
            "geo": location.latitude && location.longitude ? {
                "@type": "GeoCoordinates",
                "latitude": location.latitude,
                "longitude": location.longitude
            } : undefined,
            "email": location.email,
            "serviceArea": {
                "@type": "City",
                "name": location.city
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Vending Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Snack Vending"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Beverage Vending"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Coffee Service"
                        }
                    }
                ]
            }
        };
    },

    // Auto-populate location data with SEO fields
    populateLocationWithSEO(locationData) {
        const { city, state, name, serviceType = 'vending services' } = locationData;
        
        return {
            ...locationData,
            meta_title: locationData.meta_title || this.generateMetaTitle(city, state, serviceType),
            meta_description: locationData.meta_description || this.generateMetaDescription(city, state, serviceType),
            meta_keywords: locationData.meta_keywords || this.generateMetaKeywords(city, state, serviceType),
            description: locationData.description || this.generateLocationDescription(city, state, serviceType),
            about: locationData.about || this.generateAboutSection(city, state, serviceType)
        };
    },

    // Generate breadcrumb structured data
    generateBreadcrumbData(location) {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://thevendinglocator.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Locations",
                    "item": "https://thevendinglocator.com/directory"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": location.name || `${location.city} Vending Services`,
                    "item": `https://thevendinglocator.com/locations/${location.slug}`
                }
            ]
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { seoGenerator };
} else {
    window.seoGenerator = seoGenerator;
} 