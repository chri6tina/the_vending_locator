import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tyler, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tyler, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tyler businesses.',
  keywords: 'haha coolers Tyler, smart vending Tyler Texas, grab and go cooler Tyler, cashless vending Tyler',
  openGraph: {
    title: 'Haha Smart Coolers in Tyler, Texas',
    description: 'Revolutionary grab & go vending technology for Tyler businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tyler-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tyler-texas',
  },
};

export default function TylerTexasCoolerPageMetadata() {
  return <PageClient />;
}
