import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Port Orange, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Port Orange, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Port Orange businesses.',
  keywords: 'haha coolers Port Orange, smart vending Port Orange Florida, grab and go cooler Port Orange, cashless vending Port Orange',
  openGraph: {
    title: 'Haha Smart Coolers in Port Orange, Florida',
    description: 'Revolutionary grab & go vending technology for Port Orange businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/port-orange-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/port-orange-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PortOrangeFloridaCoolerPageMetadata() {
  return <PageClient />;
}
