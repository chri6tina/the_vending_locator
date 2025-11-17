import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Orem, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Orem, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Orem businesses.',
  keywords: 'haha coolers Orem, smart vending Orem Utah, grab and go cooler Orem, cashless vending Orem',
  openGraph: {
    title: 'Haha Smart Coolers in Orem, Utah',
    description: 'Revolutionary grab & go vending technology for Orem businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/orem-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/orem-utah',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function OremUtahCoolerPageMetadata() {
  return <PageClient />;
}
