import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gallup, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gallup, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gallup businesses.',
  keywords: 'haha coolers Gallup, smart vending Gallup New Mexico, grab and go cooler Gallup, cashless vending Gallup',
  openGraph: {
    title: 'Haha Smart Coolers in Gallup, New Mexico',
    description: 'Revolutionary grab & go vending technology for Gallup businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gallup-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gallup-new-mexico',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GallupNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
