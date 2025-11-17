import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Flagstaff, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Flagstaff, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Flagstaff businesses.',
  keywords: 'haha coolers Flagstaff, smart vending Flagstaff Arizona, grab and go cooler Flagstaff, cashless vending Flagstaff',
  openGraph: {
    title: 'Haha Smart Coolers in Flagstaff, Arizona',
    description: 'Revolutionary grab & go vending technology for Flagstaff businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/flagstaff-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/flagstaff-arizona',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FlagstaffArizonaCoolerPageMetadata() {
  return <PageClient />;
}
