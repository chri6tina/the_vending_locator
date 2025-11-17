import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ontario, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ontario, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ontario businesses.',
  keywords: 'haha coolers Ontario, smart vending Ontario California, grab and go cooler Ontario, cashless vending Ontario',
  openGraph: {
    title: 'Haha Smart Coolers in Ontario, California',
    description: 'Revolutionary grab & go vending technology for Ontario businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ontario-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ontario-california',
  },
};

export default function OntarioCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
