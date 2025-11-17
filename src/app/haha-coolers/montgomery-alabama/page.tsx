import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Montgomery, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Montgomery, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Montgomery businesses.',
  keywords: 'haha coolers Montgomery, smart vending Montgomery Alabama, grab and go cooler Montgomery, cashless vending Montgomery',
  openGraph: {
    title: 'Haha Smart Coolers in Montgomery, Alabama',
    description: 'Revolutionary grab & go vending technology for Montgomery businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/montgomery-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/montgomery-alabama',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MontgomeryAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
