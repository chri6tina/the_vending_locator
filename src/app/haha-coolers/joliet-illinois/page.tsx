import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Joliet, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Joliet, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Joliet businesses.',
  keywords: 'haha coolers Joliet, smart vending Joliet Illinois, grab and go cooler Joliet, cashless vending Joliet',
  openGraph: {
    title: 'Haha Smart Coolers in Joliet, Illinois',
    description: 'Revolutionary grab & go vending technology for Joliet businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/joliet-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/joliet-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function JolietIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
