import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in La Habra, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in La Habra, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for La Habra businesses.',
  keywords: 'haha coolers La Habra, smart vending La Habra California, grab and go cooler La Habra, cashless vending La Habra',
  openGraph: {
    title: 'Haha Smart Coolers in La Habra, California',
    description: 'Revolutionary grab & go vending technology for La Habra businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/la-habra-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/la-habra-california',
  },
};

export default function LaHabraCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
