import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Winston-Salem, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Winston-Salem, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Winston-Salem businesses.',
  keywords: 'haha coolers Winston-Salem, smart vending Winston-Salem North Carolina, grab and go cooler Winston-Salem, cashless vending Winston-Salem',
  openGraph: {
    title: 'Haha Smart Coolers in Winston-Salem, North Carolina',
    description: 'Revolutionary grab & go vending technology for Winston-Salem businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/winston-salem-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/winston-salem-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WinstonSalemNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
