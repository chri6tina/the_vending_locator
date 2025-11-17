import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Columbia, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Columbia, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Columbia businesses.',
  keywords: 'haha coolers Columbia, smart vending Columbia Missouri, grab and go cooler Columbia, cashless vending Columbia',
  openGraph: {
    title: 'Haha Smart Coolers in Columbia, Missouri',
    description: 'Revolutionary grab & go vending technology for Columbia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/columbia-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/columbia-missouri',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ColumbiaMissouriCoolerPageMetadata() {
  return <PageClient />;
}
