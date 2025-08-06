// Location SEO Populator
// Dynamically updates meta tags and structured data on location pages

// Load SEO generator from CDN or use local version
async function loadSEOGenerator() {
    if (window.seoGenerator) {
        return window.seoGenerator;
    }

    // Load from local file if available
    const script = document.createElement('script');
    script.src = '/seo-generator.js';
    document.head.appendChild(script);
    
    return new Promise((resolve) => {
        script.onload = () => resolve(window.seoGenerator);
    });
}

// Update meta tags on the page
function updateMetaTags(location) {
    // Update title
    if (location.meta_title) {
        document.title = location.meta_title;
    }

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = location.meta_description || '';

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = location.meta_keywords || '';

    // Update Open Graph tags
    updateOpenGraphTags(location);

    // Update Twitter Card tags
    updateTwitterCardTags(location);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
    }
    canonical.href = `https://thevendinglocator.com/locations/${location.slug}`;
}

// Update Open Graph tags
function updateOpenGraphTags(location) {
    const ogTags = {
        'og:title': location.meta_title || `Vending Services in ${location.city}, ${location.state}`,
        'og:description': location.meta_description || '',
        'og:type': 'website',
        'og:url': `https://thevendinglocator.com/locations/${location.slug}`,
        'og:image': 'https://thevendinglocator.com/favicon.svg',
        'og:site_name': 'The Vending Locator'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.content = content;
    });
}

// Update Twitter Card tags
function updateTwitterCardTags(location) {
    const twitterTags = {
        'twitter:card': 'summary_large_image',
        'twitter:title': location.meta_title || `Vending Services in ${location.city}, ${location.state}`,
        'twitter:description': location.meta_description || '',
        'twitter:image': 'https://thevendinglocator.com/favicon.svg'
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.name = name;
            document.head.appendChild(tag);
        }
        tag.content = content;
    });
}

// Update structured data
function updateStructuredData(location) {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
        if (script.textContent.includes('LocalBusiness') || script.textContent.includes('BreadcrumbList')) {
            script.remove();
        }
    });

    // Add new structured data
    const seoGenerator = window.seoGenerator;
    if (seoGenerator) {
        // LocalBusiness structured data
        const businessData = seoGenerator.generateStructuredData(location);
        const businessScript = document.createElement('script');
        businessScript.type = 'application/ld+json';
        businessScript.textContent = JSON.stringify(businessData, null, 2);
        document.head.appendChild(businessScript);

        // Breadcrumb structured data
        const breadcrumbData = seoGenerator.generateBreadcrumbData(location);
        const breadcrumbScript = document.createElement('script');
        breadcrumbScript.type = 'application/ld+json';
        breadcrumbScript.textContent = JSON.stringify(breadcrumbData, null, 2);
        document.head.appendChild(breadcrumbScript);
    }
}

// Update page content with location data
function updatePageContent(location) {
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `
            <span class="highlight">Professional Vending Solutions</span><br>
            in ${location.city}, ${location.state}
        `;
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = location.description || '';
    }

    // Update location name throughout the page
    const locationNameElements = document.querySelectorAll('[data-location-name]');
    locationNameElements.forEach(element => {
        element.textContent = location.name || `Vending Services in ${location.city}`;
    });

    // Update about section
    const aboutElement = document.querySelector('[data-location-about]');
    if (aboutElement) {
        aboutElement.textContent = location.about || '';
    }

    // Update contact information
    if (location.email) {
        const emailElement = document.querySelector('[data-location-email]');
        if (emailElement) {
            emailElement.textContent = location.email;
        }
    }

    if (location.website) {
        const websiteElement = document.querySelector('[data-location-website]');
        if (websiteElement) {
            websiteElement.textContent = location.website;
        }
    }

    if (location.address) {
        const addressElement = document.querySelector('[data-location-address]');
        if (addressElement) {
            addressElement.textContent = location.address;
        }
    }
}

// Main function to populate location page with SEO data
async function populateLocationPage() {
    try {
        // Extract slug from URL
        const pathSegments = window.location.pathname.split('/');
        const slug = pathSegments[pathSegments.length - 1];

        if (!slug) {
            console.error('No location slug found in URL');
            return;
        }

        // Load SEO generator
        await loadSEOGenerator();

        // Fetch location data from API
        const response = await fetch(`/api/get-location-by-slug/${slug}`);
        const data = await response.json();

        if (!data.success || !data.location) {
            console.error('Location not found:', slug);
            return;
        }

        const location = data.location;

        // Update meta tags
        updateMetaTags(location);

        // Update structured data
        updateStructuredData(location);

        // Update page content
        updatePageContent(location);

        console.log('Location page populated successfully:', location);

    } catch (error) {
        console.error('Error populating location page:', error);
    }
}

// Auto-populate when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateLocationPage);
} else {
    populateLocationPage();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { populateLocationPage };
} else {
    window.populateLocationPage = populateLocationPage;
} 