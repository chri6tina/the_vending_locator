import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lakewood, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lakewood, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lakewood businesses.',
  keywords: 'haha coolers Lakewood, smart vending Lakewood Washington, grab and go cooler Lakewood, cashless vending Lakewood',
  openGraph: {
    title: 'Haha Smart Coolers in Lakewood, Washington',
    description: 'Revolutionary grab & go vending technology for Lakewood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lakewood-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lakewood-washington',
  },
};

export default function LakewoodWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
