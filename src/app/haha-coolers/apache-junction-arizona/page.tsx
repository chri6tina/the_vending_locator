import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Apache Junction, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Apache Junction, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Apache Junction businesses.',
  keywords: 'haha coolers Apache Junction, smart vending Apache Junction Arizona, grab and go cooler Apache Junction, cashless vending Apache Junction',
  openGraph: {
    title: 'Haha Smart Coolers in Apache Junction, Arizona',
    description: 'Revolutionary grab & go vending technology for Apache Junction businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/apache-junction-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/apache-junction-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ApacheJunctionArizonaCoolerPageMetadata() {
  return <PageClient />;
}
