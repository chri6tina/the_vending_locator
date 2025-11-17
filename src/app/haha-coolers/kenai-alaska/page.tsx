import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kenai, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kenai, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kenai businesses.',
  keywords: 'haha coolers Kenai, smart vending Kenai Alaska, grab and go cooler Kenai, cashless vending Kenai',
  openGraph: {
    title: 'Haha Smart Coolers in Kenai, Alaska',
    description: 'Revolutionary grab & go vending technology for Kenai businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kenai-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kenai-alaska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KenaiAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
