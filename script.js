// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Live User Counter
let currentUserCount = 23; // Starting count

function updateLiveCounter() {
    const counter = document.getElementById('liveCounter');
    if (!counter) return;
    
    // Realistic range of users getting their list
    const minUsers = 18;
    const maxUsers = 42;
    
    // Change by 1-3 users (sometimes up, sometimes down)
    const change = Math.random() > 0.5 ? 
        Math.floor(Math.random() * 3) + 1 : 
        -(Math.floor(Math.random() * 3) + 1);
    
    // Calculate new count within realistic bounds
    const newCount = Math.max(minUsers, Math.min(maxUsers, currentUserCount + change));
    currentUserCount = newCount;
    
    // Animate the number change
    counter.style.transform = 'scale(1.1)';
    counter.style.color = '#60a5fa';
    
    setTimeout(() => {
        counter.textContent = newCount;
        counter.style.transform = 'scale(1)';
        counter.style.color = '#2c3e50';
    }, 150);
}

// Update counter every 10-15 seconds (more realistic intervals)
function startLiveCounter() {
    updateLiveCounter();
    
    // Random interval between 10-15 seconds
    const interval = Math.random() * 5000 + 10000; // 10-15 seconds
    setTimeout(startLiveCounter, interval);
}

// Start the live counter when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start the live counter after a short delay
    setTimeout(startLiveCounter, 2000);
    
    // Also update immediately for better UX
    setTimeout(updateLiveCounter, 1000);
});

// Interactive Pricing Tabs
function initInteractivePricing() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const packageInfos = document.querySelectorAll('.package-info');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageType = this.getAttribute('data-package');
            
            // Remove active class from all tabs and package infos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            packageInfos.forEach(info => info.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding package info
            const targetPackage = document.querySelector(`[data-package="${packageType}"]`);
            if (targetPackage) {
                targetPackage.classList.add('active');
            }
        });
    });
}

// Mobile Pricing Accordion
document.addEventListener('DOMContentLoaded', function() {
    const packageHeaders = document.querySelectorAll('.package-header');
    
    packageHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle active class on header
            this.classList.toggle('active');
            
            // Toggle content visibility
            if (content.style.display === 'block') {
                content.style.display = 'none';
                content.classList.remove('active');
            } else {
                content.style.display = 'block';
                content.classList.add('active');
            }
        });
    });

    // Initialize interactive pricing
    initInteractivePricing();

    // Initialize live counter
    initLiveCounter();

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-accordion-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                item.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});

// Smooth scrolling for anchor links
function scrollToForm() {
    const formSection = document.getElementById('lead-form');
    if (formSection) {
        formSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    // Lead form handling
    const locationForm = document.getElementById('locationForm');
    if (locationForm) {
        locationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const zipcode = document.getElementById('zipcode').value;
            const email = document.getElementById('email').value;
            
            if (zipcode && email) {
                // Save lead to localStorage
                const leads = JSON.parse(localStorage.getItem('vendingLeads') || '[]');
                const newLead = {
                    date: new Date().toISOString(),
                    email: email,
                    zipcode: zipcode,
                    status: 'new'
                };
                leads.push(newLead);
                localStorage.setItem('vendingLeads', JSON.stringify(leads));
                
                // Show success message
                showNotification('Thank you! We\'ll send your hot leads alerts to ' + email + ' within 3-5 business days.', 'success');
                locationForm.reset();
            }
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
                contactForm.reset();
            }
        });
    }

    // Newsletter form handling
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                form.reset();
            }
        });
    });
});

// Blog filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter posts
            blogPosts.forEach(post => {
                const postCategory = post.getAttribute('data-category');
                
                if (category === 'all' || category === postCategory) {
                    post.style.display = 'block';
                    post.classList.add('fade-in');
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    
    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll('.step, .benefit-card, .testimonial-card, .pricing-card, .blog-post, .location-card, .faq-item');
    animateElements.forEach(element => {
        element.classList.add('fade-in');
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(notificationStyles);

// Pricing table responsive behavior
function handlePricingTableResponsive() {
    const pricingTable = document.querySelector('.pricing-table');
    if (!pricingTable) return;
    
    const isMobile = window.innerWidth <= 768;
    const pricingRows = document.querySelectorAll('.pricing-row');
    
    pricingRows.forEach(row => {
        const cells = row.querySelectorAll('div');
        cells.forEach((cell, index) => {
            if (isMobile) {
                // Add labels for mobile view
                const labels = ['Package', 'Price', 'Locations', 'Features', 'Action'];
                if (index < labels.length) {
                    cell.setAttribute('data-label', labels[index]);
                }
            }
        });
    });
}

// Handle window resize
window.addEventListener('resize', handlePricingTableResponsive);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    handlePricingTableResponsive();
});

// Add loading states to buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    return function() {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Enhanced form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
            
            // Remove error styling after user starts typing
            input.addEventListener('input', function() {
                this.style.borderColor = '#e2e8f0';
            });
        }
    });
    
    return isValid;
}

