import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Carlsbad, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Carlsbad, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Carlsbad businesses.',
  keywords: 'haha coolers Carlsbad, smart vending Carlsbad New Mexico, grab and go cooler Carlsbad, cashless vending Carlsbad',
  openGraph: {
    title: 'Haha Smart Coolers in Carlsbad, New Mexico',
    description: 'Revolutionary grab & go vending technology for Carlsbad businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/carlsbad-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/carlsbad-new-mexico',
  },
};

export default function CarlsbadNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
