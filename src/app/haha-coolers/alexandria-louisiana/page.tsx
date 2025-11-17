import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Alexandria, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Alexandria, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Alexandria businesses.',
  keywords: 'haha coolers Alexandria, smart vending Alexandria Louisiana, grab and go cooler Alexandria, cashless vending Alexandria',
  openGraph: {
    title: 'Haha Smart Coolers in Alexandria, Louisiana',
    description: 'Revolutionary grab & go vending technology for Alexandria businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/alexandria-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/alexandria-louisiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AlexandriaLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
