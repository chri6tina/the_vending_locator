import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Barre, Vermont | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Barre, Vermont. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Barre businesses.',
  keywords: 'haha coolers Barre, smart vending Barre Vermont, grab and go cooler Barre, cashless vending Barre',
  openGraph: {
    title: 'Haha Smart Coolers in Barre, Vermont',
    description: 'Revolutionary grab & go vending technology for Barre businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/barre-vermont',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/barre-vermont',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BarreVermontCoolerPageMetadata() {
  return <PageClient />;
}
