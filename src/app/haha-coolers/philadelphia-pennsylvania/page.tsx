import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Philadelphia, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Philadelphia, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Philadelphia businesses.',
  keywords: 'haha coolers Philadelphia, smart vending Philadelphia Pennsylvania, grab and go cooler Philadelphia, cashless vending Philadelphia',
  openGraph: {
    title: 'Haha Smart Coolers in Philadelphia, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Philadelphia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/philadelphia-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/philadelphia-pennsylvania',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PhiladelphiaPennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
