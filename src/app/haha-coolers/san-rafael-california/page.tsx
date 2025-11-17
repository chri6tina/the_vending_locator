import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Rafael, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Rafael, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Rafael businesses.',
  keywords: 'haha coolers San Rafael, smart vending San Rafael California, grab and go cooler San Rafael, cashless vending San Rafael',
  openGraph: {
    title: 'Haha Smart Coolers in San Rafael, California',
    description: 'Revolutionary grab & go vending technology for San Rafael businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-rafael-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-rafael-california',
  },
};

export default function SanRafaelCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
