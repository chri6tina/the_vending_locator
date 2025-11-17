import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Banning, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Banning, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Banning businesses.',
  keywords: 'haha coolers Banning, smart vending Banning California, grab and go cooler Banning, cashless vending Banning',
  openGraph: {
    title: 'Haha Smart Coolers in Banning, California',
    description: 'Revolutionary grab & go vending technology for Banning businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/banning-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/banning-california',
  },
};

export default function BanningCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
