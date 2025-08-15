// Google Ads Conversion Tracking Utilities
// This file provides functions to track conversions across your website

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Conversion event types
export type ConversionEvent = 
  | 'form_submission'
  | 'contact_request'
  | 'pricing_view'
  | 'service_inquiry'
  | 'location_search'
  | 'lead_generation'
  | 'purchase'
  | 'signup'
  | 'download';

// Conversion tracking function
export function trackConversion(
  event: ConversionEvent,
  value?: number,
  currency: string = 'USD',
  transactionId?: string
) {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      // Track the conversion event
      window.gtag('event', 'conversion', {
        send_to: 'AW-16569722490',
        value: value,
        currency: currency,
        transaction_id: transactionId,
        event_callback: () => {
          console.log(`✅ Conversion tracked: ${event}`, {
            value,
            currency,
            transactionId
          });
        }
      });

      // Also track as a custom event for analytics
      window.gtag('event', event, {
        event_category: 'conversion',
        event_label: event,
        value: value,
        currency: currency
      });

    } catch (error) {
      console.error('Error tracking conversion:', error);
    }
  } else {
    console.warn('Google Ads tracking not loaded yet');
  }
}

// Form submission conversion tracking
export function trackFormSubmission(
  formType: string,
  page: string,
  value?: number
) {
  trackConversion('form_submission', value);
  
  // Additional form-specific tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: `${formType}_${page}`,
      form_type: formType,
      page: page
    });
  }
}

// Contact request conversion tracking
export function trackContactRequest(
  contactMethod: string,
  page: string
) {
  trackConversion('contact_request');
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_request', {
      event_category: 'engagement',
      event_label: `${contactMethod}_${page}`,
      contact_method: contactMethod,
      page: page
    });
  }
}

// Pricing view conversion tracking
export function trackPricingView(
  planType?: string,
  page: string = '/pricing'
) {
  trackConversion('pricing_view');
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'pricing_view', {
      event_category: 'engagement',
      event_label: planType || 'general',
      plan_type: planType,
      page: page
    });
  }
}

// Service inquiry conversion tracking
export function trackServiceInquiry(
  serviceType: string,
  page: string
) {
  trackConversion('service_inquiry');
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_inquiry', {
      event_category: 'engagement',
      event_label: `${serviceType}_${page}`,
      service_type: serviceType,
      page: page
    });
  }
}

// Location search conversion tracking
export function trackLocationSearch(
  location: string,
  searchType: string = 'zipcode'
) {
  trackConversion('location_search');
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'location_search', {
      event_category: 'engagement',
      event_label: `${searchType}_${location}`,
      search_type: searchType,
      location: location
    });
  }
}

// Lead generation conversion tracking
export function trackLeadGeneration(
  leadType: string,
  page: string,
  value?: number
) {
  trackConversion('lead_generation', value);
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'lead_generation', {
      event_category: 'conversion',
      event_label: `${leadType}_${page}`,
      lead_type: leadType,
      page: page,
      value: value
    });
  }
}

// Purchase conversion tracking
export function trackPurchase(
  productId: string,
  value: number,
  currency: string = 'USD',
  transactionId?: string
) {
  trackConversion('purchase', value, currency, transactionId);
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: [{
        item_id: productId,
        item_name: productId
      }]
    });
  }
}

// Signup conversion tracking
export function trackSignup(
  signupType: string,
  page: string
) {
  trackConversion('signup');
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'sign_up', {
      event_category: 'engagement',
      event_label: `${signupType}_${page}`,
      signup_type: signupType,
      page: page
    });
  }
}

// Download conversion tracking
export function trackDownload(
  downloadType: string,
  fileName: string
) {
  trackConversion('download');
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      event_category: 'engagement',
      event_label: `${downloadType}_${fileName}`,
      download_type: downloadType,
      file_name: fileName
    });
  }
}
