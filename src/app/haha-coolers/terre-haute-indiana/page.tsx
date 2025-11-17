import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Terre Haute, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Terre Haute, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Terre Haute businesses.',
  keywords: 'haha coolers Terre Haute, smart vending Terre Haute Indiana, grab and go cooler Terre Haute, cashless vending Terre Haute',
  openGraph: {
    title: 'Haha Smart Coolers in Terre Haute, Indiana',
    description: 'Revolutionary grab & go vending technology for Terre Haute businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/terre-haute-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/terre-haute-indiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TerreHauteIndianaCoolerPageMetadata() {
  return <PageClient />;
}
