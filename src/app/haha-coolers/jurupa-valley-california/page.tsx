import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jurupa Valley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jurupa Valley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jurupa Valley businesses.',
  keywords: 'haha coolers Jurupa Valley, smart vending Jurupa Valley California, grab and go cooler Jurupa Valley, cashless vending Jurupa Valley',
  openGraph: {
    title: 'Haha Smart Coolers in Jurupa Valley, California',
    description: 'Revolutionary grab & go vending technology for Jurupa Valley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jurupa-valley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jurupa-valley-california',
  },
};

export default function JurupaValleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
