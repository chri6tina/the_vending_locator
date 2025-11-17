import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Malden, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Malden, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Malden businesses.',
  keywords: 'haha coolers Malden, smart vending Malden Massachusetts, grab and go cooler Malden, cashless vending Malden',
  openGraph: {
    title: 'Haha Smart Coolers in Malden, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Malden businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/malden-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/malden-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MaldenMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
