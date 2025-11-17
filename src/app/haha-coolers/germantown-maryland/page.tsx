import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Germantown, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Germantown, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Germantown businesses.',
  keywords: 'haha coolers Germantown, smart vending Germantown Maryland, grab and go cooler Germantown, cashless vending Germantown',
  openGraph: {
    title: 'Haha Smart Coolers in Germantown, Maryland',
    description: 'Revolutionary grab & go vending technology for Germantown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/germantown-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/germantown-maryland',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GermantownMarylandCoolerPageMetadata() {
  return <PageClient />;
}
