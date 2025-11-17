import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Colorado Springs, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Colorado Springs, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Colorado Springs businesses.',
  keywords: 'haha coolers Colorado Springs, smart vending Colorado Springs Colorado, grab and go cooler Colorado Springs, cashless vending Colorado Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Colorado Springs, Colorado',
    description: 'Revolutionary grab & go vending technology for Colorado Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/colorado-springs-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/colorado-springs-colorado',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ColoradoSpringsColoradoCoolerPageMetadata() {
  return <PageClient />;
}
