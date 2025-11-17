import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Marysville, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Marysville, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Marysville businesses.',
  keywords: 'haha coolers Marysville, smart vending Marysville Washington, grab and go cooler Marysville, cashless vending Marysville',
  openGraph: {
    title: 'Haha Smart Coolers in Marysville, Washington',
    description: 'Revolutionary grab & go vending technology for Marysville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/marysville-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/marysville-washington',
  },
};

export default function MarysvilleWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
