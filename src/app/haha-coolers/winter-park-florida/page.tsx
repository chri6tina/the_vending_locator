import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Winter Park, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Winter Park, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Winter Park businesses.',
  keywords: 'haha coolers Winter Park, smart vending Winter Park Florida, grab and go cooler Winter Park, cashless vending Winter Park',
  openGraph: {
    title: 'Haha Smart Coolers in Winter Park, Florida',
    description: 'Revolutionary grab & go vending technology for Winter Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/winter-park-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/winter-park-florida',
  },
};

export default function WinterParkFloridaCoolerPageMetadata() {
  return <PageClient />;
}
