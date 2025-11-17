import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lawrence, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lawrence, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lawrence businesses.',
  keywords: 'haha coolers Lawrence, smart vending Lawrence Massachusetts, grab and go cooler Lawrence, cashless vending Lawrence',
  openGraph: {
    title: 'Haha Smart Coolers in Lawrence, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Lawrence businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lawrence-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lawrence-massachusetts',
  },
};

export default function LawrenceMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
