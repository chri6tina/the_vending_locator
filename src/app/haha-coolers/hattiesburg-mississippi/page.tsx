import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hattiesburg, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hattiesburg, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hattiesburg businesses.',
  keywords: 'haha coolers Hattiesburg, smart vending Hattiesburg Mississippi, grab and go cooler Hattiesburg, cashless vending Hattiesburg',
  openGraph: {
    title: 'Haha Smart Coolers in Hattiesburg, Mississippi',
    description: 'Revolutionary grab & go vending technology for Hattiesburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hattiesburg-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hattiesburg-mississippi',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HattiesburgMississippiCoolerPageMetadata() {
  return <PageClient />;
}
