import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Battle Creek, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Battle Creek, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Battle Creek businesses.',
  keywords: 'haha coolers Battle Creek, smart vending Battle Creek Michigan, grab and go cooler Battle Creek, cashless vending Battle Creek',
  openGraph: {
    title: 'Haha Smart Coolers in Battle Creek, Michigan',
    description: 'Revolutionary grab & go vending technology for Battle Creek businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/battle-creek-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/battle-creek-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BattleCreekMichiganCoolerPageMetadata() {
  return <PageClient />;
}
