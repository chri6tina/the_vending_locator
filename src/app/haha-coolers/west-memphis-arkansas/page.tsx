import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West Memphis, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West Memphis, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West Memphis businesses.',
  keywords: 'haha coolers West Memphis, smart vending West Memphis Arkansas, grab and go cooler West Memphis, cashless vending West Memphis',
  openGraph: {
    title: 'Haha Smart Coolers in West Memphis, Arkansas',
    description: 'Revolutionary grab & go vending technology for West Memphis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-memphis-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-memphis-arkansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WestMemphisArkansasCoolerPageMetadata() {
  return <PageClient />;
}
