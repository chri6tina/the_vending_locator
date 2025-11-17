import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Arcadia, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Arcadia, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Arcadia businesses.',
  keywords: 'haha coolers Arcadia, smart vending Arcadia California, grab and go cooler Arcadia, cashless vending Arcadia',
  openGraph: {
    title: 'Haha Smart Coolers in Arcadia, California',
    description: 'Revolutionary grab & go vending technology for Arcadia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/arcadia-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/arcadia-california',
  },
};

export default function ArcadiaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
