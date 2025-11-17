import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sacramento, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sacramento, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sacramento businesses.',
  keywords: 'haha coolers Sacramento, smart vending Sacramento California, grab and go cooler Sacramento, cashless vending Sacramento',
  openGraph: {
    title: 'Haha Smart Coolers in Sacramento, California',
    description: 'Revolutionary grab & go vending technology for Sacramento businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sacramento-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sacramento-california',
  },
};

export default function SacramentoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
