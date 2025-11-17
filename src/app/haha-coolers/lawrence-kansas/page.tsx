import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lawrence, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lawrence, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lawrence businesses.',
  keywords: 'haha coolers Lawrence, smart vending Lawrence Kansas, grab and go cooler Lawrence, cashless vending Lawrence',
  openGraph: {
    title: 'Haha Smart Coolers in Lawrence, Kansas',
    description: 'Revolutionary grab & go vending technology for Lawrence businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lawrence-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lawrence-kansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LawrenceKansasCoolerPageMetadata() {
  return <PageClient />;
}
