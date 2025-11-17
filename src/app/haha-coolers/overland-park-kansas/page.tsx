import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Overland Park, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Overland Park, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Overland Park businesses.',
  keywords: 'haha coolers Overland Park, smart vending Overland Park Kansas, grab and go cooler Overland Park, cashless vending Overland Park',
  openGraph: {
    title: 'Haha Smart Coolers in Overland Park, Kansas',
    description: 'Revolutionary grab & go vending technology for Overland Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/overland-park-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/overland-park-kansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function OverlandParkKansasCoolerPageMetadata() {
  return <PageClient />;
}
