import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sunrise, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sunrise, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sunrise businesses.',
  keywords: 'haha coolers Sunrise, smart vending Sunrise Florida, grab and go cooler Sunrise, cashless vending Sunrise',
  openGraph: {
    title: 'Haha Smart Coolers in Sunrise, Florida',
    description: 'Revolutionary grab & go vending technology for Sunrise businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sunrise-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sunrise-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SunriseFloridaCoolerPageMetadata() {
  return <PageClient />;
}
