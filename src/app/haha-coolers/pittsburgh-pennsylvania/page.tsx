import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pittsburgh, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pittsburgh, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pittsburgh businesses.',
  keywords: 'haha coolers Pittsburgh, smart vending Pittsburgh Pennsylvania, grab and go cooler Pittsburgh, cashless vending Pittsburgh',
  openGraph: {
    title: 'Haha Smart Coolers in Pittsburgh, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Pittsburgh businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pittsburgh-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pittsburgh-pennsylvania',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PittsburghPennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
