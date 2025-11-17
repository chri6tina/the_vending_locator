import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Plano, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Plano, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Plano businesses.',
  keywords: 'haha coolers Plano, smart vending Plano Texas, grab and go cooler Plano, cashless vending Plano',
  openGraph: {
    title: 'Haha Smart Coolers in Plano, Texas',
    description: 'Revolutionary grab & go vending technology for Plano businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/plano-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/plano-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PlanoTexasCoolerPageMetadata() {
  return <PageClient />;
}
