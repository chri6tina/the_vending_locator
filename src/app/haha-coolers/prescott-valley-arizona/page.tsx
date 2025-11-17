import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Prescott Valley, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Prescott Valley, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Prescott Valley businesses.',
  keywords: 'haha coolers Prescott Valley, smart vending Prescott Valley Arizona, grab and go cooler Prescott Valley, cashless vending Prescott Valley',
  openGraph: {
    title: 'Haha Smart Coolers in Prescott Valley, Arizona',
    description: 'Revolutionary grab & go vending technology for Prescott Valley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/prescott-valley-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/prescott-valley-arizona',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PrescottValleyArizonaCoolerPageMetadata() {
  return <PageClient />;
}
