import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rocky Mount, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rocky Mount, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rocky Mount businesses.',
  keywords: 'haha coolers Rocky Mount, smart vending Rocky Mount North Carolina, grab and go cooler Rocky Mount, cashless vending Rocky Mount',
  openGraph: {
    title: 'Haha Smart Coolers in Rocky Mount, North Carolina',
    description: 'Revolutionary grab & go vending technology for Rocky Mount businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rocky-mount-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rocky-mount-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RockyMountNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
