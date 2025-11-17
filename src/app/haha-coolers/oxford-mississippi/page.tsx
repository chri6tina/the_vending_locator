import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oxford, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oxford, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oxford businesses.',
  keywords: 'haha coolers Oxford, smart vending Oxford Mississippi, grab and go cooler Oxford, cashless vending Oxford',
  openGraph: {
    title: 'Haha Smart Coolers in Oxford, Mississippi',
    description: 'Revolutionary grab & go vending technology for Oxford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oxford-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oxford-mississippi',
  },
};

export default function OxfordMississippiCoolerPageMetadata() {
  return <PageClient />;
}
