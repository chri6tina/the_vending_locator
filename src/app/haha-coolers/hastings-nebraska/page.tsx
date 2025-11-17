import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hastings, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hastings, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hastings businesses.',
  keywords: 'haha coolers Hastings, smart vending Hastings Nebraska, grab and go cooler Hastings, cashless vending Hastings',
  openGraph: {
    title: 'Haha Smart Coolers in Hastings, Nebraska',
    description: 'Revolutionary grab & go vending technology for Hastings businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hastings-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hastings-nebraska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HastingsNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
