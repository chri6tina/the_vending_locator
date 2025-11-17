import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Houston, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Houston, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Houston businesses.',
  keywords: 'haha coolers Houston, smart vending Houston Texas, grab and go cooler Houston, cashless vending Houston',
  openGraph: {
    title: 'Haha Smart Coolers in Houston, Texas',
    description: 'Revolutionary grab & go vending technology for Houston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/houston-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/houston-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HoustonTexasCoolerPageMetadata() {
  return <PageClient />;
}
