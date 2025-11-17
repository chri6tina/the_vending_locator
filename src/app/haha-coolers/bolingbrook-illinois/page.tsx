import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bolingbrook, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bolingbrook, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bolingbrook businesses.',
  keywords: 'haha coolers Bolingbrook, smart vending Bolingbrook Illinois, grab and go cooler Bolingbrook, cashless vending Bolingbrook',
  openGraph: {
    title: 'Haha Smart Coolers in Bolingbrook, Illinois',
    description: 'Revolutionary grab & go vending technology for Bolingbrook businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bolingbrook-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bolingbrook-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BolingbrookIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
