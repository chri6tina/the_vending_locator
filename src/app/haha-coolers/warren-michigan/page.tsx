import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Warren, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Warren, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Warren businesses.',
  keywords: 'haha coolers Warren, smart vending Warren Michigan, grab and go cooler Warren, cashless vending Warren',
  openGraph: {
    title: 'Haha Smart Coolers in Warren, Michigan',
    description: 'Revolutionary grab & go vending technology for Warren businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/warren-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/warren-michigan',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WarrenMichiganCoolerPageMetadata() {
  return <PageClient />;
}
