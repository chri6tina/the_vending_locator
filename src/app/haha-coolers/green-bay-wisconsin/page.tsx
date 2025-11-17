import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Green Bay, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Green Bay, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Green Bay businesses.',
  keywords: 'haha coolers Green Bay, smart vending Green Bay Wisconsin, grab and go cooler Green Bay, cashless vending Green Bay',
  openGraph: {
    title: 'Haha Smart Coolers in Green Bay, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Green Bay businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/green-bay-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/green-bay-wisconsin',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GreenBayWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
