import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Butte, Montana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Butte, Montana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Butte businesses.',
  keywords: 'haha coolers Butte, smart vending Butte Montana, grab and go cooler Butte, cashless vending Butte',
  openGraph: {
    title: 'Haha Smart Coolers in Butte, Montana',
    description: 'Revolutionary grab & go vending technology for Butte businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/butte-montana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/butte-montana',
  },
};

export default function ButteMontanaCoolerPageMetadata() {
  return <PageClient />;
}
