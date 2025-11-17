import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Framingham, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Framingham, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Framingham businesses.',
  keywords: 'haha coolers Framingham, smart vending Framingham Massachusetts, grab and go cooler Framingham, cashless vending Framingham',
  openGraph: {
    title: 'Haha Smart Coolers in Framingham, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Framingham businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/framingham-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/framingham-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FraminghamMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
