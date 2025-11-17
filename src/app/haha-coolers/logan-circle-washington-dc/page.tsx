import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Logan Circle, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Logan Circle, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Logan Circle businesses.',
  keywords: 'haha coolers Logan Circle, smart vending Logan Circle Washington DC, grab and go cooler Logan Circle, cashless vending Logan Circle',
  openGraph: {
    title: 'Haha Smart Coolers in Logan Circle, Washington DC',
    description: 'Revolutionary grab & go vending technology for Logan Circle businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/logan-circle-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/logan-circle-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LoganCircleWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
