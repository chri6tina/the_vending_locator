import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pearl City, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pearl City, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pearl City businesses.',
  keywords: 'haha coolers Pearl City, smart vending Pearl City Hawaii, grab and go cooler Pearl City, cashless vending Pearl City',
  openGraph: {
    title: 'Haha Smart Coolers in Pearl City, Hawaii',
    description: 'Revolutionary grab & go vending technology for Pearl City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pearl-city-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pearl-city-hawaii',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PearlCityHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
