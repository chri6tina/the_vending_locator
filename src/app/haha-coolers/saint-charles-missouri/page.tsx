import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saint Charles, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saint Charles, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saint Charles businesses.',
  keywords: 'haha coolers Saint Charles, smart vending Saint Charles Missouri, grab and go cooler Saint Charles, cashless vending Saint Charles',
  openGraph: {
    title: 'Haha Smart Coolers in Saint Charles, Missouri',
    description: 'Revolutionary grab & go vending technology for Saint Charles businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saint-charles-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saint-charles-missouri',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SaintCharlesMissouriCoolerPageMetadata() {
  return <PageClient />;
}
