import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Westland, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Westland, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Westland businesses.',
  keywords: 'haha coolers Westland, smart vending Westland Michigan, grab and go cooler Westland, cashless vending Westland',
  openGraph: {
    title: 'Haha Smart Coolers in Westland, Michigan',
    description: 'Revolutionary grab & go vending technology for Westland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/westland-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/westland-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WestlandMichiganCoolerPageMetadata() {
  return <PageClient />;
}
