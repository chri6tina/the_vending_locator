import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Montclair, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Montclair, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Montclair businesses.',
  keywords: 'haha coolers Montclair, smart vending Montclair California, grab and go cooler Montclair, cashless vending Montclair',
  openGraph: {
    title: 'Haha Smart Coolers in Montclair, California',
    description: 'Revolutionary grab & go vending technology for Montclair businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/montclair-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/montclair-california',
  },
};

export default function MontclairCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
