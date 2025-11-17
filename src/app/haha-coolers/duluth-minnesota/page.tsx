import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Duluth, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Duluth, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Duluth businesses.',
  keywords: 'haha coolers Duluth, smart vending Duluth Minnesota, grab and go cooler Duluth, cashless vending Duluth',
  openGraph: {
    title: 'Haha Smart Coolers in Duluth, Minnesota',
    description: 'Revolutionary grab & go vending technology for Duluth businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/duluth-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/duluth-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DuluthMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
