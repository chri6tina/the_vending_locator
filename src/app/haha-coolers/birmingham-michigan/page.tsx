import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Birmingham, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Birmingham, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Birmingham businesses.',
  keywords: 'haha coolers Birmingham, smart vending Birmingham Michigan, grab and go cooler Birmingham, cashless vending Birmingham',
  openGraph: {
    title: 'Haha Smart Coolers in Birmingham, Michigan',
    description: 'Revolutionary grab & go vending technology for Birmingham businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/birmingham-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/birmingham-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BirminghamMichiganCoolerPageMetadata() {
  return <PageClient />;
}
