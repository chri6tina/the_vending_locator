import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Compton, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Compton, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Compton businesses.',
  keywords: 'haha coolers Compton, smart vending Compton California, grab and go cooler Compton, cashless vending Compton',
  openGraph: {
    title: 'Haha Smart Coolers in Compton, California',
    description: 'Revolutionary grab & go vending technology for Compton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/compton-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/compton-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ComptonCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
