import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cambridge, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cambridge, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cambridge businesses.',
  keywords: 'haha coolers Cambridge, smart vending Cambridge Massachusetts, grab and go cooler Cambridge, cashless vending Cambridge',
  openGraph: {
    title: 'Haha Smart Coolers in Cambridge, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Cambridge businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cambridge-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cambridge-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CambridgeMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
