import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Suffolk, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Suffolk, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Suffolk businesses.',
  keywords: 'haha coolers Suffolk, smart vending Suffolk Virginia, grab and go cooler Suffolk, cashless vending Suffolk',
  openGraph: {
    title: 'Haha Smart Coolers in Suffolk, Virginia',
    description: 'Revolutionary grab & go vending technology for Suffolk businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/suffolk-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/suffolk-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SuffolkVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
