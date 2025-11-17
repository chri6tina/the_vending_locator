import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Merrimack, New Hampshire | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Merrimack, New Hampshire. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Merrimack businesses.',
  keywords: 'haha coolers Merrimack, smart vending Merrimack New Hampshire, grab and go cooler Merrimack, cashless vending Merrimack',
  openGraph: {
    title: 'Haha Smart Coolers in Merrimack, New Hampshire',
    description: 'Revolutionary grab & go vending technology for Merrimack businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/merrimack-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/merrimack-new-hampshire',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MerrimackNewHampshireCoolerPageMetadata() {
  return <PageClient />;
}
