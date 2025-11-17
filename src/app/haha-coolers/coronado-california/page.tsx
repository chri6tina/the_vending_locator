import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Coronado, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Coronado, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Coronado businesses.',
  keywords: 'haha coolers Coronado, smart vending Coronado California, grab and go cooler Coronado, cashless vending Coronado',
  openGraph: {
    title: 'Haha Smart Coolers in Coronado, California',
    description: 'Revolutionary grab & go vending technology for Coronado businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/coronado-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/coronado-california',
  },
};

export default function CoronadoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
