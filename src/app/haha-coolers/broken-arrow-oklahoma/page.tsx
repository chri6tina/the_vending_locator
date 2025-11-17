import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Broken Arrow, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Broken Arrow, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Broken Arrow businesses.',
  keywords: 'haha coolers Broken Arrow, smart vending Broken Arrow Oklahoma, grab and go cooler Broken Arrow, cashless vending Broken Arrow',
  openGraph: {
    title: 'Haha Smart Coolers in Broken Arrow, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Broken Arrow businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/broken-arrow-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/broken-arrow-oklahoma',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BrokenArrowOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
