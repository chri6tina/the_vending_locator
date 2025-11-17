import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Renton, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Renton, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Renton businesses.',
  keywords: 'haha coolers Renton, smart vending Renton Washington, grab and go cooler Renton, cashless vending Renton',
  openGraph: {
    title: 'Haha Smart Coolers in Renton, Washington',
    description: 'Revolutionary grab & go vending technology for Renton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/renton-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/renton-washington',
  },
};

export default function RentonWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
