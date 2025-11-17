import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Americus, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Americus, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Americus businesses.',
  keywords: 'haha coolers Americus, smart vending Americus Georgia, grab and go cooler Americus, cashless vending Americus',
  openGraph: {
    title: 'Haha Smart Coolers in Americus, Georgia',
    description: 'Revolutionary grab & go vending technology for Americus businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/americus-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/americus-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AmericusGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
