import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Auburn, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Auburn, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Auburn businesses.',
  keywords: 'haha coolers Auburn, smart vending Auburn Washington, grab and go cooler Auburn, cashless vending Auburn',
  openGraph: {
    title: 'Haha Smart Coolers in Auburn, Washington',
    description: 'Revolutionary grab & go vending technology for Auburn businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/auburn-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/auburn-washington',
  },
};

export default function AuburnWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
