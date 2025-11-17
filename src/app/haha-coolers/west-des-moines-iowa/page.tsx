import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West Des Moines, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West Des Moines, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West Des Moines businesses.',
  keywords: 'haha coolers West Des Moines, smart vending West Des Moines Iowa, grab and go cooler West Des Moines, cashless vending West Des Moines',
  openGraph: {
    title: 'Haha Smart Coolers in West Des Moines, Iowa',
    description: 'Revolutionary grab & go vending technology for West Des Moines businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-des-moines-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-des-moines-iowa',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WestDesMoinesIowaCoolerPageMetadata() {
  return <PageClient />;
}
