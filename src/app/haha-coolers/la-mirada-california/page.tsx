import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in La Mirada, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in La Mirada, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for La Mirada businesses.',
  keywords: 'haha coolers La Mirada, smart vending La Mirada California, grab and go cooler La Mirada, cashless vending La Mirada',
  openGraph: {
    title: 'Haha Smart Coolers in La Mirada, California',
    description: 'Revolutionary grab & go vending technology for La Mirada businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/la-mirada-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/la-mirada-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LaMiradaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
