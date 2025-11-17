import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kenner, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kenner, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kenner businesses.',
  keywords: 'haha coolers Kenner, smart vending Kenner Louisiana, grab and go cooler Kenner, cashless vending Kenner',
  openGraph: {
    title: 'Haha Smart Coolers in Kenner, Louisiana',
    description: 'Revolutionary grab & go vending technology for Kenner businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kenner-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kenner-louisiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KennerLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
