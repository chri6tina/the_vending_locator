import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cicero, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cicero, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cicero businesses.',
  keywords: 'haha coolers Cicero, smart vending Cicero Illinois, grab and go cooler Cicero, cashless vending Cicero',
  openGraph: {
    title: 'Haha Smart Coolers in Cicero, Illinois',
    description: 'Revolutionary grab & go vending technology for Cicero businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cicero-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cicero-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CiceroIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
