import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lewisville, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lewisville, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lewisville businesses.',
  keywords: 'haha coolers Lewisville, smart vending Lewisville Texas, grab and go cooler Lewisville, cashless vending Lewisville',
  openGraph: {
    title: 'Haha Smart Coolers in Lewisville, Texas',
    description: 'Revolutionary grab & go vending technology for Lewisville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lewisville-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lewisville-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LewisvilleTexasCoolerPageMetadata() {
  return <PageClient />;
}
