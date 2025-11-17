import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Alexandria, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Alexandria, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Alexandria businesses.',
  keywords: 'haha coolers Alexandria, smart vending Alexandria Virginia, grab and go cooler Alexandria, cashless vending Alexandria',
  openGraph: {
    title: 'Haha Smart Coolers in Alexandria, Virginia',
    description: 'Revolutionary grab & go vending technology for Alexandria businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/alexandria-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/alexandria-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AlexandriaVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
