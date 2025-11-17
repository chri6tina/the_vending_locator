import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Methuen, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Methuen, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Methuen businesses.',
  keywords: 'haha coolers Methuen, smart vending Methuen Massachusetts, grab and go cooler Methuen, cashless vending Methuen',
  openGraph: {
    title: 'Haha Smart Coolers in Methuen, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Methuen businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/methuen-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/methuen-massachusetts',
  },
};

export default function MethuenMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
