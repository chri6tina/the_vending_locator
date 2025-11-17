import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pullman, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pullman, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pullman businesses.',
  keywords: 'haha coolers Pullman, smart vending Pullman Washington, grab and go cooler Pullman, cashless vending Pullman',
  openGraph: {
    title: 'Haha Smart Coolers in Pullman, Washington',
    description: 'Revolutionary grab & go vending technology for Pullman businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pullman-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pullman-washington',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PullmanWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
