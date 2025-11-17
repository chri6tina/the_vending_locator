import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Olympia, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Olympia, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Olympia businesses.',
  keywords: 'haha coolers Olympia, smart vending Olympia Washington, grab and go cooler Olympia, cashless vending Olympia',
  openGraph: {
    title: 'Haha Smart Coolers in Olympia, Washington',
    description: 'Revolutionary grab & go vending technology for Olympia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/olympia-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/olympia-washington',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function OlympiaWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
