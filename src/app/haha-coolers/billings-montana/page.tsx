import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Billings, Montana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Billings, Montana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Billings businesses.',
  keywords: 'haha coolers Billings, smart vending Billings Montana, grab and go cooler Billings, cashless vending Billings',
  openGraph: {
    title: 'Haha Smart Coolers in Billings, Montana',
    description: 'Revolutionary grab & go vending technology for Billings businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/billings-montana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/billings-montana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BillingsMontanaCoolerPageMetadata() {
  return <PageClient />;
}
