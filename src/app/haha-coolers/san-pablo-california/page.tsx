import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Pablo, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Pablo, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Pablo businesses.',
  keywords: 'haha coolers San Pablo, smart vending San Pablo California, grab and go cooler San Pablo, cashless vending San Pablo',
  openGraph: {
    title: 'Haha Smart Coolers in San Pablo, California',
    description: 'Revolutionary grab & go vending technology for San Pablo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-pablo-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-pablo-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SanPabloCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
