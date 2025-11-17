import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Moore, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Moore, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Moore businesses.',
  keywords: 'haha coolers Moore, smart vending Moore Oklahoma, grab and go cooler Moore, cashless vending Moore',
  openGraph: {
    title: 'Haha Smart Coolers in Moore, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Moore businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/moore-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/moore-oklahoma',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MooreOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
