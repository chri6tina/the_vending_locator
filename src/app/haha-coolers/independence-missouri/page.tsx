import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Independence, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Independence, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Independence businesses.',
  keywords: 'haha coolers Independence, smart vending Independence Missouri, grab and go cooler Independence, cashless vending Independence',
  openGraph: {
    title: 'Haha Smart Coolers in Independence, Missouri',
    description: 'Revolutionary grab & go vending technology for Independence businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/independence-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/independence-missouri',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function IndependenceMissouriCoolerPageMetadata() {
  return <PageClient />;
}
