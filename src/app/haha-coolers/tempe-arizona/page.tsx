import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tempe, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tempe, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tempe businesses.',
  keywords: 'haha coolers Tempe, smart vending Tempe Arizona, grab and go cooler Tempe, cashless vending Tempe',
  openGraph: {
    title: 'Haha Smart Coolers in Tempe, Arizona',
    description: 'Revolutionary grab & go vending technology for Tempe businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tempe-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tempe-arizona',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TempeArizonaCoolerPageMetadata() {
  return <PageClient />;
}
