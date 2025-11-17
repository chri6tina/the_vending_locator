import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saint Paul, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saint Paul, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saint Paul businesses.',
  keywords: 'haha coolers Saint Paul, smart vending Saint Paul Minnesota, grab and go cooler Saint Paul, cashless vending Saint Paul',
  openGraph: {
    title: 'Haha Smart Coolers in Saint Paul, Minnesota',
    description: 'Revolutionary grab & go vending technology for Saint Paul businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saint-paul-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saint-paul-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SaintPaulMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
