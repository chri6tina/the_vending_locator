import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Corona, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Corona, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Corona businesses.',
  keywords: 'haha coolers Corona, smart vending Corona California, grab and go cooler Corona, cashless vending Corona',
  openGraph: {
    title: 'Haha Smart Coolers in Corona, California',
    description: 'Revolutionary grab & go vending technology for Corona businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/corona-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/corona-california',
  },
};

export default function CoronaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
