import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ann Arbor, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ann Arbor, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ann Arbor businesses.',
  keywords: 'haha coolers Ann Arbor, smart vending Ann Arbor Michigan, grab and go cooler Ann Arbor, cashless vending Ann Arbor',
  openGraph: {
    title: 'Haha Smart Coolers in Ann Arbor, Michigan',
    description: 'Revolutionary grab & go vending technology for Ann Arbor businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ann-arbor-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ann-arbor-michigan',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AnnArborMichiganCoolerPageMetadata() {
  return <PageClient />;
}
