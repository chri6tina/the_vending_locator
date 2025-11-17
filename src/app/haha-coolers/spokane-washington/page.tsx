import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Spokane, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Spokane, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Spokane businesses.',
  keywords: 'haha coolers Spokane, smart vending Spokane Washington, grab and go cooler Spokane, cashless vending Spokane',
  openGraph: {
    title: 'Haha Smart Coolers in Spokane, Washington',
    description: 'Revolutionary grab & go vending technology for Spokane businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/spokane-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/spokane-washington',
  },
};

export default function SpokaneWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
