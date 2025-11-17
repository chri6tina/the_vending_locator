import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in St. Petersburg, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in St. Petersburg, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for St. Petersburg businesses.',
  keywords: 'haha coolers St. Petersburg, smart vending St. Petersburg Florida, grab and go cooler St. Petersburg, cashless vending St. Petersburg',
  openGraph: {
    title: 'Haha Smart Coolers in St. Petersburg, Florida',
    description: 'Revolutionary grab & go vending technology for St. Petersburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/st.-petersburg-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/st.-petersburg-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function StPetersburgFloridaCoolerPageMetadata() {
  return <PageClient />;
}
