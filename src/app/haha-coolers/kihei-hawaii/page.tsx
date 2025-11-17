import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kihei, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kihei, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kihei businesses.',
  keywords: 'haha coolers Kihei, smart vending Kihei Hawaii, grab and go cooler Kihei, cashless vending Kihei',
  openGraph: {
    title: 'Haha Smart Coolers in Kihei, Hawaii',
    description: 'Revolutionary grab & go vending technology for Kihei businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kihei-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kihei-hawaii',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KiheiHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
