import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elmhurst, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elmhurst, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elmhurst businesses.',
  keywords: 'haha coolers Elmhurst, smart vending Elmhurst Illinois, grab and go cooler Elmhurst, cashless vending Elmhurst',
  openGraph: {
    title: 'Haha Smart Coolers in Elmhurst, Illinois',
    description: 'Revolutionary grab & go vending technology for Elmhurst businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elmhurst-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elmhurst-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ElmhurstIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
