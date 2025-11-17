import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elgin, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elgin, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elgin businesses.',
  keywords: 'haha coolers Elgin, smart vending Elgin Illinois, grab and go cooler Elgin, cashless vending Elgin',
  openGraph: {
    title: 'Haha Smart Coolers in Elgin, Illinois',
    description: 'Revolutionary grab & go vending technology for Elgin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elgin-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elgin-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ElginIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
