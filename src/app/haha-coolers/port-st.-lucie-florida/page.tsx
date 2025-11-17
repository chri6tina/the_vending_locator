import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Port St. Lucie, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Port St. Lucie, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Port St. Lucie businesses.',
  keywords: 'haha coolers Port St. Lucie, smart vending Port St. Lucie Florida, grab and go cooler Port St. Lucie, cashless vending Port St. Lucie',
  openGraph: {
    title: 'Haha Smart Coolers in Port St. Lucie, Florida',
    description: 'Revolutionary grab & go vending technology for Port St. Lucie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/port-st.-lucie-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/port-st.-lucie-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PortStLucieFloridaCoolerPageMetadata() {
  return <PageClient />;
}
