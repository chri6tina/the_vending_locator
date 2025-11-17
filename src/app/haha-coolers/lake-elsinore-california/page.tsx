import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lake Elsinore, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lake Elsinore, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lake Elsinore businesses.',
  keywords: 'haha coolers Lake Elsinore, smart vending Lake Elsinore California, grab and go cooler Lake Elsinore, cashless vending Lake Elsinore',
  openGraph: {
    title: 'Haha Smart Coolers in Lake Elsinore, California',
    description: 'Revolutionary grab & go vending technology for Lake Elsinore businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lake-elsinore-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lake-elsinore-california',
  },
};

export default function LakeElsinoreCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
