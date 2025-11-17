import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Enterprise, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Enterprise, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Enterprise businesses.',
  keywords: 'haha coolers Enterprise, smart vending Enterprise Nevada, grab and go cooler Enterprise, cashless vending Enterprise',
  openGraph: {
    title: 'Haha Smart Coolers in Enterprise, Nevada',
    description: 'Revolutionary grab & go vending technology for Enterprise businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/enterprise-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/enterprise-nevada',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EnterpriseNevadaCoolerPageMetadata() {
  return <PageClient />;
}
