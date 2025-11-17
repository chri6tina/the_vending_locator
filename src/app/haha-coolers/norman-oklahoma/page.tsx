import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Norman, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Norman, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Norman businesses.',
  keywords: 'haha coolers Norman, smart vending Norman Oklahoma, grab and go cooler Norman, cashless vending Norman',
  openGraph: {
    title: 'Haha Smart Coolers in Norman, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Norman businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/norman-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/norman-oklahoma',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NormanOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
