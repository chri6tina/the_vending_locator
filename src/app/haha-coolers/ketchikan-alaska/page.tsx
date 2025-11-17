import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ketchikan, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ketchikan, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ketchikan businesses.',
  keywords: 'haha coolers Ketchikan, smart vending Ketchikan Alaska, grab and go cooler Ketchikan, cashless vending Ketchikan',
  openGraph: {
    title: 'Haha Smart Coolers in Ketchikan, Alaska',
    description: 'Revolutionary grab & go vending technology for Ketchikan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ketchikan-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ketchikan-alaska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KetchikanAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
