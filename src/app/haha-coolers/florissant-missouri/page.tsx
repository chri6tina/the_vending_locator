import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Florissant, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Florissant, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Florissant businesses.',
  keywords: 'haha coolers Florissant, smart vending Florissant Missouri, grab and go cooler Florissant, cashless vending Florissant',
  openGraph: {
    title: 'Haha Smart Coolers in Florissant, Missouri',
    description: 'Revolutionary grab & go vending technology for Florissant businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/florissant-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/florissant-missouri',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FlorissantMissouriCoolerPageMetadata() {
  return <PageClient />;
}
