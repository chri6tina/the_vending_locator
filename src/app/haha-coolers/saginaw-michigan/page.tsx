import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saginaw, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saginaw, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saginaw businesses.',
  keywords: 'haha coolers Saginaw, smart vending Saginaw Michigan, grab and go cooler Saginaw, cashless vending Saginaw',
  openGraph: {
    title: 'Haha Smart Coolers in Saginaw, Michigan',
    description: 'Revolutionary grab & go vending technology for Saginaw businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saginaw-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saginaw-michigan',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SaginawMichiganCoolerPageMetadata() {
  return <PageClient />;
}
