import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lawton, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lawton, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lawton businesses.',
  keywords: 'haha coolers Lawton, smart vending Lawton Oklahoma, grab and go cooler Lawton, cashless vending Lawton',
  openGraph: {
    title: 'Haha Smart Coolers in Lawton, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Lawton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lawton-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lawton-oklahoma',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LawtonOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
