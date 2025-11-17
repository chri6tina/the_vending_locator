import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Laguna Niguel, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Laguna Niguel, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Laguna Niguel businesses.',
  keywords: 'haha coolers Laguna Niguel, smart vending Laguna Niguel California, grab and go cooler Laguna Niguel, cashless vending Laguna Niguel',
  openGraph: {
    title: 'Haha Smart Coolers in Laguna Niguel, California',
    description: 'Revolutionary grab & go vending technology for Laguna Niguel businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/laguna-niguel-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/laguna-niguel-california',
  },
};

export default function LagunaNiguelCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
