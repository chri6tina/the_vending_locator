import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fall River, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fall River, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fall River businesses.',
  keywords: 'haha coolers Fall River, smart vending Fall River Massachusetts, grab and go cooler Fall River, cashless vending Fall River',
  openGraph: {
    title: 'Haha Smart Coolers in Fall River, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Fall River businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fall-river-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fall-river-massachusetts',
  },
};

export default function FallRiverMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
