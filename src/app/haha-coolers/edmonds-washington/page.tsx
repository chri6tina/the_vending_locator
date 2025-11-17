import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Edmonds, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Edmonds, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Edmonds businesses.',
  keywords: 'haha coolers Edmonds, smart vending Edmonds Washington, grab and go cooler Edmonds, cashless vending Edmonds',
  openGraph: {
    title: 'Haha Smart Coolers in Edmonds, Washington',
    description: 'Revolutionary grab & go vending technology for Edmonds businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/edmonds-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/edmonds-washington',
  },
};

export default function EdmondsWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
