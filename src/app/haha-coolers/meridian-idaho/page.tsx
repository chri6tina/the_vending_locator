import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Meridian, Idaho | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Meridian, Idaho. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Meridian businesses.',
  keywords: 'haha coolers Meridian, smart vending Meridian Idaho, grab and go cooler Meridian, cashless vending Meridian',
  openGraph: {
    title: 'Haha Smart Coolers in Meridian, Idaho',
    description: 'Revolutionary grab & go vending technology for Meridian businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/meridian-idaho',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/meridian-idaho',
  },
};

export default function MeridianIdahoCoolerPageMetadata() {
  return <PageClient />;
}
