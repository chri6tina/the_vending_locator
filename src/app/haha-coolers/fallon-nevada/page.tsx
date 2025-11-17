import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fallon, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fallon, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fallon businesses.',
  keywords: 'haha coolers Fallon, smart vending Fallon Nevada, grab and go cooler Fallon, cashless vending Fallon',
  openGraph: {
    title: 'Haha Smart Coolers in Fallon, Nevada',
    description: 'Revolutionary grab & go vending technology for Fallon businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fallon-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fallon-nevada',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FallonNevadaCoolerPageMetadata() {
  return <PageClient />;
}
