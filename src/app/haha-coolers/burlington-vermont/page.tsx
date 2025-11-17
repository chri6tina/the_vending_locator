import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Burlington, Vermont | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Burlington, Vermont. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Burlington businesses.',
  keywords: 'haha coolers Burlington, smart vending Burlington Vermont, grab and go cooler Burlington, cashless vending Burlington',
  openGraph: {
    title: 'Haha Smart Coolers in Burlington, Vermont',
    description: 'Revolutionary grab & go vending technology for Burlington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/burlington-vermont',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/burlington-vermont',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BurlingtonVermontCoolerPageMetadata() {
  return <PageClient />;
}
