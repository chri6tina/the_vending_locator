/**
 * Vending Locator - User Activity Tracking Script
 * This script tracks user behavior across all website pages
 */

(function() {
  'use strict';

  // Configuration
  const TRACKING_CONFIG = {
    apiEndpoint: '/api/tracking/pageview',
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    heartbeatInterval: 30 * 1000, // 30 seconds
    maxRetries: 3,
    retryDelay: 1000
  };

  // Session management
  let sessionId = null;
  let sessionStartTime = null;
  let currentPage = null;
  let pageStartTime = null;
  let heartbeatTimer = null;
  let retryCount = 0;

  // Initialize tracking
  function initTracking() {
    console.log('Vending Locator tracking: initTracking called');
    
    // Check if tracking is enabled
    if (localStorage.getItem('tracking_disabled') === 'true') {
      console.log('Vending Locator tracking: Tracking disabled in localStorage');
      return;
    }

    // Initialize session
    initSession();
    
    // Track initial page view
    trackPageView();
    
    // Set up event listeners
    setupEventListeners();
    
    // Start heartbeat
    startHeartbeat();
    
    // Track page visibility changes
    trackPageVisibility();
    
    console.log('Vending Locator tracking initialized successfully');
  }

  // Initialize or restore session
  function initSession() {
    const storedSession = localStorage.getItem('vl_session_id');
    const storedSessionTime = localStorage.getItem('vl_session_time');
    
    if (storedSession && storedSessionTime) {
      const sessionAge = Date.now() - parseInt(storedSessionTime);
      
      // Check if session is still valid
      if (sessionAge < TRACKING_CONFIG.sessionTimeout) {
        sessionId = storedSession;
        sessionStartTime = parseInt(storedSessionTime);
      } else {
        // Session expired, create new one
        createNewSession();
      }
    } else {
      // No existing session, create new one
      createNewSession();
    }
  }

  // Create new session
  function createNewSession() {
    sessionId = 'vl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStartTime = Date.now();
    
    localStorage.setItem('vl_session_id', sessionId);
    localStorage.setItem('vl_session_time', sessionStartTime.toString());
  }

  // Track page view
  function trackPageView() {
    console.log('Vending Locator tracking: trackPageView called');
    
    const pageData = {
      sessionId: sessionId,
      page: window.location.pathname,
      title: document.title,
      url: window.location.href,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    console.log('Vending Locator tracking: Page data prepared:', pageData);

    // Update current page tracking
    currentPage = window.location.pathname;
    pageStartTime = Date.now();

    // Send to API
    sendTrackingData(pageData);
  }

  // Track page exit
  function trackPageExit() {
    if (currentPage && pageStartTime) {
      const timeOnPage = Math.floor((Date.now() - pageStartTime) / 1000);
      
      const exitData = {
        sessionId: sessionId,
        page: currentPage,
        action: 'page_exit',
        timeOnPage: timeOnPage,
        timestamp: new Date().toISOString()
      };

      // Send exit data
      sendTrackingData(exitData);
    }
  }

  // Send tracking data to API
  function sendTrackingData(data) {
    console.log('Vending Locator tracking: Sending data to API:', data);
    
    fetch(TRACKING_CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log('Vending Locator tracking: API response status:', response.status);
      if (response.ok) {
        retryCount = 0; // Reset retry count on success
        console.log('Vending Locator tracking: Data sent successfully');
      } else {
        console.warn('Tracking API returned error:', response.status);
        handleTrackingError(data);
      }
    })
    .catch(error => {
      console.warn('Failed to send tracking data:', error);
      handleTrackingError(data);
    });
  }

  // Handle tracking errors with retry logic
  function handleTrackingError(data) {
    if (retryCount < TRACKING_CONFIG.maxRetries) {
      retryCount++;
      setTimeout(() => {
        sendTrackingData(data);
      }, TRACKING_CONFIG.retryDelay * retryCount);
    }
  }

  // Set up event listeners
  function setupEventListeners() {
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        trackPageExit();
      } else {
        pageStartTime = Date.now();
      }
    });

    // Track beforeunload (page exit)
    window.addEventListener('beforeunload', trackPageExit);

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Send scroll depth at certain thresholds
        if ([25, 50, 75, 100].includes(scrollDepth)) {
          const scrollData = {
            sessionId: sessionId,
            page: currentPage,
            action: 'scroll_depth',
            scrollDepth: scrollDepth,
            timestamp: new Date().toISOString()
          };
          sendTrackingData(scrollData);
        }
      }
    });

    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target;
      const tagName = target.tagName.toLowerCase();
      
      // Track clicks on buttons, links, and forms
      if (tagName === 'button' || tagName === 'a' || tagName === 'input') {
        const clickData = {
          sessionId: sessionId,
          page: currentPage,
          action: 'click',
          elementType: tagName,
          elementText: target.textContent?.trim() || target.value || '',
          elementClass: target.className || '',
          elementId: target.id || '',
          timestamp: new Date().toISOString()
        };
        sendTrackingData(clickData);
      }
    });
  }

  // Start heartbeat to keep session alive
  function startHeartbeat() {
    heartbeatTimer = setInterval(() => {
      if (sessionId) {
        const heartbeatData = {
          sessionId: sessionId,
          page: currentPage,
          action: 'heartbeat',
          timestamp: new Date().toISOString()
        };
        sendTrackingData(heartbeatData);
      }
    }, TRACKING_CONFIG.heartbeatInterval);
  }

  // Track page visibility changes
  function trackPageVisibility() {
    let isVisible = true;
    let hiddenTime = null;
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isVisible = false;
        hiddenTime = Date.now();
      } else {
        if (hiddenTime) {
          const hiddenDuration = Date.now() - hiddenTime;
          const visibilityData = {
            sessionId: sessionId,
            page: currentPage,
            action: 'page_hidden',
            hiddenDuration: Math.floor(hiddenDuration / 1000),
            timestamp: new Date().toISOString()
          };
          sendTrackingData(visibilityData);
        }
        isVisible = true;
        hiddenTime = null;
      }
    });
  }

  // Public API for manual tracking
  window.VendingLocatorTracker = {
    // Track custom event
    trackEvent: function(action, data = {}) {
      const eventData = {
        sessionId: sessionId,
        page: currentPage,
        action: action,
        ...data,
        timestamp: new Date().toISOString()
      };
      sendTrackingData(eventData);
    },
    
    // Disable tracking
    disable: function() {
      localStorage.setItem('tracking_disabled', 'true');
      if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
      }
      console.log('Vending Locator tracking disabled');
    },
    
    // Enable tracking
    enable: function() {
      localStorage.removeItem('tracking_disabled');
      initTracking();
      console.log('Vending Locator tracking enabled');
    },
    
    // Get current session ID
    getSessionId: function() {
      return sessionId;
    }
  };

  // Initialize tracking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracking);
  } else {
    initTracking();
  }

})();
