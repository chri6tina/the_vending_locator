import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bozeman, Montana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bozeman, Montana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bozeman businesses.',
  keywords: 'haha coolers Bozeman, smart vending Bozeman Montana, grab and go cooler Bozeman, cashless vending Bozeman',
  openGraph: {
    title: 'Haha Smart Coolers in Bozeman, Montana',
    description: 'Revolutionary grab & go vending technology for Bozeman businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bozeman-montana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bozeman-montana',
  },
};

export default function BozemanMontanaCoolerPageMetadata() {
  return <PageClient />;
}
