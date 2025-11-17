import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in South El Monte, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in South El Monte, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for South El Monte businesses.',
  keywords: 'haha coolers South El Monte, smart vending South El Monte California, grab and go cooler South El Monte, cashless vending South El Monte',
  openGraph: {
    title: 'Haha Smart Coolers in South El Monte, California',
    description: 'Revolutionary grab & go vending technology for South El Monte businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/south-el-monte-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/south-el-monte-california',
  },
};

export default function SouthElMonteCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
