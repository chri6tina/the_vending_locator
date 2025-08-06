// AI Location Form Handler
// Automatically fills in SEO fields when adding a new location

class AILocationForm {
    constructor() {
        this.form = null;
        this.aiGenerator = null;
        this.isGenerating = false;
        this.init();
    }

    async init() {
        // Load AI SEO generator
        await this.loadAIGenerator();
        
        // Find the location form
        this.form = document.querySelector('#locationForm') || document.querySelector('form[data-location-form]');
        
        if (this.form) {
            this.setupFormHandlers();
        }
    }

    async loadAIGenerator() {
        // Load AI SEO generator script
        if (!window.aiSEOGenerator) {
            const script = document.createElement('script');
            script.src = '/ai-seo-generator.js';
            document.head.appendChild(script);
            
            await new Promise((resolve) => {
                script.onload = () => resolve();
            });
        }
        
        this.aiGenerator = window.aiSEOGenerator;
    }

    setupFormHandlers() {
        // Auto-generate SEO fields when city/state changes
        const cityInput = this.form.querySelector('#city') || this.form.querySelector('[name="city"]');
        const stateInput = this.form.querySelector('#state') || this.form.querySelector('[name="state"]');
        
        if (cityInput && stateInput) {
            // Add capitalization handlers
            this.setupCapitalization(cityInput, stateInput);
            
            // Debounced function to avoid too many AI calls
            let debounceTimer;
            const debouncedGenerate = () => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    this.generateSEOFields();
                }, 1000); // Wait 1 second after user stops typing
            };
            
            cityInput.addEventListener('input', debouncedGenerate);
            stateInput.addEventListener('input', debouncedGenerate);
        }

        // Add generate button for manual triggering
        this.addGenerateButton();
    }

    addGenerateButton() {
        // Add a "Generate SEO" button
        const seoSection = this.form.querySelector('.seo-fields') || this.form.querySelector('[data-seo-section]');
        
        if (seoSection) {
            const generateButton = document.createElement('button');
            generateButton.type = 'button';
            generateButton.className = 'btn btn-secondary';
            generateButton.innerHTML = '<i class="fas fa-magic"></i> Generate SEO with AI';
            generateButton.onclick = () => this.generateSEOFields();
            
            // Insert before the SEO fields
            seoSection.insertBefore(generateButton, seoSection.firstChild);
        }
    }

    setupCapitalization(cityInput, stateInput) {
        // Capitalize city input on blur and input
        cityInput.addEventListener('blur', () => {
            cityInput.value = this.capitalizeCity(cityInput.value);
        });
        
        cityInput.addEventListener('input', (e) => {
            // Capitalize as user types (for better UX)
            const cursorPosition = e.target.selectionStart;
            const originalValue = e.target.value;
            const capitalizedValue = this.capitalizeCity(originalValue);
            
            if (originalValue !== capitalizedValue) {
                e.target.value = capitalizedValue;
                // Restore cursor position
                e.target.setSelectionRange(cursorPosition, cursorPosition);
            }
        });
        
        // Capitalize state input on blur and input
        stateInput.addEventListener('blur', () => {
            stateInput.value = this.capitalizeState(stateInput.value);
        });
        
        stateInput.addEventListener('input', (e) => {
            // Capitalize as user types (for better UX)
            const cursorPosition = e.target.selectionStart;
            const originalValue = e.target.value;
            const capitalizedValue = this.capitalizeState(originalValue);
            
            if (originalValue !== capitalizedValue) {
                e.target.value = capitalizedValue;
                // Restore cursor position
                e.target.setSelectionRange(cursorPosition, cursorPosition);
            }
        });
    }

    capitalizeCity(city) {
        if (!city) return city;
        
        // Convert to lowercase first, then capitalize
        city = city.toLowerCase().trim();
        
        // Handle special cases for city names
        const specialWords = ['of', 'the', 'and', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];
        
        return city.split(' ').map((word, index) => {
            // Always capitalize first word
            if (index === 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            
            // Handle special words (lowercase unless they're the last word)
            if (specialWords.includes(word) && index < city.split(' ').length - 1) {
                return word;
            }
            
            // Capitalize other words
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    capitalizeState(state) {
        if (!state) return state;
        
        // Convert to uppercase for state abbreviations
        state = state.toUpperCase().trim();
        
        // Handle full state names (convert to title case)
        const stateNames = {
            'ALABAMA': 'Alabama', 'ALASKA': 'Alaska', 'ARIZONA': 'Arizona', 'ARKANSAS': 'Arkansas',
            'CALIFORNIA': 'California', 'COLORADO': 'Colorado', 'CONNECTICUT': 'Connecticut',
            'DELAWARE': 'Delaware', 'FLORIDA': 'Florida', 'GEORGIA': 'Georgia', 'HAWAII': 'Hawaii',
            'IDAHO': 'Idaho', 'ILLINOIS': 'Illinois', 'INDIANA': 'Indiana', 'IOWA': 'Iowa',
            'KANSAS': 'Kansas', 'KENTUCKY': 'Kentucky', 'LOUISIANA': 'Louisiana', 'MAINE': 'Maine',
            'MARYLAND': 'Maryland', 'MASSACHUSETTS': 'Massachusetts', 'MICHIGAN': 'Michigan',
            'MINNESOTA': 'Minnesota', 'MISSISSIPPI': 'Mississippi', 'MISSOURI': 'Missouri',
            'MONTANA': 'Montana', 'NEBRASKA': 'Nebraska', 'NEVADA': 'Nevada', 'NEW HAMPSHIRE': 'New Hampshire',
            'NEW JERSEY': 'New Jersey', 'NEW MEXICO': 'New Mexico', 'NEW YORK': 'New York',
            'NORTH CAROLINA': 'North Carolina', 'NORTH DAKOTA': 'North Dakota', 'OHIO': 'Ohio',
            'OKLAHOMA': 'Oklahoma', 'OREGON': 'Oregon', 'PENNSYLVANIA': 'Pennsylvania',
            'RHODE ISLAND': 'Rhode Island', 'SOUTH CAROLINA': 'South Carolina', 'SOUTH DAKOTA': 'South Dakota',
            'TENNESSEE': 'Tennessee', 'TEXAS': 'Texas', 'UTAH': 'Utah', 'VERMONT': 'Vermont',
            'VIRGINIA': 'Virginia', 'WASHINGTON': 'Washington', 'WEST VIRGINIA': 'West Virginia',
            'WISCONSIN': 'Wisconsin', 'WYOMING': 'Wyoming'
        };
        
        // Check if it's a full state name
        if (stateNames[state]) {
            return stateNames[state];
        }
        
        // Return as uppercase (for abbreviations like NY, CA, TX, etc.)
        return state;
    }

    async generateSEOFields() {
        if (this.isGenerating) return;
        
        const cityInput = this.form.querySelector('#city') || this.form.querySelector('[name="city"]');
        const stateInput = this.form.querySelector('#state') || this.form.querySelector('[name="state"]');
        
        if (!cityInput || !stateInput || !cityInput.value || !stateInput.value) {
            return;
        }

        this.isGenerating = true;
        this.showLoadingState();

        try {
            const city = cityInput.value.trim();
            const state = stateInput.value.trim();
            
            // Generate SEO fields using AI
            const seoData = await this.aiGenerator.populateLocationWithAISEO({
                city: city,
                state: state,
                serviceType: 'vending services'
            });

            // Fill in the form fields
            this.fillSEOFields(seoData);
            
            this.showSuccessMessage('SEO fields generated successfully!');
            
        } catch (error) {
            console.error('Error generating SEO fields:', error);
            this.showErrorMessage('Failed to generate SEO fields. Using template instead.');
            
            // Fallback to template generation
            const city = cityInput.value.trim();
            const state = stateInput.value.trim();
            const seoData = this.aiGenerator.populateLocationWithTemplateSEO({
                city: city,
                state: state,
                serviceType: 'vending services'
            });
            
            this.fillSEOFields(seoData);
        } finally {
            this.isGenerating = false;
            this.hideLoadingState();
        }
    }

    fillSEOFields(seoData) {
        // Fill in meta title
        const metaTitleInput = this.form.querySelector('#meta_title') || this.form.querySelector('[name="meta_title"]');
        if (metaTitleInput) {
            metaTitleInput.value = seoData.meta_title || '';
        }

        // Fill in meta description
        const metaDescInput = this.form.querySelector('#meta_description') || this.form.querySelector('[name="meta_description"]');
        if (metaDescInput) {
            metaDescInput.value = seoData.meta_description || '';
        }

        // Fill in meta keywords
        const metaKeywordsInput = this.form.querySelector('#meta_keywords') || this.form.querySelector('[name="meta_keywords"]');
        if (metaKeywordsInput) {
            metaKeywordsInput.value = seoData.meta_keywords || '';
        }

        // Fill in description
        const descInput = this.form.querySelector('#description') || this.form.querySelector('[name="description"]');
        if (descInput) {
            descInput.value = seoData.description || '';
        }

        // Fill in about section
        const aboutInput = this.form.querySelector('#about') || this.form.querySelector('[name="about"]');
        if (aboutInput) {
            aboutInput.value = seoData.about || '';
        }

        // Update character counters if they exist
        this.updateCharacterCounters();
    }

    updateCharacterCounters() {
        // Update character counters for SEO fields
        const metaTitleInput = this.form.querySelector('#meta_title') || this.form.querySelector('[name="meta_title"]');
        const metaDescInput = this.form.querySelector('#meta_description') || this.form.querySelector('[name="meta_description"]');
        
        if (metaTitleInput) {
            const counter = this.form.querySelector('.meta-title-counter');
            if (counter) {
                counter.textContent = `${metaTitleInput.value.length}/60`;
                counter.className = metaTitleInput.value.length > 60 ? 'text-danger' : 'text-success';
            }
        }
        
        if (metaDescInput) {
            const counter = this.form.querySelector('.meta-desc-counter');
            if (counter) {
                counter.textContent = `${metaDescInput.value.length}/160`;
                counter.className = metaDescInput.value.length > 160 ? 'text-danger' : 'text-success';
            }
        }
    }

    showLoadingState() {
        // Show loading spinner
        const generateButton = this.form.querySelector('.btn-secondary');
        if (generateButton) {
            generateButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            generateButton.disabled = true;
        }
    }

    hideLoadingState() {
        // Hide loading spinner
        const generateButton = this.form.querySelector('.btn-secondary');
        if (generateButton) {
            generateButton.innerHTML = '<i class="fas fa-magic"></i> Generate SEO with AI';
            generateButton.disabled = false;
        }
    }

    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = this.form.querySelector('.ai-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message alert alert-${type === 'success' ? 'success' : 'danger'} mt-2`;
        messageDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
            ${message}
        `;

        // Insert after the form
        this.form.parentNode.insertBefore(messageDiv, this.form.nextSibling);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }


}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AILocationForm();
    });
} else {
    new AILocationForm();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AILocationForm };
} else {
    window.AILocationForm = AILocationForm;
} 