import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Marietta, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Marietta, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Marietta businesses.',
  keywords: 'haha coolers Marietta, smart vending Marietta Georgia, grab and go cooler Marietta, cashless vending Marietta',
  openGraph: {
    title: 'Haha Smart Coolers in Marietta, Georgia',
    description: 'Revolutionary grab & go vending technology for Marietta businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/marietta-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/marietta-georgia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MariettaGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
