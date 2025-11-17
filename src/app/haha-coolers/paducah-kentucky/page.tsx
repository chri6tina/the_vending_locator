import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Paducah, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Paducah, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Paducah businesses.',
  keywords: 'haha coolers Paducah, smart vending Paducah Kentucky, grab and go cooler Paducah, cashless vending Paducah',
  openGraph: {
    title: 'Haha Smart Coolers in Paducah, Kentucky',
    description: 'Revolutionary grab & go vending technology for Paducah businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/paducah-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/paducah-kentucky',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PaducahKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
