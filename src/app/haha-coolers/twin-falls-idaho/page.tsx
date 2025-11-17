import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Twin Falls, Idaho | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Twin Falls, Idaho. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Twin Falls businesses.',
  keywords: 'haha coolers Twin Falls, smart vending Twin Falls Idaho, grab and go cooler Twin Falls, cashless vending Twin Falls',
  openGraph: {
    title: 'Haha Smart Coolers in Twin Falls, Idaho',
    description: 'Revolutionary grab & go vending technology for Twin Falls businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/twin-falls-idaho',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/twin-falls-idaho',
  },
};

export default function TwinFallsIdahoCoolerPageMetadata() {
  return <PageClient />;
}
