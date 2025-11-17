import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Yakima, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Yakima, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Yakima businesses.',
  keywords: 'haha coolers Yakima, smart vending Yakima Washington, grab and go cooler Yakima, cashless vending Yakima',
  openGraph: {
    title: 'Haha Smart Coolers in Yakima, Washington',
    description: 'Revolutionary grab & go vending technology for Yakima businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/yakima-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/yakima-washington',
  },
};

export default function YakimaWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
