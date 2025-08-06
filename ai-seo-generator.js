// AI SEO Generator for Location Pages
// Uses AI to automatically generate meta titles, descriptions, and keywords

const aiSEOGenerator = {
    // OpenAI API configuration - use environment variable or fallback
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'your_openai_api_key_here',
    
    // Generate AI-powered meta title
    async generateAIMetaTitle(city, state, serviceType = 'vending services') {
        const prompt = `Generate a compelling SEO meta title for a vending services business in ${city}, ${state}. 
        The title should be under 60 characters and include the city, state, and service type.
        Format: [Service Type] in [City], [State] - [Benefit/Value Proposition]
        Example: "Vending Services in New York, NY - Professional Vending Solutions"
        
        Generate for: ${city}, ${state}`;

        try {
            const response = await this.callOpenAI(prompt);
            return response.trim();
        } catch (error) {
            console.error('AI meta title generation failed:', error);
            // Fallback to template-based generation
            return `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} in ${city}, ${state} - Professional Vending Solutions`;
        }
    },

    // Generate AI-powered meta description
    async generateAIMetaDescription(city, state, serviceType = 'vending services') {
        const prompt = `Generate a compelling SEO meta description for a vending services business in ${city}, ${state}.
        The description should be under 160 characters and include:
        - Service type (vending services)
        - Location (${city}, ${state})
        - Key services (snack vending, beverage vending, coffee service)
        - Value proposition (quality, reliability, professional service)
        
        Make it engaging and include relevant keywords naturally.
        Example: "Professional vending services in New York, NY. Snack vending, beverage vending, and coffee service. Quality vending machines and reliable service for your business."
        
        Generate for: ${city}, ${state}`;

        try {
            const response = await this.callOpenAI(prompt);
            return response.trim();
        } catch (error) {
            console.error('AI meta description generation failed:', error);
            // Fallback to template-based generation
            return `Professional ${serviceType} in ${city}, ${state}. Snack vending, beverage vending, and coffee service. Quality vending machines and reliable service for your business.`;
        }
    },

    // Generate AI-powered meta keywords
    async generateAIMetaKeywords(city, state, serviceType = 'vending services') {
        const prompt = `Generate SEO meta keywords for a vending services business in ${city}, ${state}.
        Include:
        - Core service keywords (vending machines, snack vending, beverage vending, coffee service)
        - Location-specific keywords (${city.toLowerCase()}, ${state.toLowerCase()})
        - Long-tail keywords (${city.toLowerCase()} vending, ${state.toLowerCase()} vending)
        - Related terms (office vending, break room vending, healthy vending)
        
        Format as comma-separated keywords, no more than 20 keywords total.
        Example: "vending machines, snack vending, beverage vending, coffee service, vending services, office vending, break room vending, healthy vending, fresh snacks, cold drinks, hot beverages, new york, ny, new york vending, ny vending, new york ny, new york vending machines, new york snack vending, new york beverage vending"
        
        Generate for: ${city}, ${state}`;

        try {
            const response = await this.callOpenAI(prompt);
            return response.trim();
        } catch (error) {
            console.error('AI meta keywords generation failed:', error);
            // Fallback to template-based generation
            const baseKeywords = [
                'vending machines', 'snack vending', 'beverage vending', 'coffee service',
                'vending services', 'office vending', 'break room vending', 'healthy vending',
                'fresh snacks', 'cold drinks', 'hot beverages'
            ];
            const locationKeywords = [
                city.toLowerCase(), state.toLowerCase(),
                `${city.toLowerCase()} vending`, `${state.toLowerCase()} vending`,
                `${city.toLowerCase()} ${state.toLowerCase()}`,
                `${city.toLowerCase()} vending machines`,
                `${city.toLowerCase()} snack vending`,
                `${city.toLowerCase()} beverage vending`
            ];
            return [...baseKeywords, ...locationKeywords].join(', ');
        }
    },

    // Generate AI-powered location description
    async generateAILocationDescription(city, state, serviceType = 'vending services') {
        const prompt = `Generate a compelling location description for a vending services business in ${city}, ${state}.
        The description should be 2-3 sentences and include:
        - Professional tone
        - Service area (${city} and surrounding areas)
        - Key services (snack vending, beverage vending, coffee service)
        - Value proposition (quality, reliability, customer service)
        - Local focus
        
        Make it engaging and professional.
        Example: "Professional vending services in New York, NY. We provide reliable snack vending, beverage vending, and coffee service throughout the NYC area. Our team is committed to delivering quality vending solutions for businesses of all sizes."
        
        Generate for: ${city}, ${state}`;

        try {
            const response = await this.callOpenAI(prompt);
            return response.trim();
        } catch (error) {
            console.error('AI location description generation failed:', error);
            // Fallback to template-based generation
            return `Professional ${serviceType} in ${city}, ${state}. We provide reliable snack vending, beverage vending, and coffee service throughout the ${city} area. Our team is committed to delivering quality vending solutions for businesses of all sizes.`;
        }
    },

    // Generate AI-powered about section
    async generateAIAboutSection(city, state, serviceType = 'vending services') {
        const prompt = `Generate an "About Us" section for a vending services business in ${city}, ${state}.
        The content should be 2-3 sentences and include:
        - Company positioning (trusted provider)
        - Service area (${city}, ${state} and surrounding areas)
        - Commitment to quality and customer service
        - Years of experience or reliability
        - Focus on local business needs
        
        Make it professional and trustworthy.
        Example: "We are a trusted vending services provider serving New York, NY and surrounding areas. Our team is committed to providing reliable, high-quality vending solutions for businesses of all sizes. We pride ourselves on excellent customer service and fresh, quality products."
        
        Generate for: ${city}, ${state}`;

        try {
            const response = await this.callOpenAI(prompt);
            return response.trim();
        } catch (error) {
            console.error('AI about section generation failed:', error);
            // Fallback to template-based generation
            return `We are a trusted ${serviceType} provider serving ${city}, ${state} and surrounding areas. Our team is committed to providing reliable, high-quality vending solutions for businesses of all sizes. We pride ourselves on excellent customer service and fresh, quality products.`;
        }
    },

    // AI API call function - now uses OpenAI by default
    async callAI(prompt) {
        // Use OpenAI API for real AI generation
        return await this.callOpenAI(prompt);
    },

    // OpenAI API integration
    async callOpenAI(prompt) {
        if (!this.OPENAI_API_KEY) {
            throw new Error('OpenAI API key not configured');
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
            
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are an SEO expert specializing in local business optimization. Generate concise, engaging content that ranks well in search engines. Keep responses brief and focused.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    max_tokens: 150,
                    temperature: 0.7
                }),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            
            if (data.error) {
                throw new Error(`OpenAI API error: ${data.error.message}`);
            }
            
            return data.choices[0].message.content;
        } catch (error) {
            console.error('OpenAI API call failed:', error);
            // Provide more detailed error information
            if (error.name === 'AbortError') {
                throw new Error('OpenAI API request timed out');
            } else if (error.message.includes('401')) {
                throw new Error('OpenAI API key is invalid or expired');
            } else if (error.message.includes('429')) {
                throw new Error('OpenAI API rate limit exceeded');
            } else if (error.message.includes('500')) {
                throw new Error('OpenAI API server error');
            } else {
                throw new Error(`OpenAI API error: ${error.message}`);
            }
        }
    },

    // Claude API integration (backup option)
    async callClaude(prompt) {
        // You would need to add your Claude API key
        const CLAUDE_API_KEY = null; // Not configured for browser environment
        
        if (!CLAUDE_API_KEY) {
            throw new Error('Claude API key not configured');
        }

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': CLAUDE_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-sonnet-20240229',
                max_tokens: 150,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });

        const data = await response.json();
        return data.content[0].text;
    },

    // Auto-populate location data with AI-generated SEO fields
    async populateLocationWithAISEO(locationData) {
        const { city, state, name, serviceType = 'vending services' } = locationData;
        
        try {
            console.log('🤖 Generating AI-powered SEO for:', city, state);
            
            // Generate AI-powered SEO fields
            const [metaTitle, metaDescription, metaKeywords, description, about] = await Promise.all([
                this.generateAIMetaTitle(city, state, serviceType),
                this.generateAIMetaDescription(city, state, serviceType),
                this.generateAIMetaKeywords(city, state, serviceType),
                this.generateAILocationDescription(city, state, serviceType),
                this.generateAIAboutSection(city, state, serviceType)
            ]);

            console.log('✅ AI SEO generation completed successfully');

            return {
                ...locationData,
                meta_title: metaTitle,
                meta_description: metaDescription,
                meta_keywords: metaKeywords,
                description: description,
                about: about
            };
        } catch (error) {
            console.error('❌ AI SEO generation failed, using fallback:', error);
            // Fallback to template-based generation
            return this.populateLocationWithTemplateSEO(locationData);
        }
    },

    // Fallback template-based SEO generation
    populateLocationWithTemplateSEO(locationData) {
        const { city, state, serviceType = 'vending services' } = locationData;
        
        return {
            ...locationData,
            meta_title: `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} in ${city}, ${state} - Professional Vending Solutions`,
            meta_description: `Professional ${serviceType} in ${city}, ${state}. Snack vending, beverage vending, and coffee service. Quality vending machines and reliable service for your business.`,
            meta_keywords: this.generateTemplateKeywords(city, state),
            description: `Professional ${serviceType} in ${city}, ${state}. We provide reliable snack vending, beverage vending, and coffee service throughout the ${city} area. Our team is committed to delivering quality vending solutions for businesses of all sizes.`,
            about: `We are a trusted ${serviceType} provider serving ${city}, ${state} and surrounding areas. Our team is committed to providing reliable, high-quality vending solutions for businesses of all sizes. We pride ourselves on excellent customer service and fresh, quality products.`
        };
    },

    // Generate template keywords
    generateTemplateKeywords(city, state) {
        const baseKeywords = [
            'vending machines', 'snack vending', 'beverage vending', 'coffee service',
            'vending services', 'office vending', 'break room vending', 'healthy vending',
            'fresh snacks', 'cold drinks', 'hot beverages'
        ];
        const locationKeywords = [
            city.toLowerCase(), state.toLowerCase(),
            `${city.toLowerCase()} vending`, `${state.toLowerCase()} vending`,
            `${city.toLowerCase()} ${state.toLowerCase()}`,
            `${city.toLowerCase()} vending machines`,
            `${city.toLowerCase()} snack vending`,
            `${city.toLowerCase()} beverage vending`
        ];
        return [...baseKeywords, ...locationKeywords].join(', ');
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { aiSEOGenerator };
} else {
    window.aiSEOGenerator = aiSEOGenerator;
} 