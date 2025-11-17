import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Quincy, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Quincy, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Quincy businesses.',
  keywords: 'haha coolers Quincy, smart vending Quincy Illinois, grab and go cooler Quincy, cashless vending Quincy',
  openGraph: {
    title: 'Haha Smart Coolers in Quincy, Illinois',
    description: 'Revolutionary grab & go vending technology for Quincy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/quincy-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/quincy-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function QuincyIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
