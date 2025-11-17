import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Vallejo, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Vallejo, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Vallejo businesses.',
  keywords: 'haha coolers Vallejo, smart vending Vallejo California, grab and go cooler Vallejo, cashless vending Vallejo',
  openGraph: {
    title: 'Haha Smart Coolers in Vallejo, California',
    description: 'Revolutionary grab & go vending technology for Vallejo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/vallejo-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/vallejo-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function VallejoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
