import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Titusville, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Titusville, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Titusville businesses.',
  keywords: 'haha coolers Titusville, smart vending Titusville Florida, grab and go cooler Titusville, cashless vending Titusville',
  openGraph: {
    title: 'Haha Smart Coolers in Titusville, Florida',
    description: 'Revolutionary grab & go vending technology for Titusville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/titusville-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/titusville-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TitusvilleFloridaCoolerPageMetadata() {
  return <PageClient />;
}
