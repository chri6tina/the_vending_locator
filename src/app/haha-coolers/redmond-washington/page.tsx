import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Redmond, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Redmond, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Redmond businesses.',
  keywords: 'haha coolers Redmond, smart vending Redmond Washington, grab and go cooler Redmond, cashless vending Redmond',
  openGraph: {
    title: 'Haha Smart Coolers in Redmond, Washington',
    description: 'Revolutionary grab & go vending technology for Redmond businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/redmond-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/redmond-washington',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RedmondWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
