import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Yucaipa, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Yucaipa, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Yucaipa businesses.',
  keywords: 'haha coolers Yucaipa, smart vending Yucaipa California, grab and go cooler Yucaipa, cashless vending Yucaipa',
  openGraph: {
    title: 'Haha Smart Coolers in Yucaipa, California',
    description: 'Revolutionary grab & go vending technology for Yucaipa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/yucaipa-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/yucaipa-california',
  },
};

export default function YucaipaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
