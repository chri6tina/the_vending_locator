import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fargo, North Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fargo, North Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fargo businesses.',
  keywords: 'haha coolers Fargo, smart vending Fargo North Dakota, grab and go cooler Fargo, cashless vending Fargo',
  openGraph: {
    title: 'Haha Smart Coolers in Fargo, North Dakota',
    description: 'Revolutionary grab & go vending technology for Fargo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fargo-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fargo-north-dakota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FargoNorthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
