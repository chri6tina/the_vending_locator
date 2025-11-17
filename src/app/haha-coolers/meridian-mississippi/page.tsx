import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Meridian, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Meridian, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Meridian businesses.',
  keywords: 'haha coolers Meridian, smart vending Meridian Mississippi, grab and go cooler Meridian, cashless vending Meridian',
  openGraph: {
    title: 'Haha Smart Coolers in Meridian, Mississippi',
    description: 'Revolutionary grab & go vending technology for Meridian businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/meridian-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/meridian-mississippi',
  },
};

export default function MeridianMississippiCoolerPageMetadata() {
  return <PageClient />;
}
