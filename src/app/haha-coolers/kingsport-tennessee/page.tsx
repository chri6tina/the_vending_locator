import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kingsport, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kingsport, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kingsport businesses.',
  keywords: 'haha coolers Kingsport, smart vending Kingsport Tennessee, grab and go cooler Kingsport, cashless vending Kingsport',
  openGraph: {
    title: 'Haha Smart Coolers in Kingsport, Tennessee',
    description: 'Revolutionary grab & go vending technology for Kingsport businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kingsport-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kingsport-tennessee',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KingsportTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
