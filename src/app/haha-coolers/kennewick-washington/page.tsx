import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kennewick, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kennewick, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kennewick businesses.',
  keywords: 'haha coolers Kennewick, smart vending Kennewick Washington, grab and go cooler Kennewick, cashless vending Kennewick',
  openGraph: {
    title: 'Haha Smart Coolers in Kennewick, Washington',
    description: 'Revolutionary grab & go vending technology for Kennewick businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kennewick-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kennewick-washington',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KennewickWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
