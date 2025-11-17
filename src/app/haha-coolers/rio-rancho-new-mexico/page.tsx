import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rio Rancho, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rio Rancho, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rio Rancho businesses.',
  keywords: 'haha coolers Rio Rancho, smart vending Rio Rancho New Mexico, grab and go cooler Rio Rancho, cashless vending Rio Rancho',
  openGraph: {
    title: 'Haha Smart Coolers in Rio Rancho, New Mexico',
    description: 'Revolutionary grab & go vending technology for Rio Rancho businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rio-rancho-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rio-rancho-new-mexico',
  },
};

export default function RioRanchoNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
