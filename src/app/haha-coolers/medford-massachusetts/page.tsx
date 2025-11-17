import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Medford, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Medford, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Medford businesses.',
  keywords: 'haha coolers Medford, smart vending Medford Massachusetts, grab and go cooler Medford, cashless vending Medford',
  openGraph: {
    title: 'Haha Smart Coolers in Medford, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Medford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/medford-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/medford-massachusetts',
  },
};

export default function MedfordMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
