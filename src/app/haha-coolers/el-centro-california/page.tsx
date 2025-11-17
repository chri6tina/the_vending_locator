import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in El Centro, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in El Centro, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for El Centro businesses.',
  keywords: 'haha coolers El Centro, smart vending El Centro California, grab and go cooler El Centro, cashless vending El Centro',
  openGraph: {
    title: 'Haha Smart Coolers in El Centro, California',
    description: 'Revolutionary grab & go vending technology for El Centro businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/el-centro-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/el-centro-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ElCentroCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
