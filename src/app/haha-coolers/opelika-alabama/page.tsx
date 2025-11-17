import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Opelika, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Opelika, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Opelika businesses.',
  keywords: 'haha coolers Opelika, smart vending Opelika Alabama, grab and go cooler Opelika, cashless vending Opelika',
  openGraph: {
    title: 'Haha Smart Coolers in Opelika, Alabama',
    description: 'Revolutionary grab & go vending technology for Opelika businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/opelika-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/opelika-alabama',
  },
};

export default function OpelikaAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
