import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Slidell, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Slidell, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Slidell businesses.',
  keywords: 'haha coolers Slidell, smart vending Slidell Louisiana, grab and go cooler Slidell, cashless vending Slidell',
  openGraph: {
    title: 'Haha Smart Coolers in Slidell, Louisiana',
    description: 'Revolutionary grab & go vending technology for Slidell businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/slidell-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/slidell-louisiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SlidellLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
