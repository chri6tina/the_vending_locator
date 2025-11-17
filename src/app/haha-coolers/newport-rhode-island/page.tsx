import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Newport, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Newport, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Newport businesses.',
  keywords: 'haha coolers Newport, smart vending Newport Rhode Island, grab and go cooler Newport, cashless vending Newport',
  openGraph: {
    title: 'Haha Smart Coolers in Newport, Rhode Island',
    description: 'Revolutionary grab & go vending technology for Newport businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/newport-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/newport-rhode-island',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NewportRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
