import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Helena, Montana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Helena, Montana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Helena businesses.',
  keywords: 'haha coolers Helena, smart vending Helena Montana, grab and go cooler Helena, cashless vending Helena',
  openGraph: {
    title: 'Haha Smart Coolers in Helena, Montana',
    description: 'Revolutionary grab & go vending technology for Helena businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/helena-montana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/helena-montana',
  },
};

export default function HelenaMontanaCoolerPageMetadata() {
  return <PageClient />;
}
