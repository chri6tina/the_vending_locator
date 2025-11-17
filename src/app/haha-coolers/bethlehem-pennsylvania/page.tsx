import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bethlehem, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bethlehem, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bethlehem businesses.',
  keywords: 'haha coolers Bethlehem, smart vending Bethlehem Pennsylvania, grab and go cooler Bethlehem, cashless vending Bethlehem',
  openGraph: {
    title: 'Haha Smart Coolers in Bethlehem, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Bethlehem businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bethlehem-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bethlehem-pennsylvania',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BethlehemPennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
