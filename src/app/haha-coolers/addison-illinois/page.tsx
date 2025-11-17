import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Addison, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Addison, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Addison businesses.',
  keywords: 'haha coolers Addison, smart vending Addison Illinois, grab and go cooler Addison, cashless vending Addison',
  openGraph: {
    title: 'Haha Smart Coolers in Addison, Illinois',
    description: 'Revolutionary grab & go vending technology for Addison businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/addison-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/addison-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AddisonIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
