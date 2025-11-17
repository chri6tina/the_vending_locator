import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pittsburg, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pittsburg, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pittsburg businesses.',
  keywords: 'haha coolers Pittsburg, smart vending Pittsburg California, grab and go cooler Pittsburg, cashless vending Pittsburg',
  openGraph: {
    title: 'Haha Smart Coolers in Pittsburg, California',
    description: 'Revolutionary grab & go vending technology for Pittsburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pittsburg-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pittsburg-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PittsburgCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
