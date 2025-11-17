import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Selma, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Selma, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Selma businesses.',
  keywords: 'haha coolers Selma, smart vending Selma California, grab and go cooler Selma, cashless vending Selma',
  openGraph: {
    title: 'Haha Smart Coolers in Selma, California',
    description: 'Revolutionary grab & go vending technology for Selma businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/selma-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/selma-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SelmaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
