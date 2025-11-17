import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Glendora, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Glendora, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Glendora businesses.',
  keywords: 'haha coolers Glendora, smart vending Glendora California, grab and go cooler Glendora, cashless vending Glendora',
  openGraph: {
    title: 'Haha Smart Coolers in Glendora, California',
    description: 'Revolutionary grab & go vending technology for Glendora businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/glendora-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/glendora-california',
  },
};

export default function GlendoraCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
