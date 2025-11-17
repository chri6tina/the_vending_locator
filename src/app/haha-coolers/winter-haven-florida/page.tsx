import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Winter Haven, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Winter Haven, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Winter Haven businesses.',
  keywords: 'haha coolers Winter Haven, smart vending Winter Haven Florida, grab and go cooler Winter Haven, cashless vending Winter Haven',
  openGraph: {
    title: 'Haha Smart Coolers in Winter Haven, Florida',
    description: 'Revolutionary grab & go vending technology for Winter Haven businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/winter-haven-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/winter-haven-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WinterHavenFloridaCoolerPageMetadata() {
  return <PageClient />;
}
