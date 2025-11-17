import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lake Worth, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lake Worth, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lake Worth businesses.',
  keywords: 'haha coolers Lake Worth, smart vending Lake Worth Florida, grab and go cooler Lake Worth, cashless vending Lake Worth',
  openGraph: {
    title: 'Haha Smart Coolers in Lake Worth, Florida',
    description: 'Revolutionary grab & go vending technology for Lake Worth businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lake-worth-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lake-worth-florida',
  },
};

export default function LakeWorthFloridaCoolerPageMetadata() {
  return <PageClient />;
}
