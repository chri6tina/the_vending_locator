import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pittsfield, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pittsfield, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pittsfield businesses.',
  keywords: 'haha coolers Pittsfield, smart vending Pittsfield Massachusetts, grab and go cooler Pittsfield, cashless vending Pittsfield',
  openGraph: {
    title: 'Haha Smart Coolers in Pittsfield, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Pittsfield businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pittsfield-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pittsfield-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PittsfieldMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
