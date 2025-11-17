import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hobbs, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hobbs, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hobbs businesses.',
  keywords: 'haha coolers Hobbs, smart vending Hobbs New Mexico, grab and go cooler Hobbs, cashless vending Hobbs',
  openGraph: {
    title: 'Haha Smart Coolers in Hobbs, New Mexico',
    description: 'Revolutionary grab & go vending technology for Hobbs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hobbs-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hobbs-new-mexico',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HobbsNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
