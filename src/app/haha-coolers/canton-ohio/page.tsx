import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Canton, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Canton, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Canton businesses.',
  keywords: 'haha coolers Canton, smart vending Canton Ohio, grab and go cooler Canton, cashless vending Canton',
  openGraph: {
    title: 'Haha Smart Coolers in Canton, Ohio',
    description: 'Revolutionary grab & go vending technology for Canton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/canton-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/canton-ohio',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CantonOhioCoolerPageMetadata() {
  return <PageClient />;
}
