import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Miramar, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Miramar, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Miramar businesses.',
  keywords: 'haha coolers Miramar, smart vending Miramar Florida, grab and go cooler Miramar, cashless vending Miramar',
  openGraph: {
    title: 'Haha Smart Coolers in Miramar, Florida',
    description: 'Revolutionary grab & go vending technology for Miramar businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/miramar-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/miramar-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MiramarFloridaCoolerPageMetadata() {
  return <PageClient />;
}
