import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sterling Heights, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sterling Heights, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sterling Heights businesses.',
  keywords: 'haha coolers Sterling Heights, smart vending Sterling Heights Michigan, grab and go cooler Sterling Heights, cashless vending Sterling Heights',
  openGraph: {
    title: 'Haha Smart Coolers in Sterling Heights, Michigan',
    description: 'Revolutionary grab & go vending technology for Sterling Heights businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sterling-heights-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sterling-heights-michigan',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SterlingHeightsMichiganCoolerPageMetadata() {
  return <PageClient />;
}
