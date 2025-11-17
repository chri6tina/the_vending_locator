import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Peabody, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Peabody, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Peabody businesses.',
  keywords: 'haha coolers Peabody, smart vending Peabody Massachusetts, grab and go cooler Peabody, cashless vending Peabody',
  openGraph: {
    title: 'Haha Smart Coolers in Peabody, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Peabody businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/peabody-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/peabody-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PeabodyMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
