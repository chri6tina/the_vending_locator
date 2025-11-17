import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chapel Hill, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chapel Hill, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chapel Hill businesses.',
  keywords: 'haha coolers Chapel Hill, smart vending Chapel Hill North Carolina, grab and go cooler Chapel Hill, cashless vending Chapel Hill',
  openGraph: {
    title: 'Haha Smart Coolers in Chapel Hill, North Carolina',
    description: 'Revolutionary grab & go vending technology for Chapel Hill businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chapel-hill-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chapel-hill-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ChapelHillNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
