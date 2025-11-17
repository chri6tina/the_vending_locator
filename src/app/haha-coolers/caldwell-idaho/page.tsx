import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Caldwell, Idaho | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Caldwell, Idaho. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Caldwell businesses.',
  keywords: 'haha coolers Caldwell, smart vending Caldwell Idaho, grab and go cooler Caldwell, cashless vending Caldwell',
  openGraph: {
    title: 'Haha Smart Coolers in Caldwell, Idaho',
    description: 'Revolutionary grab & go vending technology for Caldwell businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/caldwell-idaho',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/caldwell-idaho',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CaldwellIdahoCoolerPageMetadata() {
  return <PageClient />;
}
