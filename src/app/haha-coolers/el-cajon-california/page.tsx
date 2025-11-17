import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in El Cajon, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in El Cajon, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for El Cajon businesses.',
  keywords: 'haha coolers El Cajon, smart vending El Cajon California, grab and go cooler El Cajon, cashless vending El Cajon',
  openGraph: {
    title: 'Haha Smart Coolers in El Cajon, California',
    description: 'Revolutionary grab & go vending technology for El Cajon businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/el-cajon-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/el-cajon-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ElCajonCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
