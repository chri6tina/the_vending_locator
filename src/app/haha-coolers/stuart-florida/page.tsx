import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Stuart, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Stuart, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Stuart businesses.',
  keywords: 'haha coolers Stuart, smart vending Stuart Florida, grab and go cooler Stuart, cashless vending Stuart',
  openGraph: {
    title: 'Haha Smart Coolers in Stuart, Florida',
    description: 'Revolutionary grab & go vending technology for Stuart businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/stuart-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/stuart-florida',
  },
};

export default function StuartFloridaCoolerPageMetadata() {
  return <PageClient />;
}
