import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Vicksburg, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Vicksburg, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Vicksburg businesses.',
  keywords: 'haha coolers Vicksburg, smart vending Vicksburg Mississippi, grab and go cooler Vicksburg, cashless vending Vicksburg',
  openGraph: {
    title: 'Haha Smart Coolers in Vicksburg, Mississippi',
    description: 'Revolutionary grab & go vending technology for Vicksburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/vicksburg-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/vicksburg-mississippi',
  },
};

export default function VicksburgMississippiCoolerPageMetadata() {
  return <PageClient />;
}
