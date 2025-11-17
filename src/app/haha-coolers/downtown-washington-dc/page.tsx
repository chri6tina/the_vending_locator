import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Downtown DC, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Downtown DC, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Downtown DC businesses.',
  keywords: 'haha coolers Downtown DC, smart vending Downtown DC Washington DC, grab and go cooler Downtown DC, cashless vending Downtown DC',
  openGraph: {
    title: 'Haha Smart Coolers in Downtown DC, Washington DC',
    description: 'Revolutionary grab & go vending technology for Downtown DC businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/downtown-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/downtown-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DowntownDCWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
