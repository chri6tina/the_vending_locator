import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kent, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kent, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kent businesses.',
  keywords: 'haha coolers Kent, smart vending Kent Washington, grab and go cooler Kent, cashless vending Kent',
  openGraph: {
    title: 'Haha Smart Coolers in Kent, Washington',
    description: 'Revolutionary grab & go vending technology for Kent businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kent-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kent-washington',
  },
};

export default function KentWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
