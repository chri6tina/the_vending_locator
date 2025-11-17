import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rome, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rome, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rome businesses.',
  keywords: 'haha coolers Rome, smart vending Rome Georgia, grab and go cooler Rome, cashless vending Rome',
  openGraph: {
    title: 'Haha Smart Coolers in Rome, Georgia',
    description: 'Revolutionary grab & go vending technology for Rome businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rome-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rome-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RomeGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
