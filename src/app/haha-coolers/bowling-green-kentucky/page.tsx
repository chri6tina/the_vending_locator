import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bowling Green, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bowling Green, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bowling Green businesses.',
  keywords: 'haha coolers Bowling Green, smart vending Bowling Green Kentucky, grab and go cooler Bowling Green, cashless vending Bowling Green',
  openGraph: {
    title: 'Haha Smart Coolers in Bowling Green, Kentucky',
    description: 'Revolutionary grab & go vending technology for Bowling Green businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bowling-green-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bowling-green-kentucky',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BowlingGreenKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
