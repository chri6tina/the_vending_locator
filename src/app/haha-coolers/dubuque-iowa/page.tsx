import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dubuque, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dubuque, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dubuque businesses.',
  keywords: 'haha coolers Dubuque, smart vending Dubuque Iowa, grab and go cooler Dubuque, cashless vending Dubuque',
  openGraph: {
    title: 'Haha Smart Coolers in Dubuque, Iowa',
    description: 'Revolutionary grab & go vending technology for Dubuque businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dubuque-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dubuque-iowa',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DubuqueIowaCoolerPageMetadata() {
  return <PageClient />;
}
