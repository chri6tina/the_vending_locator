import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pocatello, Idaho | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pocatello, Idaho. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pocatello businesses.',
  keywords: 'haha coolers Pocatello, smart vending Pocatello Idaho, grab and go cooler Pocatello, cashless vending Pocatello',
  openGraph: {
    title: 'Haha Smart Coolers in Pocatello, Idaho',
    description: 'Revolutionary grab & go vending technology for Pocatello businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pocatello-idaho',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pocatello-idaho',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PocatelloIdahoCoolerPageMetadata() {
  return <PageClient />;
}
