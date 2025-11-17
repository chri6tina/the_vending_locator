import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saint Louis, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saint Louis, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saint Louis businesses.',
  keywords: 'haha coolers Saint Louis, smart vending Saint Louis Missouri, grab and go cooler Saint Louis, cashless vending Saint Louis',
  openGraph: {
    title: 'Haha Smart Coolers in Saint Louis, Missouri',
    description: 'Revolutionary grab & go vending technology for Saint Louis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saint-louis-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saint-louis-missouri',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SaintLouisMissouriCoolerPageMetadata() {
  return <PageClient />;
}
