import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fairbanks, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fairbanks, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fairbanks businesses.',
  keywords: 'haha coolers Fairbanks, smart vending Fairbanks Alaska, grab and go cooler Fairbanks, cashless vending Fairbanks',
  openGraph: {
    title: 'Haha Smart Coolers in Fairbanks, Alaska',
    description: 'Revolutionary grab & go vending technology for Fairbanks businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fairbanks-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fairbanks-alaska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FairbanksAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
