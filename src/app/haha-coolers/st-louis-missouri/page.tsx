import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in St. Louis, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in St. Louis, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for St. Louis businesses.',
  keywords: 'haha coolers St. Louis, smart vending St. Louis Missouri, grab and go cooler St. Louis, cashless vending St. Louis',
  openGraph: {
    title: 'Haha Smart Coolers in St. Louis, Missouri',
    description: 'Revolutionary grab & go vending technology for St. Louis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/st-louis-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/st-louis-missouri',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function StLouisMissouriCoolerPageMetadata() {
  return <PageClient />;
}
