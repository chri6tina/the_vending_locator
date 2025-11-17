import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elko, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elko, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elko businesses.',
  keywords: 'haha coolers Elko, smart vending Elko Nevada, grab and go cooler Elko, cashless vending Elko',
  openGraph: {
    title: 'Haha Smart Coolers in Elko, Nevada',
    description: 'Revolutionary grab & go vending technology for Elko businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elko-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elko-nevada',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ElkoNevadaCoolerPageMetadata() {
  return <PageClient />;
}
