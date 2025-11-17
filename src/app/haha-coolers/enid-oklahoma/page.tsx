import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Enid, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Enid, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Enid businesses.',
  keywords: 'haha coolers Enid, smart vending Enid Oklahoma, grab and go cooler Enid, cashless vending Enid',
  openGraph: {
    title: 'Haha Smart Coolers in Enid, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Enid businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/enid-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/enid-oklahoma',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function EnidOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
