import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wellington, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wellington, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wellington businesses.',
  keywords: 'haha coolers Wellington, smart vending Wellington Florida, grab and go cooler Wellington, cashless vending Wellington',
  openGraph: {
    title: 'Haha Smart Coolers in Wellington, Florida',
    description: 'Revolutionary grab & go vending technology for Wellington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wellington-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wellington-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WellingtonFloridaCoolerPageMetadata() {
  return <PageClient />;
}
