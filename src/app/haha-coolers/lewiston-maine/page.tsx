import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lewiston, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lewiston, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lewiston businesses.',
  keywords: 'haha coolers Lewiston, smart vending Lewiston Maine, grab and go cooler Lewiston, cashless vending Lewiston',
  openGraph: {
    title: 'Haha Smart Coolers in Lewiston, Maine',
    description: 'Revolutionary grab & go vending technology for Lewiston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lewiston-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lewiston-maine',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LewistonMaineCoolerPageMetadata() {
  return <PageClient />;
}
