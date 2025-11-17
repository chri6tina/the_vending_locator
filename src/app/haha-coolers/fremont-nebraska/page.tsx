import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fremont, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fremont, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fremont businesses.',
  keywords: 'haha coolers Fremont, smart vending Fremont Nebraska, grab and go cooler Fremont, cashless vending Fremont',
  openGraph: {
    title: 'Haha Smart Coolers in Fremont, Nebraska',
    description: 'Revolutionary grab & go vending technology for Fremont businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fremont-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fremont-nebraska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FremontNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
