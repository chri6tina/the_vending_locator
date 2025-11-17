import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saint Joseph, Missouri | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saint Joseph, Missouri. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saint Joseph businesses.',
  keywords: 'haha coolers Saint Joseph, smart vending Saint Joseph Missouri, grab and go cooler Saint Joseph, cashless vending Saint Joseph',
  openGraph: {
    title: 'Haha Smart Coolers in Saint Joseph, Missouri',
    description: 'Revolutionary grab & go vending technology for Saint Joseph businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saint-joseph-missouri',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saint-joseph-missouri',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SaintJosephMissouriCoolerPageMetadata() {
  return <PageClient />;
}
