import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Winter Springs, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Winter Springs, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Winter Springs businesses.',
  keywords: 'haha coolers Winter Springs, smart vending Winter Springs Florida, grab and go cooler Winter Springs, cashless vending Winter Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Winter Springs, Florida',
    description: 'Revolutionary grab & go vending technology for Winter Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/winter-springs-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/winter-springs-florida',
  },
};

export default function WinterSpringsFloridaCoolerPageMetadata() {
  return <PageClient />;
}
