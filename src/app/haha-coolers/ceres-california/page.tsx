import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ceres, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ceres, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ceres businesses.',
  keywords: 'haha coolers Ceres, smart vending Ceres California, grab and go cooler Ceres, cashless vending Ceres',
  openGraph: {
    title: 'Haha Smart Coolers in Ceres, California',
    description: 'Revolutionary grab & go vending technology for Ceres businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ceres-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ceres-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CeresCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
