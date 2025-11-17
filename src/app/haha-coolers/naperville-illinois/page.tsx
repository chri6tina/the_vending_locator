import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Naperville, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Naperville, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Naperville businesses.',
  keywords: 'haha coolers Naperville, smart vending Naperville Illinois, grab and go cooler Naperville, cashless vending Naperville',
  openGraph: {
    title: 'Haha Smart Coolers in Naperville, Illinois',
    description: 'Revolutionary grab & go vending technology for Naperville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/naperville-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/naperville-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NapervilleIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
