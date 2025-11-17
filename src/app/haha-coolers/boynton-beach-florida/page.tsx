import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Boynton Beach, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Boynton Beach, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Boynton Beach businesses.',
  keywords: 'haha coolers Boynton Beach, smart vending Boynton Beach Florida, grab and go cooler Boynton Beach, cashless vending Boynton Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Boynton Beach, Florida',
    description: 'Revolutionary grab & go vending technology for Boynton Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/boynton-beach-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/boynton-beach-florida',
  },
};

export default function BoyntonBeachFloridaCoolerPageMetadata() {
  return <PageClient />;
}
