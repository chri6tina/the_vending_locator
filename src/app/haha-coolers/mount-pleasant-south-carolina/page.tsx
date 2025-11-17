import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mount Pleasant, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mount Pleasant, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mount Pleasant businesses.',
  keywords: 'haha coolers Mount Pleasant, smart vending Mount Pleasant South Carolina, grab and go cooler Mount Pleasant, cashless vending Mount Pleasant',
  openGraph: {
    title: 'Haha Smart Coolers in Mount Pleasant, South Carolina',
    description: 'Revolutionary grab & go vending technology for Mount Pleasant businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mount-pleasant-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mount-pleasant-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MountPleasantSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
