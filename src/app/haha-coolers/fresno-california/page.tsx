import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fresno, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fresno, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fresno businesses.',
  keywords: 'haha coolers Fresno, smart vending Fresno California, grab and go cooler Fresno, cashless vending Fresno',
  openGraph: {
    title: 'Haha Smart Coolers in Fresno, California',
    description: 'Revolutionary grab & go vending technology for Fresno businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fresno-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fresno-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FresnoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
