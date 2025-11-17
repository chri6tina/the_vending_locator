import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Columbus, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Columbus, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Columbus businesses.',
  keywords: 'haha coolers Columbus, smart vending Columbus Ohio, grab and go cooler Columbus, cashless vending Columbus',
  openGraph: {
    title: 'Haha Smart Coolers in Columbus, Ohio',
    description: 'Revolutionary grab & go vending technology for Columbus businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/columbus-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/columbus-ohio',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ColumbusOhioCoolerPageMetadata() {
  return <PageClient />;
}
