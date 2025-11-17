import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Anchorage, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Anchorage, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Anchorage businesses.',
  keywords: 'haha coolers Anchorage, smart vending Anchorage Alaska, grab and go cooler Anchorage, cashless vending Anchorage',
  openGraph: {
    title: 'Haha Smart Coolers in Anchorage, Alaska',
    description: 'Revolutionary grab & go vending technology for Anchorage businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/anchorage-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/anchorage-alaska',
  },
};

export default function AnchorageAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
