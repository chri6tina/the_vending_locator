import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cape Girardeau, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cape Girardeau, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cape Girardeau businesses.',
  keywords: 'haha coolers Cape Girardeau, smart vending Cape Girardeau Missouri, grab and go cooler Cape Girardeau, cashless vending Cape Girardeau',
  openGraph: {
    title: 'Haha Smart Coolers in Cape Girardeau, Missouri',
    description: 'Revolutionary grab & go vending technology for Cape Girardeau businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cape-girardeau-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cape-girardeau-missouri',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CapeGirardeauMissouriCoolerPageMetadata() {
  return <PageClient />;
}
