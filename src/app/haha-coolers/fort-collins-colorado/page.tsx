import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fort Collins, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fort Collins, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fort Collins businesses.',
  keywords: 'haha coolers Fort Collins, smart vending Fort Collins Colorado, grab and go cooler Fort Collins, cashless vending Fort Collins',
  openGraph: {
    title: 'Haha Smart Coolers in Fort Collins, Colorado',
    description: 'Revolutionary grab & go vending technology for Fort Collins businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fort-collins-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fort-collins-colorado',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FortCollinsColoradoCoolerPageMetadata() {
  return <PageClient />;
}
