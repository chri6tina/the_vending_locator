import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Beaumont, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Beaumont, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Beaumont businesses.',
  keywords: 'haha coolers Beaumont, smart vending Beaumont Texas, grab and go cooler Beaumont, cashless vending Beaumont',
  openGraph: {
    title: 'Haha Smart Coolers in Beaumont, Texas',
    description: 'Revolutionary grab & go vending technology for Beaumont businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/beaumont-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/beaumont-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BeaumontTexasCoolerPageMetadata() {
  return <PageClient />;
}
