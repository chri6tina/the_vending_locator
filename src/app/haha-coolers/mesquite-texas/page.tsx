import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mesquite, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mesquite, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mesquite businesses.',
  keywords: 'haha coolers Mesquite, smart vending Mesquite Texas, grab and go cooler Mesquite, cashless vending Mesquite',
  openGraph: {
    title: 'Haha Smart Coolers in Mesquite, Texas',
    description: 'Revolutionary grab & go vending technology for Mesquite businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mesquite-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mesquite-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MesquiteTexasCoolerPageMetadata() {
  return <PageClient />;
}
