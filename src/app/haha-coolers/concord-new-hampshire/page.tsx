import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Concord, New Hampshire | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Concord, New Hampshire. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Concord businesses.',
  keywords: 'haha coolers Concord, smart vending Concord New Hampshire, grab and go cooler Concord, cashless vending Concord',
  openGraph: {
    title: 'Haha Smart Coolers in Concord, New Hampshire',
    description: 'Revolutionary grab & go vending technology for Concord businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/concord-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/concord-new-hampshire',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ConcordNewHampshireCoolerPageMetadata() {
  return <PageClient />;
}
