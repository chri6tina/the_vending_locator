import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Woodbury, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Woodbury, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Woodbury businesses.',
  keywords: 'haha coolers Woodbury, smart vending Woodbury Minnesota, grab and go cooler Woodbury, cashless vending Woodbury',
  openGraph: {
    title: 'Haha Smart Coolers in Woodbury, Minnesota',
    description: 'Revolutionary grab & go vending technology for Woodbury businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/woodbury-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/woodbury-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WoodburyMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
