import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Richland, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Richland, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Richland businesses.',
  keywords: 'haha coolers Richland, smart vending Richland Washington, grab and go cooler Richland, cashless vending Richland',
  openGraph: {
    title: 'Haha Smart Coolers in Richland, Washington',
    description: 'Revolutionary grab & go vending technology for Richland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/richland-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/richland-washington',
  },
};

export default function RichlandWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
