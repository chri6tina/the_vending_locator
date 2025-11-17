import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Vacaville, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Vacaville, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Vacaville businesses.',
  keywords: 'haha coolers Vacaville, smart vending Vacaville California, grab and go cooler Vacaville, cashless vending Vacaville',
  openGraph: {
    title: 'Haha Smart Coolers in Vacaville, California',
    description: 'Revolutionary grab & go vending technology for Vacaville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/vacaville-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/vacaville-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function VacavilleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