// Add form validation to all forms
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
});

// Smooth scroll for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.benefit-card, .testimonial-card, .pricing-card, .blog-post, .location-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Newsletter form enhancement
document.addEventListener('DOMContentLoaded', function() {
    const newsletterInputs = document.querySelectorAll('.newsletter-form input[type="email"]');
    
    newsletterInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});

// Add counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.location-count');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when pricing section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const pricingSection = document.querySelector('.pricing-table-section');
    if (pricingSection) {
        observer.observe(pricingSection);
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Enter key to submit forms when focused
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (button.textContent.trim()) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2563eb';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Make pricing table rows clickable
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to pricing values
    const pricingValues = document.querySelectorAll('.basic-value, .pro-value, .start-value, .gold-value');
    
    pricingValues.forEach(value => {
        value.addEventListener('click', function() {
            const packageName = this.className.split('-')[0].replace('value', '').charAt(0).toUpperCase() + 
                              this.className.split('-')[0].replace('value', '').slice(1);
            
            let price, stripeUrl;
            
            switch(packageName.toLowerCase()) {
                case 'basic':
                    price = '19';
                    stripeUrl = 'https://buy.stripe.com/aEU2929ZcfvQ10IdQT';
                    break;
                case 'pro':
                    price = '29';
                    stripeUrl = 'https://buy.stripe.com/4gwaFyfjw1F0gZG004';
                    break;
                case 'start':
                    price = '129';
                    stripeUrl = 'https://buy.stripe.com/3cs8xq2wKdnI6l24gl';
                    break;
                case 'gold':
                    price = '899';
                    stripeUrl = 'https://buy.stripe.com/dR614Y4ESgzU6l25kq';
                    break;
                default:
                    return;
            }
            
            openPurchaseModal(packageName, price, stripeUrl);
        });
    });
    
    // Add click handlers to entire pricing rows
    const pricingRows = document.querySelectorAll('.pricing-row');
    
    pricingRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Don't trigger if clicking on a value (already handled above)
            if (e.target.classList.contains('basic-value') || 
                e.target.classList.contains('pro-value') || 
                e.target.classList.contains('start-value') || 
                e.target.classList.contains('gold-value')) {
                return;
            }
            
            // Find which column was clicked
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const columnWidth = rect.width / 5; // 5 columns
            
            let packageName, price, stripeUrl;
            
            if (clickX >= columnWidth && clickX < columnWidth * 2) {
                // Basic column
                packageName = 'Basic';
                price = '19';
                stripeUrl = 'https://buy.stripe.com/aEU2929ZcfvQ10IdQT';
            } else if (clickX >= columnWidth * 2 && clickX < columnWidth * 3) {
                // Pro column
                packageName = 'Pro';
                price = '29';
                stripeUrl = 'https://buy.stripe.com/4gwaFyfjw1F0gZG004';
            } else if (clickX >= columnWidth * 3 && clickX < columnWidth * 4) {
                // Start column
                packageName = 'Start';
                price = '129';
                stripeUrl = 'https://buy.stripe.com/3cs8xq2wKdnI6l24gl';
            } else if (clickX >= columnWidth * 4 && clickX < columnWidth * 5) {
                // Gold column
                packageName = 'Gold';
                price = '899';
                stripeUrl = 'https://buy.stripe.com/dR614Y4ESgzU6l25kq';
            } else {
                return; // Clicked on feature description column
            }
            
            openPurchaseModal(packageName, price, stripeUrl);
        });
    });
});

console.log('The Vending Locator website loaded successfully!'); 