import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wilkes-Barre, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wilkes-Barre, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wilkes-Barre businesses.',
  keywords: 'haha coolers Wilkes-Barre, smart vending Wilkes-Barre Pennsylvania, grab and go cooler Wilkes-Barre, cashless vending Wilkes-Barre',
  openGraph: {
    title: 'Haha Smart Coolers in Wilkes-Barre, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Wilkes-Barre businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wilkes-barre-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wilkes-barre-pennsylvania',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WilkesBarrePennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
