// Google Analytics 4 Tracking Utility
// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    click_location: location || 'unknown',
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    submission_success: success,
  });
};

// Track service card clicks
export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_click', {
    service_name: serviceName,
  });
};

// Track navigation clicks
export const trackNavClick = (navItem: string) => {
  trackEvent('navigation_click', {
    nav_item: navItem,
  });
};

// Track CTA interactions
export const trackCTA = (ctaName: string, ctaLocation: string) => {
  trackEvent('cta_interaction', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: percentage,
  });
};

// Track video engagement
export const trackVideoEngagement = (action: 'play' | 'pause' | 'complete', videoTitle?: string) => {
  trackEvent('video_engagement', {
    video_action: action,
    video_title: videoTitle || 'unknown',
  });
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  trackEvent('external_link_click', {
    link_url: url,
  });
};
