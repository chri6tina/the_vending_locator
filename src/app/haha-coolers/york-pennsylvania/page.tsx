import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in York, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in York, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for York businesses.',
  keywords: 'haha coolers York, smart vending York Pennsylvania, grab and go cooler York, cashless vending York',
  openGraph: {
    title: 'Haha Smart Coolers in York, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for York businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/york-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/york-pennsylvania',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function YorkPennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
