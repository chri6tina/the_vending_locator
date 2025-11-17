import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Port Huron, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Port Huron, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Port Huron businesses.',
  keywords: 'haha coolers Port Huron, smart vending Port Huron Michigan, grab and go cooler Port Huron, cashless vending Port Huron',
  openGraph: {
    title: 'Haha Smart Coolers in Port Huron, Michigan',
    description: 'Revolutionary grab & go vending technology for Port Huron businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/port-huron-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/port-huron-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PortHuronMichiganCoolerPageMetadata() {
  return <PageClient />;
}
