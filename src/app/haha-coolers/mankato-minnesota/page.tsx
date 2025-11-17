import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mankato, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mankato, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mankato businesses.',
  keywords: 'haha coolers Mankato, smart vending Mankato Minnesota, grab and go cooler Mankato, cashless vending Mankato',
  openGraph: {
    title: 'Haha Smart Coolers in Mankato, Minnesota',
    description: 'Revolutionary grab & go vending technology for Mankato businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mankato-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mankato-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MankatoMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
