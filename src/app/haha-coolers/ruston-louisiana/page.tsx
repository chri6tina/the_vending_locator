import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ruston, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ruston, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ruston businesses.',
  keywords: 'haha coolers Ruston, smart vending Ruston Louisiana, grab and go cooler Ruston, cashless vending Ruston',
  openGraph: {
    title: 'Haha Smart Coolers in Ruston, Louisiana',
    description: 'Revolutionary grab & go vending technology for Ruston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ruston-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ruston-louisiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RustonLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
