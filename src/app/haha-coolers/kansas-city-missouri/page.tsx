import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kansas City, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kansas City, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kansas City businesses.',
  keywords: 'haha coolers Kansas City, smart vending Kansas City Missouri, grab and go cooler Kansas City, cashless vending Kansas City',
  openGraph: {
    title: 'Haha Smart Coolers in Kansas City, Missouri',
    description: 'Revolutionary grab & go vending technology for Kansas City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kansas-city-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kansas-city-missouri',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KansasCityMissouriCoolerPageMetadata() {
  return <PageClient />;
}
