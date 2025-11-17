import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in North Miami, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in North Miami, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for North Miami businesses.',
  keywords: 'haha coolers North Miami, smart vending North Miami Florida, grab and go cooler North Miami, cashless vending North Miami',
  openGraph: {
    title: 'Haha Smart Coolers in North Miami, Florida',
    description: 'Revolutionary grab & go vending technology for North Miami businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/north-miami-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/north-miami-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NorthMiamiFloridaCoolerPageMetadata() {
  return <PageClient />;
}
