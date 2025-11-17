import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Alpharetta, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Alpharetta, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Alpharetta businesses.',
  keywords: 'haha coolers Alpharetta, smart vending Alpharetta Georgia, grab and go cooler Alpharetta, cashless vending Alpharetta',
  openGraph: {
    title: 'Haha Smart Coolers in Alpharetta, Georgia',
    description: 'Revolutionary grab & go vending technology for Alpharetta businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/alpharetta-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/alpharetta-georgia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AlpharettaGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
