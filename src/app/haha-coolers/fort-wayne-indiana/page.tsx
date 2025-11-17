import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fort Wayne, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fort Wayne, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fort Wayne businesses.',
  keywords: 'haha coolers Fort Wayne, smart vending Fort Wayne Indiana, grab and go cooler Fort Wayne, cashless vending Fort Wayne',
  openGraph: {
    title: 'Haha Smart Coolers in Fort Wayne, Indiana',
    description: 'Revolutionary grab & go vending technology for Fort Wayne businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fort-wayne-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fort-wayne-indiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FortWayneIndianaCoolerPageMetadata() {
  return <PageClient />;
}
