import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Statesboro, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Statesboro, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Statesboro businesses.',
  keywords: 'haha coolers Statesboro, smart vending Statesboro Georgia, grab and go cooler Statesboro, cashless vending Statesboro',
  openGraph: {
    title: 'Haha Smart Coolers in Statesboro, Georgia',
    description: 'Revolutionary grab & go vending technology for Statesboro businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/statesboro-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/statesboro-georgia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function StatesboroGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
