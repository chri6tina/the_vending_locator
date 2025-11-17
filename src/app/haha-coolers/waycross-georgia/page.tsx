import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Waycross, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Waycross, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Waycross businesses.',
  keywords: 'haha coolers Waycross, smart vending Waycross Georgia, grab and go cooler Waycross, cashless vending Waycross',
  openGraph: {
    title: 'Haha Smart Coolers in Waycross, Georgia',
    description: 'Revolutionary grab & go vending technology for Waycross businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/waycross-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/waycross-georgia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WaycrossGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
