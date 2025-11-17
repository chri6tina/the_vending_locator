import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tuscaloosa, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tuscaloosa, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tuscaloosa businesses.',
  keywords: 'haha coolers Tuscaloosa, smart vending Tuscaloosa Alabama, grab and go cooler Tuscaloosa, cashless vending Tuscaloosa',
  openGraph: {
    title: 'Haha Smart Coolers in Tuscaloosa, Alabama',
    description: 'Revolutionary grab & go vending technology for Tuscaloosa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tuscaloosa-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tuscaloosa-alabama',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TuscaloosaAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
