import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Vineland, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Vineland, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Vineland businesses.',
  keywords: 'haha coolers Vineland, smart vending Vineland New Jersey, grab and go cooler Vineland, cashless vending Vineland',
  openGraph: {
    title: 'Haha Smart Coolers in Vineland, New Jersey',
    description: 'Revolutionary grab & go vending technology for Vineland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/vineland-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/vineland-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function VinelandNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
