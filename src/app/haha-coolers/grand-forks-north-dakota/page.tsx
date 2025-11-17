import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Grand Forks, North Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Grand Forks, North Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Grand Forks businesses.',
  keywords: 'haha coolers Grand Forks, smart vending Grand Forks North Dakota, grab and go cooler Grand Forks, cashless vending Grand Forks',
  openGraph: {
    title: 'Haha Smart Coolers in Grand Forks, North Dakota',
    description: 'Revolutionary grab & go vending technology for Grand Forks businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/grand-forks-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/grand-forks-north-dakota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GrandForksNorthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
