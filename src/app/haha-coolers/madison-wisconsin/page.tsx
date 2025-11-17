import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Madison, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Madison, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Madison businesses.',
  keywords: 'haha coolers Madison, smart vending Madison Wisconsin, grab and go cooler Madison, cashless vending Madison',
  openGraph: {
    title: 'Haha Smart Coolers in Madison, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Madison businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/madison-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/madison-wisconsin',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MadisonWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
