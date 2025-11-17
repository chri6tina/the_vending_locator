import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Laplace, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Laplace, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Laplace businesses.',
  keywords: 'haha coolers Laplace, smart vending Laplace Louisiana, grab and go cooler Laplace, cashless vending Laplace',
  openGraph: {
    title: 'Haha Smart Coolers in Laplace, Louisiana',
    description: 'Revolutionary grab & go vending technology for Laplace businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/laplace-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/laplace-louisiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LaplaceLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
