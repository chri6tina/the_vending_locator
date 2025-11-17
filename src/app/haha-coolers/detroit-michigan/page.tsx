import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Detroit, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Detroit, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Detroit businesses.',
  keywords: 'haha coolers Detroit, smart vending Detroit Michigan, grab and go cooler Detroit, cashless vending Detroit',
  openGraph: {
    title: 'Haha Smart Coolers in Detroit, Michigan',
    description: 'Revolutionary grab & go vending technology for Detroit businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/detroit-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/detroit-michigan',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DetroitMichiganCoolerPageMetadata() {
  return <PageClient />;
}
