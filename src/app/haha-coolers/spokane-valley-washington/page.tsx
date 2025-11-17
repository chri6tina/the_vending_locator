import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Spokane Valley, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Spokane Valley, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Spokane Valley businesses.',
  keywords: 'haha coolers Spokane Valley, smart vending Spokane Valley Washington, grab and go cooler Spokane Valley, cashless vending Spokane Valley',
  openGraph: {
    title: 'Haha Smart Coolers in Spokane Valley, Washington',
    description: 'Revolutionary grab & go vending technology for Spokane Valley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/spokane-valley-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/spokane-valley-washington',
  },
};

export default function SpokaneValleyWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
