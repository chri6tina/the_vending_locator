import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Yuma, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Yuma, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Yuma businesses.',
  keywords: 'haha coolers Yuma, smart vending Yuma Arizona, grab and go cooler Yuma, cashless vending Yuma',
  openGraph: {
    title: 'Haha Smart Coolers in Yuma, Arizona',
    description: 'Revolutionary grab & go vending technology for Yuma businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/yuma-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/yuma-arizona',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function YumaArizonaCoolerPageMetadata() {
  return <PageClient />;
}
