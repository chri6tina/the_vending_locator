import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Farmington Hills, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Farmington Hills, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Farmington Hills businesses.',
  keywords: 'haha coolers Farmington Hills, smart vending Farmington Hills Michigan, grab and go cooler Farmington Hills, cashless vending Farmington Hills',
  openGraph: {
    title: 'Haha Smart Coolers in Farmington Hills, Michigan',
    description: 'Revolutionary grab & go vending technology for Farmington Hills businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/farmington-hills-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/farmington-hills-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FarmingtonHillsMichiganCoolerPageMetadata() {
  return <PageClient />;
}
