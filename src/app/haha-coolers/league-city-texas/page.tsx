import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in League City, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in League City, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for League City businesses.',
  keywords: 'haha coolers League City, smart vending League City Texas, grab and go cooler League City, cashless vending League City',
  openGraph: {
    title: 'Haha Smart Coolers in League City, Texas',
    description: 'Revolutionary grab & go vending technology for League City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/league-city-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/league-city-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LeagueCityTexasCoolerPageMetadata() {
  return <PageClient />;
}
