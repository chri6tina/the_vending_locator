import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Ramon, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Ramon, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Ramon businesses.',
  keywords: 'haha coolers San Ramon, smart vending San Ramon California, grab and go cooler San Ramon, cashless vending San Ramon',
  openGraph: {
    title: 'Haha Smart Coolers in San Ramon, California',
    description: 'Revolutionary grab & go vending technology for San Ramon businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-ramon-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-ramon-california',
  },
};

export default function SanRamonCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
