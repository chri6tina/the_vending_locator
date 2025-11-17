import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Auburn, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Auburn, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Auburn businesses.',
  keywords: 'haha coolers Auburn, smart vending Auburn Alabama, grab and go cooler Auburn, cashless vending Auburn',
  openGraph: {
    title: 'Haha Smart Coolers in Auburn, Alabama',
    description: 'Revolutionary grab & go vending technology for Auburn businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/auburn-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/auburn-alabama',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AuburnAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
