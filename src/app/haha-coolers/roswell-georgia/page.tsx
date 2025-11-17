import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Roswell, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Roswell, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Roswell businesses.',
  keywords: 'haha coolers Roswell, smart vending Roswell Georgia, grab and go cooler Roswell, cashless vending Roswell',
  openGraph: {
    title: 'Haha Smart Coolers in Roswell, Georgia',
    description: 'Revolutionary grab & go vending technology for Roswell businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/roswell-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/roswell-georgia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RoswellGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
