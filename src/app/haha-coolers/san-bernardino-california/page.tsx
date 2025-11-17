import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Bernardino, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Bernardino, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Bernardino businesses.',
  keywords: 'haha coolers San Bernardino, smart vending San Bernardino California, grab and go cooler San Bernardino, cashless vending San Bernardino',
  openGraph: {
    title: 'Haha Smart Coolers in San Bernardino, California',
    description: 'Revolutionary grab & go vending technology for San Bernardino businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-bernardino-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-bernardino-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SanBernardinoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
