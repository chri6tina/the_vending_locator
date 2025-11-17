import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Worcester, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Worcester, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Worcester businesses.',
  keywords: 'haha coolers Worcester, smart vending Worcester Massachusetts, grab and go cooler Worcester, cashless vending Worcester',
  openGraph: {
    title: 'Haha Smart Coolers in Worcester, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Worcester businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/worcester-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/worcester-massachusetts',
  },
};

export default function WorcesterMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
