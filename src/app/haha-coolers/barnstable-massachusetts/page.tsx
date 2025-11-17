import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Barnstable, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Barnstable, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Barnstable businesses.',
  keywords: 'haha coolers Barnstable, smart vending Barnstable Massachusetts, grab and go cooler Barnstable, cashless vending Barnstable',
  openGraph: {
    title: 'Haha Smart Coolers in Barnstable, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Barnstable businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/barnstable-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/barnstable-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BarnstableMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
