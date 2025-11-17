import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Topeka, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Topeka, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Topeka businesses.',
  keywords: 'haha coolers Topeka, smart vending Topeka Kansas, grab and go cooler Topeka, cashless vending Topeka',
  openGraph: {
    title: 'Haha Smart Coolers in Topeka, Kansas',
    description: 'Revolutionary grab & go vending technology for Topeka businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/topeka-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/topeka-kansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TopekaKansasCoolerPageMetadata() {
  return <PageClient />;
}
