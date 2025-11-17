import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Vancouver, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Vancouver, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Vancouver businesses.',
  keywords: 'haha coolers Vancouver, smart vending Vancouver Washington, grab and go cooler Vancouver, cashless vending Vancouver',
  openGraph: {
    title: 'Haha Smart Coolers in Vancouver, Washington',
    description: 'Revolutionary grab & go vending technology for Vancouver businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/vancouver-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/vancouver-washington',
  },
};

export default function VancouverWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
