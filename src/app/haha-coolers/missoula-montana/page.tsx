import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Missoula, Montana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Missoula, Montana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Missoula businesses.',
  keywords: 'haha coolers Missoula, smart vending Missoula Montana, grab and go cooler Missoula, cashless vending Missoula',
  openGraph: {
    title: 'Haha Smart Coolers in Missoula, Montana',
    description: 'Revolutionary grab & go vending technology for Missoula businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/missoula-montana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/missoula-montana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MissoulaMontanaCoolerPageMetadata() {
  return <PageClient />;
}
