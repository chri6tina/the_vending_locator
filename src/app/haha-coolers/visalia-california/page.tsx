import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Visalia, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Visalia, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Visalia businesses.',
  keywords: 'haha coolers Visalia, smart vending Visalia California, grab and go cooler Visalia, cashless vending Visalia',
  openGraph: {
    title: 'Haha Smart Coolers in Visalia, California',
    description: 'Revolutionary grab & go vending technology for Visalia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/visalia-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/visalia-california',
  },
};

export default function VisaliaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
