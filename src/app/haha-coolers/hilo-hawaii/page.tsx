import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hilo, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hilo, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hilo businesses.',
  keywords: 'haha coolers Hilo, smart vending Hilo Hawaii, grab and go cooler Hilo, cashless vending Hilo',
  openGraph: {
    title: 'Haha Smart Coolers in Hilo, Hawaii',
    description: 'Revolutionary grab & go vending technology for Hilo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hilo-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hilo-hawaii',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HiloHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
