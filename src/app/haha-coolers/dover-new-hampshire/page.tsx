import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dover, New Hampshire | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dover, New Hampshire. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dover businesses.',
  keywords: 'haha coolers Dover, smart vending Dover New Hampshire, grab and go cooler Dover, cashless vending Dover',
  openGraph: {
    title: 'Haha Smart Coolers in Dover, New Hampshire',
    description: 'Revolutionary grab & go vending technology for Dover businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dover-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dover-new-hampshire',
  },
};

export default function DoverNewHampshireCoolerPageMetadata() {
  return <PageClient />;
}
