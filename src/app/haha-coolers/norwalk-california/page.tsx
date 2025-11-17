import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Norwalk, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Norwalk, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Norwalk businesses.',
  keywords: 'haha coolers Norwalk, smart vending Norwalk California, grab and go cooler Norwalk, cashless vending Norwalk',
  openGraph: {
    title: 'Haha Smart Coolers in Norwalk, California',
    description: 'Revolutionary grab & go vending technology for Norwalk businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/norwalk-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/norwalk-california',
  },
};

export default function NorwalkCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
