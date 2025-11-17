import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Charlotte, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Charlotte, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Charlotte businesses.',
  keywords: 'haha coolers Charlotte, smart vending Charlotte North Carolina, grab and go cooler Charlotte, cashless vending Charlotte',
  openGraph: {
    title: 'Haha Smart Coolers in Charlotte, North Carolina',
    description: 'Revolutionary grab & go vending technology for Charlotte businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/charlotte-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/charlotte-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CharlotteNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
