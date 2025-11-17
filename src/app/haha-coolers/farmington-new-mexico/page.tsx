import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Farmington, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Farmington, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Farmington businesses.',
  keywords: 'haha coolers Farmington, smart vending Farmington New Mexico, grab and go cooler Farmington, cashless vending Farmington',
  openGraph: {
    title: 'Haha Smart Coolers in Farmington, New Mexico',
    description: 'Revolutionary grab & go vending technology for Farmington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/farmington-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/farmington-new-mexico',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FarmingtonNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
