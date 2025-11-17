import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Everett, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Everett, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Everett businesses.',
  keywords: 'haha coolers Everett, smart vending Everett Washington, grab and go cooler Everett, cashless vending Everett',
  openGraph: {
    title: 'Haha Smart Coolers in Everett, Washington',
    description: 'Revolutionary grab & go vending technology for Everett businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/everett-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/everett-washington',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EverettWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
