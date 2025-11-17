import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pahrump, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pahrump, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pahrump businesses.',
  keywords: 'haha coolers Pahrump, smart vending Pahrump Nevada, grab and go cooler Pahrump, cashless vending Pahrump',
  openGraph: {
    title: 'Haha Smart Coolers in Pahrump, Nevada',
    description: 'Revolutionary grab & go vending technology for Pahrump businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pahrump-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pahrump-nevada',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PahrumpNevadaCoolerPageMetadata() {
  return <PageClient />;
}
