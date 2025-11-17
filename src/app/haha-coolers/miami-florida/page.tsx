import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Miami, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Miami, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Miami businesses.',
  keywords: 'haha coolers Miami, smart vending Miami Florida, grab and go cooler Miami, cashless vending Miami',
  openGraph: {
    title: 'Haha Smart Coolers in Miami, Florida',
    description: 'Revolutionary grab & go vending technology for Miami businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/miami-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/miami-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MiamiFloridaCoolerPageMetadata() {
  return <PageClient />;
}
