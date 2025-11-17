import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Racine, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Racine, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Racine businesses.',
  keywords: 'haha coolers Racine, smart vending Racine Wisconsin, grab and go cooler Racine, cashless vending Racine',
  openGraph: {
    title: 'Haha Smart Coolers in Racine, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Racine businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/racine-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/racine-wisconsin',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RacineWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
