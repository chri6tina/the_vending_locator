import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Murfreesboro, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Murfreesboro, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Murfreesboro businesses.',
  keywords: 'haha coolers Murfreesboro, smart vending Murfreesboro Tennessee, grab and go cooler Murfreesboro, cashless vending Murfreesboro',
  openGraph: {
    title: 'Haha Smart Coolers in Murfreesboro, Tennessee',
    description: 'Revolutionary grab & go vending technology for Murfreesboro businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/murfreesboro-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/murfreesboro-tennessee',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MurfreesboroTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
